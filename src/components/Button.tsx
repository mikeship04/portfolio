import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

type ButtonProps = {
  text: string;
  variant: "primary" | "secondary" | "tertiary";
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({ text, variant, onClick, className = "", type = "button" }) => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("Button must be used within a ThemeProvider");
  }

  const { darkMode } = themeContext;

  let variantStyles = "";

  switch (variant) {
    case "primary":
      variantStyles =
        darkMode
          ? "bg-gray-900 hover:bg-gray-400" 
          : "bg-indigo-600 text-white hover:bg-blue-700";
      break;
    case "secondary":
      variantStyles =
        darkMode
          ? "bg-gray-500 text-white hover:bg-gray-400"
          : "bg-gray-600 text-white hover:bg-gray-700";
      break;
    case "tertiary":
      variantStyles =
        darkMode
          ? "bg-transparent text-blue-400 hover:text-blue-500"
          : "bg-transparent text-blue-600 hover:text-blue-700";
      break;
    default:
      variantStyles = "";
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 hover:cursor-pointer rounded-lg shadow-md focus:outline-none ${variantStyles} ${className} transition-colors duration-300`}
    >
      {text}
    </button>
  );
};

export default Button;
