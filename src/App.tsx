
import React, { Suspense, lazy, useState, useEffect } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { SimpleToaster } from "@/components/SimpleToaster";

// Lazy load components
const Index = lazy(() => import("./pages/Index"));
const Login = lazy(() => import("./pages/Login"));
const SignUp = lazy(() => import("./pages/SignUp"));
const Grade9 = lazy(() => import("./pages/Grade9"));
const Grade10 = lazy(() => import("./pages/Grade10"));
const Grade11 = lazy(() => import("./pages/Grade11"));
const Grade12 = lazy(() => import("./pages/Grade12"));
const Subject = lazy(() => import("./pages/Subject"));
const Quiz = lazy(() => import("./pages/Quiz"));
const Grade11Subject = lazy(() => import("./pages/Grade11Subject"));
const Grade11Quiz = lazy(() => import("./pages/Grade11Quiz"));
const Grade12Subject = lazy(() => import("./pages/Grade12Subject"));
const Grade12Quiz = lazy(() => import("./pages/Grade12Quiz"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

// Simple authentication context
const AuthContext = React.createContext<{
  isAuthenticated: boolean;
  login: (email: string, password: string) => boolean;
  register: (email: string, password: string) => boolean;
  logout: () => void;
}>({
  isAuthenticated: false,
  login: () => false,
  register: () => false,
  logout: () => {}
});

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const savedAuth = localStorage.getItem('quiz-auth');
    if (savedAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const login = (email: string, password: string) => {
    // Simple validation - in real app, this would be API call
    if (email && password && password.length >= 6) {
      setIsAuthenticated(true);
      localStorage.setItem('quiz-auth', 'true');
      return true;
    }
    return false;
  };

  const register = (email: string, password: string) => {
    // Simple validation - in real app, this would be API call
    if (email && password && password.length >= 8) {
      setIsAuthenticated(true);
      localStorage.setItem('quiz-auth', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('quiz-auth');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = React.useContext(AuthContext);
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return <>{children}</>;
};

// Create a component to wrap the routes and toaster
const AppRoutes: React.FC = () => {
  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          
          {/* Protected routes */}
          <Route path="/" element={
            <ProtectedRoute>
              <Index />
            </ProtectedRoute>
          } />
          <Route path="/grade9" element={
            <ProtectedRoute>
              <Grade9 />
            </ProtectedRoute>
          } />
          <Route path="/grade10" element={
            <ProtectedRoute>
              <Grade10 />
            </ProtectedRoute>
          } />
          <Route path="/grade11" element={
            <ProtectedRoute>
              <Grade11 />
            </ProtectedRoute>
          } />
          <Route path="/grade-12" element={
            <ProtectedRoute>
              <Grade12 />
            </ProtectedRoute>
          } />
          <Route path="/:grade/:subject" element={
            <ProtectedRoute>
              <Subject />
            </ProtectedRoute>
          } />
          <Route path="/:grade/:subject/:chapter/:difficulty" element={
            <ProtectedRoute>
              <Quiz />
            </ProtectedRoute>
          } />
          <Route path="/grade11/:subject" element={
            <ProtectedRoute>
              <Grade11Subject />
            </ProtectedRoute>
          } />
          <Route path="/grade11/:subject/:chapter/:difficulty" element={
            <ProtectedRoute>
              <Grade11Quiz />
            </ProtectedRoute>
          } />
          <Route path="/grade-12/:subject" element={
            <ProtectedRoute>
              <Grade12Subject />
            </ProtectedRoute>
          } />
          <Route path="/grade-12/:subject/:chapter/:difficulty" element={
            <ProtectedRoute>
              <Grade12Quiz />
            </ProtectedRoute>
          } />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <SimpleToaster />
    </>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AuthProvider>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export { AuthContext };
export default App;
