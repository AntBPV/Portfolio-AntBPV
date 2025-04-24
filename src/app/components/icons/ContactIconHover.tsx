import React from "react";

interface IconProps {
  color?: string;
  size?: number;
  className?: string;
}

export default function ContactIconHover({
  color,
  size,
  className,
}: IconProps) {
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
      <path d="M9.878,12.546a3.007,3.007,0,0,0,4.244,0l9.659-9.66A3,3,0,0,0,21,1H3A3,3,0,0,0,.219,2.886Z" />
      <path d="M15.536,13.96a5.007,5.007,0,0,1-7.072,0L0,5.5V23H24V5.5Z" />{" "}
    </svg>
  );
}
