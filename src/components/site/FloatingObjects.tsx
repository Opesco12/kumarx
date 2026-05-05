import { BookOpen, CreditCard, Paintbrush, PenLine } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type FloatingObject = {
  icon: LucideIcon;
  top: string;
  left: string;
  size: string;
  opacity: number;
  duration: string;
  delay: string;
  rotate: string;
  mobileHidden?: boolean;
};

const objects: FloatingObject[] = [
  {
    icon: PenLine,
    top: "10%",
    left: "7%",
    size: "w-7 h-7",
    opacity: 0.4,
    duration: "14s",
    delay: "0s",
    rotate: "-10deg",
  },
  {
    icon: BookOpen,
    top: "24%",
    left: "84%",
    size: "w-8 h-8",
    opacity: 0.4,
    duration: "18s",
    delay: "1.5s",
    rotate: "8deg",
  },
  {
    icon: CreditCard,
    top: "55%",
    left: "10%",
    size: "w-8 h-8",
    opacity: 0.4,
    duration: "16s",
    delay: "0.8s",
    rotate: "6deg",
    mobileHidden: true,
  },
  {
    icon: Paintbrush,
    top: "71%",
    left: "86%",
    size: "w-7 h-7",
    opacity: 0.4,
    duration: "15s",
    delay: "2.2s",
    rotate: "-12deg",
  },
  {
    icon: BookOpen,
    top: "82%",
    left: "40%",
    size: "w-6 h-6",
    opacity: 0.4,
    duration: "19s",
    delay: "0.3s",
    rotate: "10deg",
    mobileHidden: true,
  },
  {
    icon: PenLine,
    top: "38%",
    left: "48%",
    size: "w-6 h-6",
    opacity: 0.4,
    duration: "20s",
    delay: "1.8s",
    rotate: "-7deg",
    mobileHidden: true,
  },
];

export const FloatingObjects = () => {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
      aria-hidden="true"
    >
      {objects.map((object, index) => {
        const Icon = object.icon;

        return (
          <div
            key={`${Icon.displayName ?? "object"}-${index}`}
            className={`floating-object ${object.mobileHidden ? "hidden md:block" : "block"}`}
            style={{
              top: object.top,
              left: object.left,
              opacity: object.opacity,
              animationDuration: object.duration,
              animationDelay: object.delay,
              transform: `rotate(${object.rotate})`,
              ["--float-rotate" as string]: object.rotate,
            }}
          >
            <Icon
              className={`${object.size} text-foreground/60`}
              strokeWidth={1.8}
            />
          </div>
        );
      })}
    </div>
  );
};
