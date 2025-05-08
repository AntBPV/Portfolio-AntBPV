import { ElementType, MouseEvent } from "react";

interface ContactItemProps {
  icon: React.ComponentType<{
    size: number;
    className?: string;
    color?: string;
  }>;
  selected: boolean;
  onClick: (event: MouseEvent) => void;
}

export default function ContactItem({
  icon,
  selected,
  onClick,
}: ContactItemProps) {
  const IconComponent = icon;
  return (
    <div
      className="cursor-pointer flex items-center justify-center"
      onClick={onClick}
    >
      <div
        className={`transition-transform duration-300 transform origin-center ${
          selected ? "scale-150" : "hover:scale-110"
        }`}
      >
        <IconComponent
          size={100} // Todos tienen el mismo tamaño real
          className="color-body"
          color="currentColor"
        />
      </div>
    </div>
  );
}
