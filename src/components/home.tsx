import React from "react";
import ProfileCreationForm from "./ProfileCreationForm";

const Home = () => {
  const handleProfileComplete = (formData: any) => {
    // Handle form completion
    console.log("Profile creation complete:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-6">
          <div className="inline-block">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4 animate-fade-in">
              Dream Job Pathfinder
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Create your career profile and discover personalized career paths
            tailored to your skills, interests, and experience.
          </p>
        </div>

        <ProfileCreationForm onComplete={handleProfileComplete} />
      </div>
    </div>
  );
};

export default Home;
