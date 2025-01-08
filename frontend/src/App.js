// src/App.js
import React from "react";
import { AuthProvider } from "./contexts/authContext";  // Import AuthProvider
import AppRoutes from "./routes/AppRoutes"; // Đường dẫn tới file AppRoutes.js

const App = () => {
  return (
    // Bao bọc AppRoutes bằng AuthProvider để các component có thể truy cập AuthContext
    <AuthProvider>
      <div>
        <AppRoutes />
      </div>
    </AuthProvider>
  );
};

export default App;
