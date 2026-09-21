import { useRef, useState } from "react";
import { UploadCloud } from "lucide-react";

export default function UploadDropzone() {
  const fileInputRef = useRef(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  const handleFileChange = async (event) => {
    const file = event.target.files[0];

    if (!file) return;

    const allowedTypes = [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(file.type)) {
      setMessage("Only PDF or DOCX files are allowed.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setMessage("File size must be less than 5MB.");
      return;
    }

    const formData = new FormData();
formData.append("file", file);

const csrfResponse = await fetch(
  "http://localhost:8000/api/auth/csrf/",
  {
    credentials: "include",
  }
);

const csrfData = await csrfResponse.json();

try {
      setUploading(true);
      setMessage("");

      const response = await fetch(
  "http://localhost:8000/api/resume/upload/",
  {
    method: "POST",
    headers: {
      "X-CSRFToken": csrfData.csrfToken,
    },
    credentials: "include",
    body: formData,
  }
);

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Upload failed.");
      }

      console.log("Resume uploaded:", data);
      setMessage("Resume uploaded successfully!");
      window.location.reload();
    } catch (error) {
      console.error(error);
      setMessage(error.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex h-48 flex-col items-center justify-center rounded-2xl border-2 border-dashed border-violet-300 bg-violet-50/20 px-6">
      <UploadCloud
        size={32}
        className="mb-3 text-violet-600"
      />

      <h4 className="text-sm font-semibold text-slate-700">
        Drag & drop your file here
      </h4>

      <p className="my-2 text-xs text-slate-400">or</p>

      <input
        ref={fileInputRef}
        type="file"
        accept=".pdf,.docx"
        onChange={handleFileChange}
        className="hidden"
      />

      <button
        type="button"
        onClick={() => fileInputRef.current?.click()}
        disabled={uploading}
        className="rounded-lg border border-violet-500 px-6 py-2 text-sm font-medium text-violet-600 transition hover:bg-violet-50 disabled:opacity-50"
      >
        {uploading ? "Uploading..." : "Choose File"}
      </button>

      <p className="mt-3 text-xs text-slate-500">
        PDF or DOCX (Max 5MB)
      </p>

      {message && (
        <p className="mt-2 text-xs text-slate-600">
          {message}
        </p>
      )}
    </div>
  );
}