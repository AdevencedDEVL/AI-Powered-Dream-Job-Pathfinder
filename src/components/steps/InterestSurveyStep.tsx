import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";

interface InterestSurveyStepProps {
  onNext?: () => void;
  onBack?: () => void;
}

const InterestSurveyStep = ({
  onNext = () => {},
  onBack = () => {},
}: InterestSurveyStepProps) => {
  const [personalityTraits, setPersonalityTraits] = useState({
    extroversion: [50],
    openness: [50],
    conscientiousness: [50],
    agreeableness: [50],
    stability: [50],
  });

  const [workPreferences, setWorkPreferences] = useState({
    workEnvironment: "office",
    teamSize: "medium",
    workStyle: "structured",
  });

  const handleTraitChange = (trait: string, value: number[]) => {
    setPersonalityTraits((prev) => ({
      ...prev,
      [trait]: value,
    }));
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white p-6 rounded-lg space-y-8">
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Personality Assessment
        </h2>

        {/* Personality Trait Sliders */}
        <div className="space-y-6">
          <Card className="p-4 space-y-4">
            <div>
              <Label>Extroversion</Label>
              <Slider
                defaultValue={[50]}
                max={100}
                step={1}
                value={personalityTraits.extroversion}
                onValueChange={(value) =>
                  handleTraitChange("extroversion", value)
                }
                className="mt-2"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-1">
                <span>Introverted</span>
                <span>Extroverted</span>
              </div>
            </div>

            <div>
              <Label>Openness to Experience</Label>
              <Slider
                defaultValue={[50]}
                max={100}
                step={1}
                value={personalityTraits.openness}
                onValueChange={(value) => handleTraitChange("openness", value)}
                className="mt-2"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-1">
                <span>Traditional</span>
                <span>Innovative</span>
              </div>
            </div>

            <div>
              <Label>Conscientiousness</Label>
              <Slider
                defaultValue={[50]}
                max={100}
                step={1}
                value={personalityTraits.conscientiousness}
                onValueChange={(value) =>
                  handleTraitChange("conscientiousness", value)
                }
                className="mt-2"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-1">
                <span>Flexible</span>
                <span>Organized</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Work Preferences */}
        <Card className="p-4 space-y-6">
          <h3 className="text-xl font-semibold">Work Preferences</h3>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Preferred Work Environment</Label>
              <RadioGroup
                defaultValue="office"
                value={workPreferences.workEnvironment}
                onValueChange={(value) =>
                  setWorkPreferences((prev) => ({
                    ...prev,
                    workEnvironment: value,
                  }))
                }
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="office" id="office" />
                  <Label htmlFor="office">Office-based</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="remote" id="remote" />
                  <Label htmlFor="remote">Remote</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="hybrid" id="hybrid" />
                  <Label htmlFor="hybrid">Hybrid</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label>Preferred Team Size</Label>
              <RadioGroup
                defaultValue="medium"
                value={workPreferences.teamSize}
                onValueChange={(value) =>
                  setWorkPreferences((prev) => ({ ...prev, teamSize: value }))
                }
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="small" id="small" />
                  <Label htmlFor="small">Small (2-10)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="medium" id="medium" />
                  <Label htmlFor="medium">Medium (11-50)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="large" id="large" />
                  <Label htmlFor="large">Large (50+)</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </Card>

        <div className="flex justify-between pt-4">
          <Button variant="outline" onClick={onBack}>
            Back
          </Button>
          <Button onClick={onNext}>Next</Button>
        </div>
      </div>
    </div>
  );
};

export default InterestSurveyStep;
