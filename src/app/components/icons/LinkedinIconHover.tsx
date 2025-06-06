import React from "react";

interface IconProps {
  color?: string;
  size?: number;
  className?: string;
}

export default function LinkedinIconHover({
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
      <path d="M20,10.5v8.5c0,2.757-2.243,5-5,5H5c-2.757,0-5-2.243-5-5V9c0-2.757,2.243-5,5-5H13.5c.404,0,.769,.244,.924,.617,.155,.374,.069,.804-.217,1.09l-7.319,7.319c-1.102,1.102-1.136,2.861-.078,4.005,.539,.582,1.272,.911,2.065,.926,.777,.023,1.538-.285,2.099-.846l7.319-7.319c.286-.287,.715-.372,1.09-.217,.374,.155,.617,.52,.617,.924ZM21,0h-7c-.552,0-1,.448-1,1s.448,1,1,1h6.586L8.293,14.293c-.391,.391-.391,1.023,0,1.414,.195,.195,.451,.293,.707,.293s.512-.098,.707-.293L22,3.414v6.586c0,.552,.448,1,1,1s1-.448,1-1V3c0-1.654-1.346-3-3-3Z" />{" "}
    </svg>
  );
}
