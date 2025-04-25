"use client";

interface MobileMenuItemProps {
  href: string;
  defaultIcon: React.ComponentType<{
    color?: string;
    size?: number;
    className?: string;
  }>;
  label: string;
}

export default function MobileMenuItem({
  href,
  defaultIcon: DefaultIcon,
  label,
}: MobileMenuItemProps) {
  return (
    <main className="relative w-full flex justify-center px-2">
      <a
        href={href}
        className="menu-item-absolute py-3 w-full flex flex-row items-center justify-between"
        aria-label={label}
      >
        <DefaultIcon color="currentColor" size={37} />
        <span className="ml-4 text-xl text-body">{label}</span>
      </a>
    </main>
  );
}
