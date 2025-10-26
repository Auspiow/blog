"use client";
import Image from "next/image";
import "./SkillCard.css";

interface SkillCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function SkillCard({
  title,
  description,
  image,
  link,
}: SkillCardProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="card-link">
      <div className="card">
        <div className="card-header">{title}</div>

        <div className="card-body">
          <div className="file-block">
            <Image
              src={image}
              alt={title}
              width={60}
              height={60}
              style={{ borderRadius: "0.25rem" }}
            />
            <div className="file-body">
              <p className="file-title">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
