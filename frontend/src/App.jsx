import { Routes, Route } from "react-router-dom";

// Common
import SidebarLayout from "./Components/Common/SidebarLayout";
import Background
 from "./Components/Common/Background";
// Pages without Sidebar
import Login from "./Components/Login/Login";
import Error from "./Components/Error/Error";

// Dashboard
 import Dashboard from "./Components/Dashboard/Dashboard"
import ForgotPassword from "./Components/Auth/ForgotPassword"
import ChangePassword from "./Components/Auth/ChangePassword"
// Assessment
import Assessment from "./Components/Assessment/Assessment";
import Roadmap from "./Components/roadmap/Roadmap"
//AI Coach
import AICoach from "./Components/AICoach/AICoach";
// Coding
import CodeLayout from "./Components/Coding/CodeLayout";
import Resources from "./Components/Resources/Resources";
// Resume
import ResumeLayout from "./Components/Resume/ResumeLayout";
import Achievements from "./Components/Achievements/Achievements"
// Job Tracker
import JobLayout from "./Components/JobTracker/JobLayout";

// Settings
import EditProfile from "./Components/Settings/EditProfile";

function App() {
  return (
    <>
    <Background>
    <Routes>

      {/* =========================
          PAGES WITHOUT SIDEBAR
          ========================= */}

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/forgot-password"
        element={<ForgotPassword />} />
      

      <Route
        path="/change-password"
        element={<ChangePassword />}
      />

      {/* =========================
          PAGES WITH COMMON SIDEBAR
          ========================= */}

      <Route element={<SidebarLayout />}>

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        {/* Assessment */}
        <Route
          path="/assessments"
          element={<Assessment />}
        />
        {/* Achievments */}
        <Route
          path="/achievements"
          element={<Achievements />}
        />

        {/* Roadmap */}
        <Route
          path="/roadmap"
          element={<Roadmap />}
        />
        {/* Resources */}
        <Route
          path="/resources"
          element={<Resources />}
        />

        {/* Coding Practice */}
        <Route
          path="/coding-practice"
          element={<CodeLayout />}
        />

        {/* Resume Builder */}
        <Route
          path="/resume-builder"
          element={<ResumeLayout />}
        />
        {/*AI Coach*/}
        <Route path="/ai-coach" 
         element={<AICoach />} />
        {/* Job Tracker */}
        <Route
          path="/job-tracker"
          element={<JobLayout />}
        />

        {/* Profile / Settings */}
        <Route
          path="/settings"
          element={<EditProfile />}
        />

      </Route>

      {/* =========================
          404
          ========================= */}

      <Route
        path="*"
        element={<Error />}
      />

    </Routes>
    </Background>
    </>
  );
}

export default App;