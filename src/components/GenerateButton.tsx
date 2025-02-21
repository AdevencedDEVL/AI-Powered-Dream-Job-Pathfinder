import React from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

interface GenerateButtonProps {
  onClick?: () => void;
  isLoading?: boolean;
  disabled?: boolean;
}

const GenerateButton = ({
  onClick = () => {},
  isLoading = false,
  disabled = false,
}: GenerateButtonProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="w-full max-w-[200px] bg-white"
    >
      <Button
        className="w-full h-[50px] text-lg font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
        onClick={onClick}
        disabled={disabled || isLoading}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Generating...
          </>
        ) : (
          "Generate Career Paths"
        )}
      </Button>
    </motion.div>
  );
};

export default GenerateButton;
