import { useLocation } from "react-router-dom";
import { useEffect } from "react";

// Constants for text and styling (for easy customization)
const ERROR_CODE = "404";
const ERROR_MESSAGE = "Oops! Page not found";
const HOME_LINK_TEXT = "Return to Home";
const HOME_LINK_HREF = "/";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // Log 404 errors to the console for debugging or analytics
    console.error("404 Error: Attempted to access:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        {/* Error Code */}
        <h1 className="text-4xl font-bold mb-4">{ERROR_CODE}</h1>

        {/* Error Message */}
        <p className="text-xl text-gray-600 mb-4">{ERROR_MESSAGE}</p>

        {/* Link to navigate back to homepage */}
        <a href={HOME_LINK_HREF} className="text-blue-500 hover:text-blue-700 underline">
          {HOME_LINK_TEXT}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
