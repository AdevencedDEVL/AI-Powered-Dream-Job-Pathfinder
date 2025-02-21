import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search, Plus, X } from "lucide-react";

interface Skill {
  id: string;
  name: string;
}

interface SkillsAssessmentStepProps {
  onNext?: () => void;
  onBack?: () => void;
  selectedSkills?: Skill[];
  onSkillsChange?: (skills: Skill[]) => void;
}

const defaultSkills: Skill[] = [
  { id: "1", name: "JavaScript" },
  { id: "2", name: "React" },
  { id: "3", name: "TypeScript" },
  { id: "4", name: "Node.js" },
  { id: "5", name: "Python" },
];

const suggestedSkills: Skill[] = [
  { id: "6", name: "HTML" },
  { id: "7", name: "CSS" },
  { id: "8", name: "Git" },
  { id: "9", name: "SQL" },
  { id: "10", name: "Docker" },
];

const SkillsAssessmentStep: React.FC<SkillsAssessmentStepProps> = ({
  onNext = () => {},
  onBack = () => {},
  selectedSkills = [],
  onSkillsChange = () => {},
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [skills, setSkills] = useState<Skill[]>(
    selectedSkills.length ? selectedSkills : defaultSkills,
  );

  const handleAddSkill = (skill: Skill) => {
    if (!skills.find((s) => s.id === skill.id)) {
      const newSkills = [...skills, skill];
      setSkills(newSkills);
      onSkillsChange(newSkills);
    }
  };

  const handleRemoveSkill = (skillId: string) => {
    const newSkills = skills.filter((s) => s.id !== skillId);
    setSkills(newSkills);
    onSkillsChange(newSkills);
  };

  const filteredSuggestions = suggestedSkills.filter(
    (skill) =>
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !skills.find((s) => s.id === skill.id),
  );

  return (
    <div className="w-full max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-sm space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Skills Assessment</h2>
        <p className="text-gray-600">
          Select or search for skills that best describe your expertise
        </p>
      </div>

      <div className="space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Search for skills..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-700">Your Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge
                key={skill.id}
                variant="secondary"
                className="px-3 py-1 flex items-center gap-1"
              >
                {skill.name}
                <button
                  onClick={() => handleRemoveSkill(skill.id)}
                  className="ml-1 hover:text-red-500"
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ))}
          </div>
        </div>

        {filteredSuggestions.length > 0 && (
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-700">
              Suggested Skills
            </h3>
            <ScrollArea className="h-40 w-full rounded-md border p-4">
              <div className="flex flex-wrap gap-2">
                {filteredSuggestions.map((skill) => (
                  <Badge
                    key={skill.id}
                    variant="outline"
                    className="px-3 py-1 cursor-pointer hover:bg-gray-100 flex items-center gap-1"
                    onClick={() => handleAddSkill(skill)}
                  >
                    {skill.name}
                    <Plus className="h-3 w-3" />
                  </Badge>
                ))}
              </div>
            </ScrollArea>
          </div>
        )}
      </div>

      <div className="flex justify-between pt-6">
        <Button variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button onClick={onNext} disabled={skills.length === 0}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default SkillsAssessmentStep;
