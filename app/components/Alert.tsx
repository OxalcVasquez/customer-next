// Alert.tsx
import React from "react";

interface AlertProps {
  showAlert: boolean;
  type: "warning" | "error" | "success";
  message: string;
}

const Alert: React.FC<AlertProps> = ({ showAlert, type, message }) => {
  if (!showAlert) return null;

  let svgPath;
  switch (type) {
    case "warning":
      svgPath =
        "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z";
      break;
    case "error":
      svgPath =
        "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z";
      break;
    case "success":
      svgPath = "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z";
      break;
  }

  return (
    <div className="toast toast-end">
      <div role="alert" className={`alert alert-${type}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={svgPath}
          />
        </svg>
        <span>{message}</span>
      </div>
    </div>
  );
};

export default Alert;
