"use client";
import React from "react";
import SkillCard from "./SkillCard";
import { title } from "process";

const skills = [
  { title: "智云课堂助手", description: "为智云课堂开发的chrome插件", image: "/images/skills/zhiyun-extension.png", link:"http://github.com/Auspiow/zhiyun-extension"},
];

export default function SkillSection() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center py-12">
      {skills.map((skill) => (
        <SkillCard key={skill.title} title={skill.title} description={skill.description} image={skill.image} link={skill.link} />
      ))}
    </section>
  );
}
