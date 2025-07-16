
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GraduationCap, BookOpen, Users, Trophy, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AuthContext } from "@/App";

const Index = () => {
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">QuizPlatform</h1>
            </div>
            <Button 
              onClick={handleLogout}
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Master Your Studies with
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Interactive Quizzes
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive quiz platform covering Grades 9-12 with personalized learning paths, 
              detailed analytics, and adaptive difficulty levels to maximize your academic success.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-6">
                <div className="text-center">
                  <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">10,000+</div>
                  <div className="text-gray-600">Active Students</div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-6">
                <div className="text-center">
                  <BookOpen className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
                  <div className="text-gray-600">Quiz Topics</div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-6">
                <div className="text-center">
                  <Trophy className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">95%</div>
                  <div className="text-gray-600">Success Rate</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Grade Selection */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Grade Level</h3>
            <p className="text-lg text-gray-600">Select your current grade to access tailored quizzes and learning materials</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { grade: "Grade 9", path: "/grade9", color: "from-green-400 to-green-600", description: "Foundation concepts" },
              { grade: "Grade 10", path: "/grade10", color: "from-blue-400 to-blue-600", description: "Building knowledge" },
              { grade: "Grade 11", path: "/grade11", color: "from-purple-400 to-purple-600", description: "Advanced topics" },
              { grade: "Grade 12", path: "/grade-12", color: "from-red-400 to-red-600", description: "University prep" },
            ].map((item, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 overflow-hidden">
                <CardHeader className="text-center pb-3">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{item.grade}</CardTitle>
                  <CardDescription className="text-gray-600">{item.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Link to={item.path} className="block">
                    <Button className={`w-full bg-gradient-to-r ${item.color} hover:opacity-90 text-white font-medium py-3 rounded-lg transition-all duration-300 hover:shadow-lg`}>
                      Start Learning
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Platform?</h3>
            <p className="text-lg text-gray-600">Discover the features that make learning effective and enjoyable</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Adaptive Learning",
                description: "Personalized difficulty adjustment based on your performance",
                icon: "🧠",
              },
              {
                title: "Comprehensive Coverage",
                description: "All subjects for grades 9-12 following curriculum standards",
                icon: "📚",
              },
              {
                title: "Real-time Analytics",
                description: "Track your progress with detailed performance insights",
                icon: "📊",
              },
            ].map((feature, index) => (
              <Card key={index} className="text-center bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="pt-8 pb-6">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <BookOpen className="w-8 h-8 text-blue-400" />
            <h3 className="text-2xl font-bold">QuizPlatform</h3>
          </div>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Empowering students with interactive learning experiences and comprehensive assessment tools.
          </p>
          <div className="text-gray-500 text-sm">
            © 2024 QuizPlatform. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
