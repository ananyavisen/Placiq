import axios from "axios";

const API_BASE = "http://localhost:8000/api";

const getCSRFToken = () => {
  const match = document.cookie.match(/(^|;)\s*csrftoken=([^;]+)/);
  return match ? decodeURIComponent(match[2]) : null;
};

export const submitInterviewAnswer = async (
    sessionId,
    audioBlob
  ) => {
    const csrfToken = getCSRFToken();
  
    const formData = new FormData();
    formData.append("audio", audioBlob);
  
    const response = await axios.post(
      `${API_BASE}/mock-interview/${sessionId}/answer/`,
      formData,
      {
        withCredentials: true,
        headers: {
          "X-CSRFToken": csrfToken,
          "Content-Type": "multipart/form-data",
        },
      }
    );
  
    return response.data;
  };
  export const getInterviewReport = async (sessionId) => {
    const response = await axios.get(
      `${API_BASE}/mock-interview/${sessionId}/report/`,
      {
        withCredentials: true,
      }
    );
  
    return response.data;
  };
export const getInterviewSessions = async () => {
  const response = await axios.get(
    `${API_BASE}/mock-interview/sessions/`,
    {
      withCredentials: true,
    }
  );

  return response.data;
};

export const createInterviewSession = async (interviewType) => {
  const csrfToken = getCSRFToken();

  const response = await axios.post(
    `${API_BASE}/mock-interview/start/`,
    {
      interview_type: interviewType,
    },
    {
      withCredentials: true,
      headers: {
        "X-CSRFToken": csrfToken,
      },
    }
  );

  return response.data;
};