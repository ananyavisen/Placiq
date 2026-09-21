import { useEffect, useState } from "react";
import { FileText, Trash2 } from "lucide-react";

export default function Uploaded() {
  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchResume = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/api/resume/latest/",
          {
            credentials: "include",
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch resume");
        }

        const data = await response.json();
        setResume(data);
      } catch (error) {
        console.error("Resume fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchResume();
  }, []);
  const handleDelete = async () => {
  try {
    const csrfResponse = await fetch(
      "http://localhost:8000/api/auth/csrf/",
      { credentials: "include" }
    );

    const csrfData = await csrfResponse.json();

    const response = await fetch(
      "http://localhost:8000/api/resume/delete/",
      {
        method: "DELETE",
        headers: {
          "X-CSRFToken": csrfData.csrfToken,
        },
        credentials: "include",
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Delete failed.");
    }

    setResume(null);
  } catch (error) {
    console.error("Delete error:", error);
  }
};

  if (loading) {
    return (
      <div className="rounded-2xl border border-[#ECE8F8] bg-white/20 p-3">
        <p className="text-sm text-slate-500">Loading resume...</p>
      </div>
    );
  }

  if (!resume) {
    return (
      <div className="rounded-2xl border border-[#ECE8F8] bg-white/20 p-3">
        <p className="text-sm text-slate-500">No resume uploaded yet.</p>
      </div>
    );
  }

  const fileSize = `${(resume.file_size / 1024).toFixed(0)} KB`;

  return (
    <div className="flex items-center justify-between rounded-2xl border border-[#ECE8F8] bg-white/20 p-3">
      <div className="flex items-center gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50">
          <FileText className="text-red-500" />
        </div>

        <div>
          <a
          href={`http://localhost:8000${resume.file}`}
        target="_blank"
      rel="noopener noreferrer"
    className="font-semibold text-slate-800 hover:text-violet-600 hover:underline"
      >
  {resume.original_filename}
</a>

          <p className="mt-1 text-sm text-slate-500">
            {fileSize} • Uploaded just now
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
        onClick={handleDelete}
        className="rounded-lg border border-gray-200 p-2 hover:bg-gray-50"
        >
          <Trash2 size={18} className="text-slate-500" />
        </button>
      </div>
    </div>
  );
}