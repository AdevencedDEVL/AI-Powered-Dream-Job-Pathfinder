import React from "react";
import { Check } from "lucide-react";

interface StepProgressProps {
  currentStep?: number;
  steps?: Array<{
    title: string;
    description: string;
  }>;
}

const defaultSteps = [
  {
    title: "Personal Info",
    description: "Basic information about you",
  },
  {
    title: "Skills",
    description: "Your professional skills",
  },
  {
    title: "Interests",
    description: "What motivates you",
  },
  {
    title: "Experience",
    description: "Your work history",
  },
];

const StepProgress = ({
  currentStep = 1,
  steps = defaultSteps,
}: StepProgressProps) => {
  return (
    <div className="w-full bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-white/50">
      <div className="flex justify-between">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-1 items-center">
            <div className="flex flex-col items-center flex-1">
              <div
                className={`w-10 h-10 rounded-full border-2 flex items-center justify-center
                  ${index + 1 < currentStep ? "bg-green-500 border-green-500 text-white" : ""}
                  ${index + 1 === currentStep ? "border-blue-500 text-blue-500" : ""}
                  ${index + 1 > currentStep ? "border-gray-300 text-gray-300" : ""}`}
              >
                {index + 1 < currentStep ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <span>{index + 1}</span>
                )}
              </div>
              <div className="mt-2 text-center">
                <div
                  className={`text-sm font-medium
                  ${index + 1 === currentStep ? "text-blue-500" : "text-gray-500"}`}
                >
                  {step.title}
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  {step.description}
                </div>
              </div>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`h-[2px] w-full mx-4
                  ${index + 1 < currentStep ? "bg-green-500" : "bg-gray-200"}`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepProgress;
