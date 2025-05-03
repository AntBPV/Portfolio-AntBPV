import Link from "next/link";
import Image from "next/image";
import useIsMobile from "./hooks/useIsMobile";

export interface ProjectCardProps {
  category: string;
  title: string;
  description: string;
  tags: string[];
  imageSrc: string;
}

export default function MobileProjectCard({
  category,
  title,
  description,
  tags,
  imageSrc,
}: ProjectCardProps) {
  const displayTags = tags.slice(0, 3);
  const tagColors = [
    { bg: "bg-primary" },
    { bg: "bg-accent" },
    { bg: "bg-secondary" },
  ];

  const { mounted } = useIsMobile();

  return (
    <main className="w-full max-w-full rounded-custom bg-card overflow-hidden">
      <div className="bg-head text-card-head-m font-title px-3 py-2">
        <p>{category}</p>
      </div>

      <section className="flex flex-col">
        <div className="p-4">
          <span className="flex items-center mb-3">
            <h2 className="card-title-txtSize-m color-body font-title mr-2">
              {title}
            </h2>
            <Link href="#" className="w-5 h-5" />
          </span>

          <p className="card-txtSize color-body font-text mb-4">
            {description}
          </p>

          <div className="flex flex-wrap gap-2">
            {displayTags.map((tag, index) => (
              <div
                key={index}
                className="flex items-center rounded-tag px-3 py-1 bg-tag"
              >
                <div
                  className={`w-3 h-3 rounded-full ${
                    tagColors[index % tagColors.length].bg
                  } mr-1`}
                ></div>
                <span className="card-txtSize color-body font-subtitle">
                  {tag}
                </span>
              </div>
            ))}
          </div>

          <div className="w-full h-full bottom-0 left-0 right-0 px-2 pt-4 sm:hidden">
            {mounted && (
              <div className="relative w-full h-48 rounded-t-lg flex justify-center items-end overflow-hidden">
                <Image
                  src={imageSrc}
                  alt={title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
