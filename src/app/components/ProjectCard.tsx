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

export default function ProjectCard({
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
    <main className="w-full max-w-[80vw] rounded-custom bg-card overflow-hidden z-10">
      <div className="bg-head text-card-head font-title px-4 py-2">
        <p>{category}</p>
      </div>

      <section className="flex flex-row">
        <div className="p-6 w-1/2">
          <div className="flex items-center mb-4">
            <h2 className="card-title-txtSize color-body font-title mr-2">
              {title}
            </h2>
            <Link href="#" className="w-6 h-6" />
          </div>

          <p className="text--color-body card-txtSize font-text mb-6">
            {description}
          </p>

          <div className="flex flex-wrap gap-2">
            {displayTags.map((tag, index) => (
              <div
                key={index}
                className="flex items-center rounded-tag px-4 py-2 bg-tag"
              >
                <div
                  className={`w-4 h-4 rounded-full ${
                    tagColors[index % tagColors.length].bg
                  } mr-2`}
                ></div>
                <span className="color-body card-txtSize font-subtitle">
                  {tag}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="w-1/2 right-0 bottom-0 top-0 overflow-hidden pt-4 px-2">
          {mounted && (
            <div className="w-full h-full relative rounded-t-lg flex justify-center items-center">
              <Image
                src={imageSrc}
                alt={title}
                fill
                className="object-cover "
              />
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
