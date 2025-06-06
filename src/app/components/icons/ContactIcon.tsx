import React from "react";

interface IconProps {
  color?: string;
  size?: number;
  className?: string;
}

export default function ContactIcon({ color, size, className }: IconProps) {
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
      <g id="_01_align_center" data-name="01 align center">
        <path d="M21,1H3A3,3,0,0,0,0,4V23H24V4A3,3,0,0,0,21,1ZM3,3H21a1,1,0,0,1,1,1v.667l-7.878,7.879a3.007,3.007,0,0,1-4.244,0L2,4.667V4A1,1,0,0,1,3,3ZM2,21V7.5L8.464,13.96a5.007,5.007,0,0,0,7.072,0L22,7.5V21Z" />
      </g>{" "}
    </svg>
  );
}
