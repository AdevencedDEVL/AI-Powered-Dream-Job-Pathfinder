import React, { useState } from "react";
import StepProgress from "./StepProgress";
import PersonalInfoStep from "./steps/PersonalInfoStep";
import SkillsAssessmentStep from "./steps/SkillsAssessmentStep";
import InterestSurveyStep from "./steps/InterestSurveyStep";
import ExperienceStep from "./steps/ExperienceStep";
import GenerateButton from "./GenerateButton";
import { Card } from "@/components/ui/card";

interface ProfileCreationFormProps {
  onComplete?: (formData: any) => void;
  initialStep?: number;
}

const ProfileCreationForm = ({
  onComplete = () => {},
  initialStep = 1,
}: ProfileCreationFormProps) => {
  const [currentStep, setCurrentStep] = useState(initialStep);
  const [formData, setFormData] = useState({
    personalInfo: {},
    skills: [],
    interests: {},
    experience: {
      workExperience: [],
      education: [],
    },
  });

  const handleNext = (stepData: any) => {
    setFormData((prev) => {
      const newData = { ...prev };
      switch (currentStep) {
        case 1:
          newData.personalInfo = stepData;
          break;
        case 2:
          newData.skills = stepData;
          break;
        case 3:
          newData.interests = stepData;
          break;
        case 4:
          newData.experience = stepData;
          break;
      }
      return newData;
    });
    setCurrentStep((prev) => Math.min(prev + 1, 5));
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleGenerate = () => {
    onComplete(formData);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <PersonalInfoStep
            onNext={handleNext}
            initialData={formData.personalInfo}
          />
        );
      case 2:
        return (
          <SkillsAssessmentStep
            onNext={handleNext}
            onBack={handleBack}
            selectedSkills={formData.skills}
          />
        );
      case 3:
        return <InterestSurveyStep onNext={handleNext} onBack={handleBack} />;
      case 4:
        return (
          <ExperienceStep
            onNext={handleNext}
            onBack={handleBack}
            experiences={formData.experience.workExperience}
            education={formData.experience.education}
          />
        );
      case 5:
        return (
          <div className="w-full max-w-2xl mx-auto p-6 space-y-6">
            <Card className="p-6 text-center space-y-4 bg-white">
              <h2 className="text-2xl font-bold text-gray-900">
                Ready to Generate Your Career Paths
              </h2>
              <p className="text-gray-600">
                We've collected all the information needed to analyze your
                profile and suggest personalized career paths.
              </p>
              <div className="flex justify-center pt-4">
                <GenerateButton onClick={handleGenerate} />
              </div>
            </Card>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-8 bg-white/50 backdrop-blur-sm rounded-xl border border-white/20 shadow-xl">
      <StepProgress currentStep={currentStep} />
      {renderStep()}
    </div>
  );
};

export default ProfileCreationForm;
