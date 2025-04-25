"use client";

import { useEffect, useState } from "react";

interface BackgroundPatternProps {
  className: string;
  menuWidth: number;
  topPadding?: number;
}

export default function BackgroundPattern({
  className,
  menuWidth,
  topPadding = 130,
}: BackgroundPatternProps) {
  const [dimensions, setDimensions] = useState({
    width: 1920,
    height: 1080,
  });

  useEffect(() => {
    function handleResize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const spacing = 93;
  const strokeWidth = 5;
  const xSize = 40;

  const isMobile = dimensions.width < 1024;
  const leftPadding = isMobile ? 70 : menuWidth;

  const usableWidth = dimensions.width - 2 * leftPadding;
  const usableHeight = dimensions.height - 2 * topPadding;

  const rows = Math.ceil(usableHeight / spacing) + 1;
  const cols = Math.ceil(usableWidth / spacing) + 1;

  const generateXs = () => {
    const xElements = [];

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const x = col * spacing;
        const y = row * spacing;

        xElements.push(
          <g key={`x-${row}-${col}`} transform={`translate(${x}, ${y})`}>
            <line
              x1={-xSize / 2}
              y1={-xSize / 2}
              x2={xSize / 2}
              y2={xSize / 2}
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <line
              x1={xSize / 2}
              y1={-xSize / 2}
              x2={-xSize / 2}
              y2={xSize / 2}
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
          </g>
        );
      }
    }

    return xElements;
  };

  return (
    <main
      className={`fixed inset-0 z-0 overflow-hidden pointer-events-none bg-page`}
    >
      <svg
        width={dimensions.width}
        height={dimensions.height}
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        preserveAspectRatio="none"
        className={`w-full h-full opacity-10 ${className}`}
      >
        <g transform={`translate(${leftPadding}, ${topPadding})`}>
          {generateXs()}
        </g>
      </svg>
    </main>
  );
}
