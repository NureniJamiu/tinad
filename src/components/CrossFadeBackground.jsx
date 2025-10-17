import React from "react";

/**
 * CrossFadeBackground
 * 
 * A reusable wrapper component that applies a diagonal cross-fade grid background
 * with a radial fade mask.
 *
 * Props:
 * - children: ReactNode — content to render inside the background.
 * - className: string — optional Tailwind classes to extend styling.
 * - bgColor: string — background color (default: "bg-white").
 * - gridColor: string — grid line color (default: "#e5e7eb").
 * - gridSize: string — size of the grid (default: "40px 40px").
 */
const CrossFadeBackground = ({
  children,
  className = "",
  bgColor = "bg-black",
  gridColor = "#e5e7eb",
  gridSize = "40px 40px",
}) => {
  return (
    <div className={`min-h-screen w-full relative ${bgColor} ${className}`}>
      {/* Diagonal Cross Center Fade Grid Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(45deg, transparent 49%, ${gridColor} 49%, ${gridColor} 51%, transparent 51%),
            linear-gradient(-45deg, transparent 49%, ${gridColor} 49%, ${gridColor} 51%, transparent 51%)
          `,
          backgroundSize: gridSize,
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)",
          maskImage:
            "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)",
        }}
      />
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default CrossFadeBackground;
