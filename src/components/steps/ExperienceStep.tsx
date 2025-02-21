import React from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Plus, Trash2 } from "lucide-react";

interface Experience {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface Education {
  degree: string;
  institution: string;
  graduationDate: string;
  fieldOfStudy: string;
}

interface ExperienceStepProps {
  experiences?: Experience[];
  education?: Education[];
  onNext?: () => void;
  onBack?: () => void;
}

const ExperienceStep: React.FC<ExperienceStepProps> = ({
  experiences = [
    {
      title: "Software Engineer",
      company: "Tech Corp",
      startDate: "2020-01",
      endDate: "2023-01",
      description: "Developed and maintained web applications",
    },
  ],
  education = [
    {
      degree: "Bachelor of Science",
      institution: "University of Technology",
      graduationDate: "2020",
      fieldOfStudy: "Computer Science",
    },
  ],
  onNext = () => {},
  onBack = () => {},
}) => {
  return (
    <div className="w-full max-w-2xl mx-auto p-6 space-y-8 bg-white">
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Professional Experience</h2>

        {experiences.map((exp, index) => (
          <Card key={index} className="p-4 space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Experience {index + 1}</h3>
              <Button variant="ghost" size="icon">
                <Trash2 className="h-5 w-5 text-gray-500" />
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor={`title-${index}`}>Job Title</Label>
                <Input
                  id={`title-${index}`}
                  defaultValue={exp.title}
                  placeholder="e.g. Software Engineer"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor={`company-${index}`}>Company</Label>
                <Input
                  id={`company-${index}`}
                  defaultValue={exp.company}
                  placeholder="e.g. Tech Corp"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor={`startDate-${index}`}>Start Date</Label>
                <Input
                  id={`startDate-${index}`}
                  type="month"
                  defaultValue={exp.startDate}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor={`endDate-${index}`}>End Date</Label>
                <Input
                  id={`endDate-${index}`}
                  type="month"
                  defaultValue={exp.endDate}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor={`description-${index}`}>Description</Label>
              <Textarea
                id={`description-${index}`}
                defaultValue={exp.description}
                placeholder="Describe your responsibilities and achievements"
                rows={3}
              />
            </div>
          </Card>
        ))}

        <Button variant="outline" className="w-full" onClick={() => {}}>
          <Plus className="mr-2 h-4 w-4" />
          Add Experience
        </Button>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Education</h2>

        {education.map((edu, index) => (
          <Card key={index} className="p-4 space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Education {index + 1}</h3>
              <Button variant="ghost" size="icon">
                <Trash2 className="h-5 w-5 text-gray-500" />
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor={`degree-${index}`}>Degree</Label>
                <Input
                  id={`degree-${index}`}
                  defaultValue={edu.degree}
                  placeholder="e.g. Bachelor of Science"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor={`institution-${index}`}>Institution</Label>
                <Input
                  id={`institution-${index}`}
                  defaultValue={edu.institution}
                  placeholder="e.g. University of Technology"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor={`fieldOfStudy-${index}`}>Field of Study</Label>
                <Input
                  id={`fieldOfStudy-${index}`}
                  defaultValue={edu.fieldOfStudy}
                  placeholder="e.g. Computer Science"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor={`graduationDate-${index}`}>
                  Graduation Date
                </Label>
                <Input
                  id={`graduationDate-${index}`}
                  type="text"
                  defaultValue={edu.graduationDate}
                  placeholder="e.g. 2020"
                />
              </div>
            </div>
          </Card>
        ))}

        <Button variant="outline" className="w-full" onClick={() => {}}>
          <Plus className="mr-2 h-4 w-4" />
          Add Education
        </Button>
      </div>

      <div className="flex justify-between pt-6">
        <Button variant="outline" onClick={onBack}>
          Back
        </Button>

        <Button onClick={onNext}>Next</Button>
      </div>
    </div>
  );
};

export default ExperienceStep;
