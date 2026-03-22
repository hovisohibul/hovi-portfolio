"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoPlay from "embla-carousel-autoplay";
import { cn } from "@/lib/util";
import style from "@/style/carousel.module.css";
import { IoChevronForwardOutline } from "react-icons/io5";

type RenderItems<T> = (item: T, index: Number) => React.ReactNode;
interface ICarousel<T> {
  title?: string;
  datas: readonly T[];
  render: RenderItems<T>;
  keyBy?: (item: T, index: number) => React.Key;
  loop?: boolean;
  isAuto?: boolean;
}

export default function Carousel<T>({
  title,
  datas,
  loop = false,
  isAuto = false,
  render,
  keyBy,
}: ICarousel<T>) {
  const autoPlay = isAuto ? [AutoPlay()] : [];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop,
    },
    autoPlay,
  );

  const onNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  return (
    <div className={cn(title && "flex flex-col gap-1")}>
      {title && <p className="text-[14px] font-medium">{title}</p>}
      <div ref={emblaRef} className="overflow-hidden relative">
        <div className="flex gap-2">
          {datas.map((item, index) => (
            <div
              key={keyBy?.(item, index) ?? index}
              className={cn(style["embla_slide"])}
            >
              {render(item, index)}
            </div>
          ))}
        </div>
        <div className="absolute left-0 top-[50%] flex justify-between w-full">
          <button
            type="button"
            onClick={onPrev}
            className="rounded-full w-8 h-8 bg-white border flex items-center justify-center cursor-pointer"
          >
            <IoChevronForwardOutline size={14} className="rotate-180" />
          </button>
          <button
            type="button"
            onClick={onNext}
            className="rounded-full w-8 h-8 bg-white border flex items-center justify-center cursor-pointer"
          >
            <IoChevronForwardOutline size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
