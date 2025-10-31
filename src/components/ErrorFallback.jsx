import React from 'react';

/**
 * Reusable error fallback component for consistent error UI across the application
 * @param {Object} props
 * @param {string} props.error - Error message to display
 * @param {Function} props.retry - Optional retry function
 * @param {string} props.title - Optional custom error title
 * @param {string} props.className - Optional additional CSS classes
 */
const ErrorFallback = ({ 
  error, 
  retry, 
  title = "Something went wrong",
  className = "" 
}) => {
  return (
    <div className={`text-center py-20 ${className}`}>
      <div className="max-w-md mx-auto space-y-4">
        <div className="text-red-500 text-xl font-semibold mb-2">
          {title}
        </div>
        
        {error && (
          <p className="text-white/50 text-sm">
            {error}
          </p>
        )}
        
        {retry && (
          <button
            onClick={retry}
            className="mt-6 px-6 py-3 bg-[#e7d393] text-black rounded-lg hover:bg-[#d4c080] transition-colors duration-200 font-medium"
          >
            Try Again
          </button>
        )}
        
        <p className="text-white/30 text-xs mt-4">
          If the problem persists, please contact support
        </p>
      </div>
    </div>
  );
};

ErrorFallback.displayName = 'ErrorFallback';

export default ErrorFallback;
