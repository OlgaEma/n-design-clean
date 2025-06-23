"use client";

import Image from "next/image";
import { RefObject } from "react";
import lang from "@/data/lang";
import Section from "@/components/Section";

interface Props {
  language: "en" | "cz";
  trigger: boolean;
  refProp: RefObject<HTMLDivElement | null>;
}

export default function AboutDesktop({ language, trigger, refProp }: Props) {
  const content = lang[language].about;

  return (
    <Section
      id="about"
      refProp={refProp}
      trigger={trigger}
      customLayout={true}
      leftContent={
        <div className="relative w-[30%] bg-black flex items-center justify-center overflow-hidden">
          {trigger && (
            <div className="absolute top-0 left-0 w-[8%] h-full bg-white animate-slideDown z-0" />
          )}
          <div className="relative z-10 w-full h-full px-6 py-10 flex flex-col justify-around text-white font-montserrat gap-10">
            <h2
              className={`text-4xl font-bold text-center ${
                trigger ? "fade-in-delayed" : "opacity-0"
              }`}
              style={trigger ? { animationDelay: "0.5s" } : {}}
            >
              {content.heading}
            </h2>
            <div className="px-5 pl-10 flex flex-col gap-10 text-center text-base max-w-prose text-lg lg:text-sm xl:text-lg">
              {content.paragraphs.map((text, i) => (
                <p
                  key={i}
                  className={trigger ? "fade-in-delayed" : "opacity-0"}
                  style={{ animationDelay: `${1.1 + i * 0.3}s` }}
                >
                  {text}
                </p>
              ))}
            </div>
            <div
              className={`flex justify-center ${
                trigger ? "fade-in-delayed" : "opacity-0"
              }`}
              style={{ animationDelay: "2.1s" }}
            >
              <Image
                src={content.logoSrc}
                alt="N-design logo"
                width={300}
                height={100}
                priority
                className="w-[30%]"
              />
            </div>
          </div>
        </div>
      }
      rightContent={
        <div className="relative w-full h-full bg-black text-white font-montserrat overflow-hidden">
          {trigger && (
            <>
              <div className="absolute top-0 left-0 w-[2px] h-1/2 bg-white animate-lineDown z-10" />
              <div className="absolute bottom-0 left-0 w-[2px] h-1/2 bg-white animate-lineUp z-10" />
              <div className="absolute top-1/2 left-0 h-[2px] w-0 bg-white animate-horizontalSplit z-10" />
            </>
          )}

          <div className="absolute inset-0 z-20 flex flex-col h-full overflow-hidden">
            {/* Natasha */}
            <div className="h-1/2 flex items-center justify-center px-6">
              <div className="flex flex-col items-center text-center gap-4 w-full max-w-md">
                <Image
                  src={content.natasha.image}
                  alt="Natasha"
                  width={180}
                  height={180}
                  priority
                  className={`rounded-full object-cover shadow-md shrink-0 ${
                    trigger ? "fade-in-delayed" : "opacity-0"
                  }`}
                  style={{
                    animationDelay: trigger ? "0.6s" : "0s",
                  }}
                />
                <p
                  className={`text-lg font-semibold whitespace-pre-line ${
                    trigger ? "fade-in-delayed" : "opacity-0"
                  }`}
                  style={trigger ? { animationDelay: "0.9s" } : {}}
                >
                  {content.natasha.name}
                  {"\n"}
                  {content.natasha.title}
                </p>
                <blockquote
                  className={`italic text-sm px-4 py-2 border-l-4 border-white rounded bg-white/10 max-w-xs ${
                    trigger ? "fade-in-delayed" : "opacity-0"
                  }`}
                  style={trigger ? { animationDelay: "1.2s" } : {}}
                >
                  {content.natasha.quote}
                </blockquote>
                <div
                  className={`text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-h-[100px] overflow-y-auto ${
                    trigger ? "fade-in-delayed" : ""
                  }`}
                  style={trigger ? { animationDelay: "1.4s" } : {}}
                >
                  {content.natasha.paragraphs.map((p, i) => (
                    <p key={i} className="mb-2">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Nedeljko */}
            <div className="h-1/2 flex items-center justify-center px-6">
              <div className="flex flex-col items-center text-center gap-4 w-full max-w-md">
                <Image
                  src={content.nedeljko.image}
                  alt="Nedeljko"
                  width={180}
                  height={180}
                  priority
                  className={`rounded-full object-cover object-top shadow-md shrink-0 ${
                    trigger ? "fade-in-delayed" : "opacity-0"
                  }`}
                  style={{
                    animationDelay: trigger ? "0.9s" : "0s",
                  }}
                />
                <p
                  className={`text-lg font-semibold whitespace-pre-line ${
                    trigger ? "fade-in-delayed" : "opacity-0"
                  }`}
                  style={trigger ? { animationDelay: "1.1s" } : {}}
                >
                  {content.nedeljko.name}
                  {"\n"}
                  {content.nedeljko.title}
                </p>
                <blockquote
                  className={`italic text-sm px-4 py-2 border-l-4 border-white rounded bg-white/10 max-w-xs ${
                    trigger ? "fade-in-delayed" : "opacity-0"
                  }`}
                  style={trigger ? { animationDelay: "1.3s" } : {}}
                >
                  {content.nedeljko.quote}
                </blockquote>
                <div
                  className={`text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-h-[100px] overflow-y-auto ${
                    trigger ? "fade-in-delayed" : ""
                  }`}
                  style={trigger ? { animationDelay: "1.5s" } : {}}
                >
                  {content.nedeljko.paragraphs.map((p, i) => (
                    <p key={i} className="mb-2">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
}
