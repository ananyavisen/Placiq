import {
  ArrowLeft,
  Camera,
  User,
  Mail,
  Phone,
  ShieldCheck,
} from "lucide-react";

import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import logo from "../../assets/logo.png";

const EditProfile = () => {
  const fileInputRef = useRef(null);
  const [user, setUser] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [previewPhoto, setPreviewPhoto] = useState(null);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  /*
   * Get current authenticated user
   * Django identifies the user through the session cookie.
   */
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/api/auth/me/",
          {
            method: "GET",
            credentials: "include",
          }
        );
  
        if (!response.ok) {
          throw new Error("Failed to fetch profile.");
        }
  
        const data = await response.json();
        setUser(data)
        setFormData({
          name: data.name || "",
          email: data.email || "",
        });
  
        setPreviewPhoto(data.profile_photo || null);
      } catch (err) {
        console.error("Profile fetch error:", err);
        setError("Unable to load your profile.");
      } finally {
        setLoading(false);
      }
    };
  
    fetchUser();
  }, []);
  /*
   * Handle text inputs
   */
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /*
   * Open image picker
   */
  const handlePhotoClick = () => {
    fileInputRef.current?.click();
  };

  /*
   * Handle selected image
   */
  const handlePhotoChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setError("");
    setSuccess("");

    if (!file.type.startsWith("image/")) {
      setError("Please select a valid image.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError("Profile photo must be smaller than 5MB.");
      return;
    }

    setProfilePhoto(file);

    const imageUrl = URL.createObjectURL(file);
    setPreviewPhoto(imageUrl);
  };

  /*
   * Save profile
   */
  const handleSave = async () => {
    setSaving(true);
    setError("");
    setSuccess("");
  
    try {
      // Get CSRF token
      const csrfResponse = await fetch(
        "http://localhost:8000/api/auth/csrf/",
        {
          method: "GET",
          credentials: "include",
        }
      );
  
      if (!csrfResponse.ok) {
        throw new Error("Unable to get CSRF token.");
      }
  
      const csrfData = await csrfResponse.json();
  
      const data = new FormData();
  
      data.append("name", formData.name);
      data.append("email", formData.email);
  
      if (profilePhoto) {
        data.append("profile_photo", profilePhoto);
      }
  
      // Update profile
      const response = await fetch(
        "http://localhost:8000/api/auth/me/",
        {
          method: "PATCH",
          credentials: "include",
          headers: {
            "X-CSRFToken": csrfData.csrfToken,
          },
          body: data,
        }
      );
  
      const result = await response.json();
  
      if (!response.ok) {
        throw new Error(
          result.error || "Failed to update profile."
        );
      }
  
      setSuccess("Profile updated successfully.");
  
      if (result.user?.profile_photo) {
        setPreviewPhoto(result.user.profile_photo);
      }
  
      setProfilePhoto(null);
    } catch (err) {
      console.error("Profile update error:", err);
      setError(
        err.message || "Unable to update your profile."
      );
    } finally {
      setSaving(false);
    }
  };
  /*
   * Reset unsaved changes
   */
  const handleCancel = () => {
    if (!user) return;
  
    setFormData({
      name: user.name || "",
      email: user.email || "",
    });
  
    setPreviewPhoto(user.profile_photo || null);
    setProfilePhoto(null);
  
    setError("");
    setSuccess("");
  };

  /*
   * Fallback avatar
   */
  const avatarFallback = `https://ui-avatars.com/api/?name=${encodeURIComponent(
    formData.name || "User"
  )}&background=6C3CF0&color=fff`;

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-[#6B7280]">
          Loading profile...
        </p>
      </div>
    );
  }

  return (
    <>
      {/* Logo */}
      <div className="ml-8 mt-2 flex items-center gap-3">
        <img
          src={logo}
          alt="Placiq"
          className="h-14 w-14 object-contain"
        />

        <div>
          <h2 className="text-[28px] font-bold leading-none text-[#1F245C]">
            Placiq
          </h2>

          <p className="mt-1 text-[13px] leading-5 text-[#6B7280]">
            Smart Prep.
            <br />
            Right Match.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto mt-8 flex max-w-4xl flex-col items-center">

        {/* Back */}
        <div className="mb-5 w-full max-w-2xl">
          <Link
            to="/settings"
            className="flex w-fit items-center gap-2 text-[14px] font-medium text-[#6C3CF0] hover:underline"
          >
            <ArrowLeft size={18} />
            Back to Settings
          </Link>
        </div>

        {/* Heading */}
        <div className="mb-7 text-center">
          <h1 className="text-[36px] font-bold text-[#1F245C]">
            Edit Profile
          </h1>

          <p className="mt-2 text-[16px] text-[#6B7280]">
            Update your personal information and profile details.
          </p>
        </div>

        {/* Card */}
        <div className="w-full max-w-2xl rounded-3xl border border-white/60 bg-white/85 p-10 shadow-[0_10px_35px_rgba(80,60,120,0.08)] backdrop-blur-sm">

          {/* Profile Photo */}
          <div className="flex flex-col items-center">
            <div className="relative">

              <img
                src={previewPhoto || avatarFallback}
                alt="Profile"
                className="h-28 w-28 rounded-full border-4 border-white object-cover shadow-md"
              />

              <button
                type="button"
                onClick={handlePhotoClick}
                className="absolute bottom-1 right-1 flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[#6C3CF0] text-white shadow-sm transition hover:bg-[#5B2FDC]"
                aria-label="Change profile photo"
              >
                <Camera size={17} />
              </button>
            </div>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handlePhotoChange}
            />

            <button
              type="button"
              onClick={handlePhotoClick}
              className="mt-3 text-[13px] font-medium text-[#6C3CF0] hover:underline"
            >
              Change Photo
            </button>
          </div>

          {/* Form */}
          <div className="mt-8 space-y-5">

            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="text-[13px] font-medium text-[#1F245C]"
              >
                Full Name
              </label>

              <div className="relative mt-2">
                <User
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]"
                />

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="h-12 w-full rounded-xl border border-[#D9DCE5] bg-white px-11 text-[14px] text-[#1F245C] outline-none transition focus:border-[#8B5CF6]"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="text-[13px] font-medium text-[#1F245C]"
              >
                Email Address
              </label>

              <div className="relative mt-2">
                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]"
                />

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="h-12 w-full rounded-xl border border-[#D9DCE5] bg-white px-11 text-[14px] text-[#1F245C] outline-none transition focus:border-[#8B5CF6]"
                />
              </div>
            </div>

            
          </div>

          {/* Messages */}
          {error && (
            <p className="mt-4 text-sm text-red-500">
              {error}
            </p>
          )}

          {success && (
            <p className="mt-4 text-sm text-green-600">
              {success}
            </p>
          )}

          {/* Buttons */}
          <div className="mt-8 flex items-center justify-end gap-3">

            <button
              type="button"
              onClick={handleCancel}
              disabled={saving}
              className="rounded-xl border border-[#D9DCE5] bg-white px-6 py-2.5 text-[14px] font-medium text-[#6B7280] transition hover:bg-[#F9FAFB] disabled:opacity-50"
            >
              Cancel
            </button>

            <button
              type="button"
              onClick={handleSave}
              disabled={saving}
              className="rounded-xl bg-[#6C3CF0] px-6 py-2.5 text-[14px] font-medium text-white shadow-sm transition hover:bg-[#5B2FDC] disabled:opacity-50"
            >
              {saving ? "Saving..." : "Save Changes"}
            </button>
          </div>

          {/* Security Note */}
          <div className="mt-6 flex items-start gap-3 rounded-xl bg-[#F7F4FF] px-4 py-3">
            <ShieldCheck
              size={18}
              className="mt-0.5 shrink-0 text-[#6C3CF0]"
            />

            <p className="text-[12px] leading-5 text-[#6B7280]">
              Your personal information is kept secure and will only
              be used to improve your Placiq experience.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;