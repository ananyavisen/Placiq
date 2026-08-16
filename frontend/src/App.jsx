import { Routes, Route } from "react-router-dom";
import SidebarLayout from "./Components/Common/SidebarLayout"; //Sidebar Layout
import Background from "./Components/Common/Background"; //Background
import Login from "./Components/Login/Login"; //Login
import Error from "./Components/Error/Error"; // Error
import Dashboard from "./Components/Dashboard/Dashboard"; // Dashboard
import ForgotPassword from "./Components/Auth/ForgotPassword"; //Forgot Password 
import ChangePassword from "./Components/Auth/ChangePassword"; //Change Password
import Assessment from "./Components/Assessment/Assessment"; // Assessment
import Roadmap from "./Components/roadmap/Roadmap"; //Roadmap
import AICoach from "./Components/AICoach/AICoach"; //AI Coach
import CodeLayout from "./Components/Coding/CodeLayout";// Coding
import Resources from "./Components/Resources/Resources"; //Resources
import ResumeLayout from "./Components/Resume/ResumeLayout"; // Resume
import Achievements from "./Components/Achievements/Achievements"; //Achievements
import JobLayout from "./Components/JobTracker/JobLayout"; // Job Tracker
import Setting from "./Components/Settings/Setting"; // Settings
import EditProfile from "./Components/Settings/EditProfile"; //Edit Profile
import MockInterview from "./Components/Mock Interview/MockInterview"; //MockInterview
import ProfileHeader from "./Components/Common/ProfileHeader";
import { Settings } from "lucide-react";

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
        {/* Mock Interview */}
        <Route
          path="/mock-interviews"
          element={<MockInterview />}
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
          element={<Setting />}
        />
        <Route
          path="/profile"
          element={<EditProfile />}
        />

      </Route>

        <Route path="forgot-password" element={<ForgotPassword />} />

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