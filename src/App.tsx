import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Grade11 from "./pages/Grade11";

// Lazy load components
const Index = lazy(() => import("./pages/Index"));
const Login = lazy(() => import("./pages/Login"));
const SignUp = lazy(() => import("./pages/SignUp"));
const Grade9 = lazy(() => import("./pages/Grade9"));
const Grade10 = lazy(() => import("./pages/Grade10"));
const Grade12 = lazy(() => import("./pages/Grade12"));
const Subject = lazy(() => import("./pages/Subject"));
const Quiz = lazy(() => import("./pages/Quiz"));
const Grade11Subject = lazy(() => import("./pages/Grade11Subject"));
const Grade11Quiz = lazy(() => import("./pages/Grade11Quiz"));
const Grade12Subject = lazy(() => import("./pages/Grade12Subject"));
const Grade12Quiz = lazy(() => import("./pages/Grade12Quiz"));
const NotFound = lazy(() => import("./pages/NotFound"));

const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Index />} />
          <Route path="/grade9" element={<Grade9 />} />
          <Route path="/grade10" element={<Grade10 />} />
          <Route path="/grade11" element={<Grade11 />} />
          <Route path="/grade-12" element={<Grade12 />} />
          <Route path="/:grade/:subject" element={<Subject />} />
          <Route path="/:grade/:subject/:chapter/:difficulty" element={<Quiz />} />
          <Route path="/grade11/:subject" element={<Grade11Subject />} />
          <Route path="/grade11/:subject/:chapter/:difficulty" element={<Grade11Quiz />} />
          <Route path="/grade-12/:subject" element={<Grade12Subject />} />
          <Route path="/grade-12/:subject/:chapter/:difficulty" element={<Grade12Quiz />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;