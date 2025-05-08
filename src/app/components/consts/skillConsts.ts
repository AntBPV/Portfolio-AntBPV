interface skillData {
  title: string;
  percentage: number;
  description: string;
  color: string;
}

export const skillConsts: skillData[] = [
  {
    title: "Backend Development",
    percentage: 75,
    description:
      "Experienced in developing backend applications for web projects using various languages and frameworks, such as Django, Spring, and Node.js.",
    color: "bg-primary",
  },
  {
    title: "Frontend Development",
    percentage: 60,
    description:
      "Focused on human-centered design for web applications. Developed several apps using frameworks like React, with an emphasis on usability and responsive interfaces.",
    color: "bg-secondary",
  },
  {
    title: "Cloud Deploy",
    percentage: 50,
    description:
      "Familiar with deploying applications on popular cloud platforms, including Azure and AWS. Experience includes setting up Lambda functions and full-stack deployments.",
    color: "bg-accent",
  },
  {
    title: "SQL Databases",
    percentage: 70,
    description:
      "Utilized SQL databases in a wide range of projects, including college assignments, authentication systems, and basic data storage solutions.",
    color: "bg-accent-secondary",
  },
];
