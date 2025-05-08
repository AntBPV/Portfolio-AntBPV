interface CardProps {
  title: string;
  description: string;
  color: string;
}

export default function Card({ title, description, color }: CardProps) {
  return (
    <div className="w-11/12 md:w-5/6">
      <div
        className="rounded-l-xl p-6 bg-card border-4 border-r-40 text-body"
        style={{ borderColor: `var(--${color})` }}
      >
        <h3
          className="text-4xl font-title font-semibold underline mb-2 text-right"
          style={{ color: `var(--${color})` }}
        >
          {title}
        </h3>
        <p className="text-xl font-text text-right">{description}</p>
      </div>
    </div>
  );
}
