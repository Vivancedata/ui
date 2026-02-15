"use client";

import { useScroll, useTransform } from "framer-motion";
import { useRef, useMemo, memo, ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

interface ParallaxScrollProps {
  images: string[];
  className?: string;
  renderImage?: (src: string, index: number) => ReactNode;
}

const ParallaxScrollComponent = ({
  images,
  className,
  renderImage,
}: ParallaxScrollProps) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"],
  });

  const translateYFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateXFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const rotateXFirst = useTransform(scrollYProgress, [0, 1], [0, -20]);

  const translateYThird = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateXThird = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const rotateXThird = useTransform(scrollYProgress, [0, 1], [0, 20]);

  const { firstPart, secondPart, thirdPart } = useMemo(() => {
    const third = Math.ceil(images.length / 3);
    return {
      firstPart: images.slice(0, third),
      secondPart: images.slice(third, 2 * third),
      thirdPart: images.slice(2 * third),
    };
  }, [images]);

  const defaultRenderImage = (src: string, index: number) => (
    <img
      src={src}
      className="h-80 w-full object-cover object-left-top rounded-lg !m-0 !p-0"
      alt={`Image ${index + 1}`}
    />
  );

  const render = renderImage || defaultRenderImage;

  return (
    <div
      className={cn("h-[40rem] items-start overflow-y-auto w-full", className)}
      ref={gridRef}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-40 px-10">
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div
              style={{
                y: translateYFirst,
                x: translateXFirst,
                rotateZ: rotateXFirst,
              }}
              key={"grid-1" + idx}
            >
              {render(el, idx)}
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div key={"grid-2" + idx}>
              {render(el, idx + firstPart.length)}
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div
              style={{
                y: translateYThird,
                x: translateXThird,
                rotateZ: rotateXThird,
              }}
              key={"grid-3" + idx}
            >
              {render(el, idx + firstPart.length + secondPart.length)}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const ParallaxScroll = memo(ParallaxScrollComponent);
