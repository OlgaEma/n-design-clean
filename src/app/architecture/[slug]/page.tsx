"use client";
import { useSearchParams } from "next/navigation";
import { projects as projectsEn } from "@/data/projects.en";
import { projects as projectsCz } from "@/data/projects.cz";
import { notFound } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";



import { use } from "react";

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params); // ✅ unwrap the slug safely

  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") === "cz" ? "cz" : "en";

  const project = (lang === "cz" ? projectsCz : projectsEn).find(
    (p) => p.slug === slug
  );
  useEffect(() => {
    localStorage.setItem("preferredLanguage", lang);
  }, [lang]);

  if (!project) return notFound();

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">{project.title}</h1>

      {/* Renders */}
      {project.renders?.length > 0 && (
        <div className="mb-6 space-y-4">
          {project.renders.map((src, index) => (
            <Image
              key={`render-${index}`}
              src={src}
              alt={`${project.title} Render ${index + 1}`}
              width={800} // Or adjust based on your layout
              height={600}
              priority={index === 0}
              className="rounded shadow object-cover"
            />
          ))}
        </div>
      )}

      {/* Plans */}
      {project.plans?.length > 0 && (
        <div className="mb-6 space-y-4">
          {project.plans.map((src, index) => (
            <Image
              key={`plan-${index}`}
              src={src}
              alt={`${project.title} Plan ${index + 1}`}
              width={800} // adjust to your image dimensions
              height={600}
              priority={index === 0}
              className="rounded shadow object-cover"
            />
          ))}
        </div>
      )}

      <p className="text-lg">{project.description}</p>
    </div>
  );
}
