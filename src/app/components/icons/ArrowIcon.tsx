import React from "react";

interface IconProps {
  color: string;
  size: number;
  className: string;
}

export default function ArrowIcon({ color, size, className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_1"
      data-name="Layer 1"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill={color}
    >
      <path d="M18.427,16.935a1.5,1.5,0,0,0-2.121,0l-2.781,2.779L13.5,1.5A1.5,1.5,0,0,0,12,0h0a1.5,1.5,0,0,0-1.5,1.5l.023,18.2L7.76,16.935a1.5,1.5,0,0,0-2.121,2.121l3.919,3.919a3.5,3.5,0,0,0,4.949,0l3.92-3.919A1.5,1.5,0,0,0,18.427,16.935Z" />{" "}
    </svg>
  );
}
