import React from "react";

interface IconProps {
  color?: string;
  size?: number;
  className?: string;
}

export default function CodeIcon({ color, size, className }: IconProps) {
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
      <path d="M5.374,18.455c-.256,0-.512-.098-.707-.293-.391-.391-.391-1.023,0-1.414l4.041-4.041c.39-.39,.39-1.024,0-1.414L4.667,7.252c-.391-.391-.391-1.023,0-1.414s1.023-.391,1.414,0l4.041,4.041c1.17,1.17,1.17,3.072,0,4.242l-4.041,4.041c-.195,.195-.451,.293-.707,.293Zm18.626,.545V5c0-2.757-2.243-5-5-5H5C2.243,0,0,2.243,0,5v14c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5ZM19,2c1.654,0,3,1.346,3,3v14c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V5c0-1.654,1.346-3,3-3h14Zm1,15c0-.553-.447-1-1-1h-7c-.552,0-1,.447-1,1s.448,1,1,1h7c.553,0,1-.447,1-1Z" />{" "}
    </svg>
  );
}
