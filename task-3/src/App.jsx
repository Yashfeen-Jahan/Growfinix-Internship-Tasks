import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from "./pages/Login";
import ProfileTab from "./pages/ProfileTab";
import SecurityTab from "./pages/SecurityTab";
import PreferencesTab from "./pages/PreferencesTab";
import ProtectedRoute from "./components/ProtectedRoute";

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route 
          path="/security" 
          element={
            <ProtectedRoute>
              <SecurityTab />
            </ProtectedRoute>
          }
        />
        <Route 
          path="/preferences" 
          element={
            <ProtectedRoute>
              <PreferencesTab />
            </ProtectedRoute>
          }
        />
        <Route 
          path="/profile" 
          element={
            <ProtectedRoute>
              <ProfileTab />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
} 
export default App;