import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Grade9 from "./pages/Grade9";
import Grade10 from "./pages/Grade10";
import Grade11 from "./pages/Grade11";
import Grade12 from "./pages/Grade12";
import Subject from "./pages/Subject";
import Quiz from "./pages/Quiz";
import Grade11Subject from "./pages/Grade11Subject";
import Grade11Quiz from "./pages/Grade11Quiz";
import Grade12Subject from "./pages/Grade12Subject";
import Grade12Quiz from "./pages/Grade12Quiz";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default App;