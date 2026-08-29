import { Target } from "lucide-react";

import googleLogo from "../../assets/companies/google.svg";
import microsoftLogo from "../../assets/companies/microsoft.svg";
import adobeLogo from "../../assets/companies/adobe.svg";

import { useEffect, useState } from "react";

const CareerPreferences = () => {
  const [preferences, setPreferences] = useState({
    target_role: "",
    target_companies: [],
    experience_level: "",
    preferred_location: "",
    preferred_job_type: "",
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  // Get current user's preferences
  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/api/auth/me/",
          {
            credentials: "include",
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch user");
        }

        const data = await response.json();

        setPreferences({
          target_role: data.target_role || "Software Engineer",
          target_companies: data.target_companies || [],
          experience_level: data.experience_level || "Entry Level",
          preferred_location: data.preferred_location || "Delhi NCR",
          preferred_job_type: data.preferred_job_type || "Full-time",
        });
      } catch (error) {
        console.error("Failed to get preferences:", error);
      } finally {
        setLoading(false);
      }
    };

    getUser();
  }, []);

  // Handle select changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setPreferences((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Save preferences
  const handleUpdate = async () => {
    setSaving(true);
    setMessage("");
  
    try {
      // Get CSRF token
      const csrfResponse = await fetch(
        "http://localhost:8000/api/auth/csrf/",
        {
          credentials: "include",
        }
      );
  
      if (!csrfResponse.ok) {
        throw new Error("Failed to get CSRF token");
      }
  
      const csrfData = await csrfResponse.json();
  
      // Update preferences
      const response = await fetch(
        "http://localhost:8000/api/auth/me/",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": csrfData.csrfToken,
          },
          credentials: "include",
          body: JSON.stringify(preferences),
        }
      );
  
      const data = await response.json();
  
      if (!response.ok) {
        console.error("Update response:", data);
        throw new Error(data.detail || "Failed to update preferences");
      }
  
      console.log("Updated user:", data);
  
      setMessage("Preferences updated successfully!");
    } catch (error) {
      console.error("Update error:", error);
      setMessage("Failed to update preferences.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="w-full rounded-2xl border border-white/60 bg-white/70 p-6 shadow-sm backdrop-blur-sm">
        Loading preferences...
      </div>
    );
  }

  return (
    <div className="w-full rounded-2xl border border-white/60 bg-white/70 p-6 shadow-sm backdrop-blur-sm">

      {/* Heading */}
      <div className="mb-6">
        <h2 className="text-[20px] font-semibold text-[#1F245C]">
          Career Preferences
        </h2>

        <p className="mt-1 text-[14px] text-[#6B7280]">
          Set your placement goals and preferences.
        </p>
      </div>

      {/* Career Details */}
      <div className="space-y-5">

        {/* Target Role */}
        <div>
          <p className="text-[13px] text-[#6B7280]">
            Target Role
          </p>

          <select
            name="target_role"
            value={preferences.target_role}
            onChange={handleChange}
            className="mt-1 w-full rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-[15px] text-[#1F245C] outline-none focus:border-[#8B5CF6]"
          >
            <option>Software Engineer</option>
            <option>Frontend Developer</option>
            <option>Backend Developer</option>
            <option>Full Stack Developer</option>
            <option>Data Analyst</option>
          </select>
        </div>

        {/* Target Companies */}
        <div>
          <p className="text-[13px] text-[#6B7280]">
            Target Companies
          </p>

          <div className="mt-2 flex items-center gap-1">

            <img
              src={googleLogo}
              alt="Google"
              className="h-8 w-8 rounded-full bg-white p-1 shadow-sm"
            />

            <img
              src={microsoftLogo}
              alt="Microsoft"
              className="h-8 w-8 rounded-full bg-white p-1 shadow-sm"
            />

            <img
              src={adobeLogo}
              alt="Adobe"
              className="h-8 w-8 rounded-full bg-white p-1 shadow-sm"
            />

            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#EDE7FF] text-[10px] font-medium text-[#6C3CF0]">
              +3
            </div>

          </div>
        </div>

        {/* Experience + Location */}
        <div className="grid grid-cols-2 gap-4">

          {/* Experience Level */}
          <div>
            <p className="text-[13px] text-[#6B7280]">
              Experience Level
            </p>

            <select
              name="experience_level"
              value={preferences.experience_level}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-[15px] text-[#1F245C] outline-none focus:border-[#8B5CF6]"
            >
              <option>Entry Level</option>
              <option>Mid Level</option>
              <option>Senior Level</option>
            </select>
          </div>

          {/* Preferred Location */}
          <div>
            <p className="text-[13px] text-[#6B7280]">
              Preferred Location
            </p>

            <select
              name="preferred_location"
              value={preferences.preferred_location}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-[15px] text-[#1F245C] outline-none focus:border-[#8B5CF6]"
            >
              <option>Delhi NCR</option>
              <option>Bangalore</option>
              <option>Hyderabad</option>
              <option>Pune</option>
              <option>Mumbai</option>
              <option>Remote</option>
            </select>
          </div>

        </div>

        {/* Preferred Job Type */}
        <div>
          <p className="text-[13px] text-[#6B7280]">
            Preferred Job Type
          </p>

          <select
            name="preferred_job_type"
            value={preferences.preferred_job_type}
            onChange={handleChange}
            className="mt-1 w-full rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-[15px] text-[#1F245C] outline-none focus:border-[#8B5CF6]"
          >
            <option>Full-time</option>
            <option>Part-time</option>
            <option>Internship</option>
            <option>Contract</option>
          </select>
        </div>

      </div>

      {/* Update Goal Button */}
      <div className="mt-6 flex items-center gap-4">

        <button
          onClick={handleUpdate}
          disabled={saving}
          className="flex items-center justify-center gap-2 rounded-xl bg-[#EEE8FF] px-5 py-2.5 text-[14px] font-medium text-[#6C3CF0] transition hover:bg-[#E5DCFF] disabled:opacity-50"
        >
          <Target size={17} />

          {saving ? "Updating..." : "Update Goal"}
        </button>

        {message && (
          <p className="text-sm text-[#6C3CF0]">
            {message}
          </p>
        )}

      </div>

    </div>
  );
};

export default CareerPreferences;
