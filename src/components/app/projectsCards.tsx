import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import type { Project } from "@/lib/constants";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

export function ProjectCard({
  project,
  renderPage,
  isSoomtherReady,
}: {
  project: Project;
  renderPage: boolean;
  isSoomtherReady: boolean;
}) {
  const container = useRef<HTMLAnchorElement>(null);
  const imageTween = useRef<gsap.core.Tween | null>(null);

  useGSAP(
    () => {
      if (!container.current) return;
      const q = gsap.utils.selector(container);

      imageTween.current = gsap.to(q(".img"), {
        y: -120,
        duration: 0.3,
        ease: "power3.out",
        paused: true,
      });

      const media = gsap.matchMedia();
      media.add("(max-width: 1024px)", () => {
        const smoother = ScrollSmoother.get();
        if (smoother) {
          smoother.effects(q(".pic"), {
            speed: "auto",
          });
        }

        ScrollTrigger.create({
          trigger: container.current,
          start: "top center",
          end: "+=210px",
          scrub: 1,
          onEnter: () => {
            gsap.to(q(".img"), { opacity: 1, duration: 0.3, ease: "power1.out" });
            gsap.to(q(".text"), { fontWeight: 700, backgroundColor:'black' ,duration: 0.3, ease: "power1.out" });
          },
          onLeave: () => {
            gsap.to(q(".img"), { opacity: 0, duration: 0.3, ease: "power1.out" });
            gsap.to(q(".text"), { fontWeight: 400,backgroundColor:'transparent',duration: 0.3, ease: "power1.out" });
          },
          onEnterBack: () => {
            gsap.to(q(".img"), { opacity: 1, duration: 0.3, ease: "power1.out" });
            gsap.to(q(".text"), { fontWeight: 700, backgroundColor:'black',duration: 0.3, ease: "power1.out" });
          },
          onLeaveBack: () => {
            gsap.to(q(".img"), { opacity: 0, duration: 0.3, ease: "power1.out" });
            gsap.to(q(".text"), { fontWeight: 400,backgroundColor:'transparent',duration: 0.3, ease: "power1.out" });
          },
        });
      });
    },
    { scope: container, dependencies: [renderPage, isSoomtherReady] }
  );

  const handleMouseEnter = () => {
    imageTween.current?.play();
  };

  const handleMouseLeave = () => {
    imageTween.current?.reverse();
  };

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      ref={container}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="h-52 pl-4 flex flex-col justify-center items-center lg:gap-3 gap-1 border-b border-muted relative group overflow-hidden"
    >
      <div className="img lg:w-96 w-full h-full rounded absolute max-lg:inset-0 lg:right-10 lg:-bottom-40 pointer-events-none overflow-hidden lg:shadow-xl max-lg:opacity-0">
        <img
          src={project.image}
          alt={project.name}
          className="pointer-events-none w-full lg:h-full h-[150%] object-cover pic"
        />
      </div>
      <h1 className="text z-20 lg:text-5xl text-2xl font-normal cursor-pointer px-2">
        {project.name}
      </h1>
    </a>
  );
}
