import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import type { Project } from "@/lib/constants";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { Button } from "../ui/button";
import { Github, Eye } from "lucide-react";

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
  const container = useRef<HTMLDivElement>(null);


  useGSAP(
    () => {
      if (!container.current) return;
      const q = gsap.utils.selector(container);
      const media = gsap.matchMedia();
      media.add("(max-width: 1000px)", () => {
        const smoother = ScrollSmoother.get();
        if (smoother) {
          smoother.effects(q(".pic"), {
            speed: "auto",
          });
        }

        ScrollTrigger.create({
          trigger: container.current,
          start: "top center+=100",
          end: "+=210px",
          scrub: 1,
          onEnter: () => {
            gsap.to(q(".img"), { opacity: 1, duration: 0.2, ease: "power1.out" });
            gsap.to(q(".text"), { fontWeight: 700, duration: 0.2, ease: "power1.out" });
            gsap.to(q(".tools"), { opacity: 1, y: 0, duration: 0.2, ease: "power1.out" });
            gsap.to(q(".buttons"), { opacity: 1, y: 0, duration: 0.2, ease: "power1.out" });
          },
          onLeave: () => {
            gsap.to(q(".img"), { opacity: 0, duration: 0.3, ease: "power1.out" });
            gsap.to(q(".text"), { fontWeight: 400, duration: 0.1, ease: "power1.out" });
            gsap.to(q(".tools"), { opacity: 0, duration: 0.3, ease: "power1.out" });
            gsap.to(q(".buttons"), { opacity: 0, duration: 0.3, ease: "power1.out" });
          },
          onEnterBack: () => {
            gsap.to(q(".img"), { opacity: 1, duration: 0.3, ease: "power1.out" });
            gsap.to(q(".text"), { fontWeight: 700, duration: 0.1, ease: "power1.out" });
            gsap.to(q(".tools"), { opacity: 1, y: 0, duration: 0.3, ease: "power1.out" });
            gsap.to(q(".buttons"), { opacity: 1, y: 0, duration: 0.3, ease: "power1.out" });
          },
          onLeaveBack: () => {
            gsap.to(q(".img"), { opacity: 0, duration: 0.3, ease: "power1.out" });
            gsap.to(q(".text"), { fontWeight: 400, duration: 0.1, ease: "power1.out" });
            gsap.to(q(".tools"), { opacity: 0, duration: 0.3, ease: "power1.out" });
            gsap.to(q(".buttons"), { opacity: 0, duration: 0.3, ease: "power1.out" });
          },
        });
      });
    },
    { scope: container, dependencies: [renderPage, isSoomtherReady] }
  );

  const handleMouseEnter = () => {
    const q = gsap.utils.selector(container);
    const media = gsap.matchMedia();
    media.add('(min-width: 1000px)', () => {
      gsap.to(q(".img"), {
        y: -120,
        duration: 0.3,
        ease: "power3.out",
      });
      gsap.to(q(".text"), {
        fontWeight: 700,
        duration: 0.1,
        ease: "power1.out",
      });
    })
  };

  const handleMouseLeave = () => {
    const q = gsap.utils.selector(container);
    const media = gsap.matchMedia();
    media.add('(min-width: 1000px)', () => {
      gsap.to(q(".img"), {
        y: 0,
        duration: 0.3,
        ease: "power3.out",
      });
      gsap.to(q(".text"), {
        fontWeight: 400,
        duration: 0.2,
        ease: "power1.out",
      });
    })
  };

  return (
    <div
      ref={container}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="h-52 pl-4 flex flex-col justify-center items-center lg:gap-3 gap-2 border-b border-muted relative group overflow-hidden"
    >
      <div className="img lg:w-96 w-full h-full lg:rounded absolute max-lg:inset-0 lg:right-10 lg:-bottom-40 pointer-events-none overflow-hidden lg:shadow-xl max-lg:opacity-0">
        <img
          src={project.image}
          alt={project.name}
          className="pointer-events-none w-full lg:h-full h-[150%] object-cover pic"
        />
        <div className="absolute inset-0 max-lg:bg-black/40 max-lg:backdrop-blur-xs lg:hidden" />
      </div>

      <h1 className="text z-20 lg:text-5xl text-2xl cursor- font-space-grotesk">
        {project.name}
      </h1>

      <p className="tools z-20 text-xs lg:text-sm text-muted-foreground max-lg:text-center max-lg:px-4 max-lg:opacity-0">
        {project.tools.join(" / ")}
      </p>

      <div className="buttons z-20 flex gap-2.5 items-center mt-1 max-lg:opacity-0">
        {project.repo && (
          <Button asChild variant="outline" className="rounded-full" >
            <a target="_blank" rel="noopener noreferrer" href={project.repo} className="flex items-center gap-1.5 text-xs font-medium">
              <Github className="w-4 h-4" />
              <span>Github</span>
            </a>
          </Button>
        )}
        {project.link && (
          <Button asChild className="rounded-full">
            <a target="_blank" rel="noopener noreferrer" href={project.link} className="flex items-center gap-1.5 text-xs font-medium">
              <Eye className="w-4 h-4" />
              <span>Live</span>
            </a>
          </Button>
        )}
      </div>
    </div>
  );
}

