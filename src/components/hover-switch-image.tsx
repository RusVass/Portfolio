import clsx from "clsx";
import { type ReactNode, useEffect, useMemo, useState } from "react";

interface HoverSwitchImageProps {
  className?: string;
  wrapperClassName?: string;
  overlay?: ReactNode;
  alt?: string;
  intervalMs?: number;
  transitionMs?: number;
  transitionEasing?: string;
  effect?: "fade" | "zoomFade";
}

const DEFAULT_INTERVAL_MS = 3000;
const DEFAULT_TRANSITION_MS = 8000;
const DEFAULT_TRANSITION_EASING = "cubic-bezier(0.3, 0, 0, 1)";
const EFFECT_CLASSES: Record<
  NonNullable<HoverSwitchImageProps["effect"]>,
  { base: string; active: string }
> = {
  fade: {
    base: "opacity-0",
    active: "opacity-100",
  },
  zoomFade: {
    base: "opacity-0 scale-[1.08]",
    active: "opacity-100 scale-100",
  },
};

export function HoverSwitchImage({
  className,
  wrapperClassName,
  overlay,
  alt = "Портфоліо превʼю",
  intervalMs = DEFAULT_INTERVAL_MS,
  transitionMs = DEFAULT_TRANSITION_MS,
  transitionEasing = DEFAULT_TRANSITION_EASING,
  effect = "fade",
}: HoverSwitchImageProps): JSX.Element {
  const imageSources = useMemo(() => ["/3.png", "/2.png"] as const, []);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) {
      return;
    }

    // Перемикаємо зображення з плавною анімацією, коли курсор поза компонентом.
    const timerId = window.setInterval(() => {
      setActiveIndex((prev) => (prev === 0 ? 1 : 0));
    }, intervalMs);

    return () => window.clearInterval(timerId);
  }, [intervalMs, isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setActiveIndex(1);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={clsx("relative inline-flex overflow-hidden", wrapperClassName)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleMouseEnter}
      onBlur={handleMouseLeave}
    >
      {overlay}
      {imageSources.map((src, index) => {
        const isActive = index === activeIndex;
        const assignedClasses = EFFECT_CLASSES[effect] ?? EFFECT_CLASSES.fade;

        return (
          <img
            key={src}
            src={src}
            alt={isActive ? alt : ""}
            aria-hidden={!isActive}
            className={clsx(
              className,
              "absolute inset-0 h-full w-full object-cover transition-[opacity,transform]",
              assignedClasses.base,
              isActive && assignedClasses.active,
            )}
            style={{
              transitionDuration: `${transitionMs}ms`,
              transitionTimingFunction: transitionEasing,
            }}
          />
        );
      })}
    </div>
  );
}

