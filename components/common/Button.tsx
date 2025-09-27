import { ButtonProps } from "@/interfaces";

export default function Button({ title, size = "medium", shape = "rounded-md" }: ButtonProps) {
  let sizeClasses = "";
  let shapeClasses = shape;

  // Handle size
  switch (size) {
    case "small":
      sizeClasses = "px-3 py-1 text-sm";
      break;
    case "medium":
      sizeClasses = "px-4 py-2 text-base";
      break;
    case "large":
      sizeClasses = "px-6 py-3 text-lg";
      break;
  }

  return (
    <button
      className={`bg-blue-600 text-white ${sizeClasses} ${shapeClasses} hover:bg-blue-700 transition`}
    >
      {title}
    </button>
  );
}
