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
import ResetPassword from "./components/auth/ResetPassword";
import ProtectedRoute from "./Components/Common/ProtectedRoute";
import { Settings } from "lucide-react";

function App() {
  return (
    <>
      <Background>
        <Routes>

          {/* =========================
              PUBLIC PAGES
              ========================= */}

          <Route
            path="/"
            element={<Login />}
          />

          <Route
            path="/forgot-password"
            element={<ForgotPassword />}
          />

          <Route
            path="/reset-password/:uidb64/:token/"
            element={<ResetPassword />}
          />


          {/* =========================
              PROTECTED PAGES
              ========================= */}

          <Route element={<ProtectedRoute />}>

            {/* Change Password */}
            <Route
              path="/change-password"
              element={<ChangePassword />}
            />

            {/* All Sidebar Pages */}
            <Route element={<SidebarLayout />}>

              <Route
                path="/dashboard"
                element={<Dashboard />}
              />

              <Route
                path="/assessments"
                element={<Assessment />}
              />

              <Route
                path="/achievements"
                element={<Achievements />}
              />

              <Route
                path="/roadmap"
                element={<Roadmap />}
              />

              <Route
                path="/resources"
                element={<Resources />}
              />

              <Route
                path="/mock-interviews"
                element={<MockInterview />}
              />

              <Route
                path="/coding-practice"
                element={<CodeLayout />}
              />

              <Route
                path="/resume-builder"
                element={<ResumeLayout />}
              />

              <Route
                path="/ai-coach"
                element={<AICoach />}
              />

              <Route
                path="/job-tracker"
                element={<JobLayout />}
              />

              <Route
                path="/settings"
                element={<Setting />}
              />

              <Route
                path="/profile"
                element={<EditProfile />}
              />

            </Route>

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