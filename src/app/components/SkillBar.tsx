import { useState, useEffect } from "react";

interface SkillBarProps {
  title: string;
  percentage: number;
  description: string;
  color: string;
}

export default function SkillBar({
  title,
  percentage,
  description,
  color,
}: SkillBarProps) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setWidth(percentage);
    }, 100);
  }, [percentage]);

  return (
    <main className="mb-8">
      <h3 className="text-3xl font-title font-semibold mb-2 color-body">
        {title}
      </h3>
      <div className="relative h-2 w-full bg-foreground rounded-full mb-3">
        <div
          className={`absolute top-0 left-0 h-full ${color} rounded-full transition-all duration-500 ease-out`}
          style={{ width: `${width}%` }}
        ></div>
      </div>
      <p className="color-body font-text text-lg">{description}</p>
    </main>
  );
}
