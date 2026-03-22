import CImage from "@/components/ui/image";
import { useAppContext } from "@/components/ui/layout/ContextLayout";
import { IDPOP } from "@/lib/content";
import { StaticImageData } from "next/image";
import React from "react";

interface ICard {
  src: string | StaticImageData;
  title: string;
  type: string;
  className?: string;
  link?: string;
  collection?: string[] | StaticImageData[];
}

export default function Card({
  src,
  title,
  type,
  className,
  link,
  collection,
}: ICard) {
  const { setOpenOverlay } = useAppContext();

  const checkType = () => {
    if (type === "link") {
      window.open(link, "_blank");
    }

    setOpenOverlay({
      id: IDPOP.collectiveId,
      data: {
        images: collection,
        title,
      },
    });
  };

  return (
    <div
      className={`overflow-hidden p-2 rounded-lg border-2 border-green-500 flex flex-col gap-3 bg-black ${className}`}
      onClick={checkType}
    >
      <CImage
        src={src}
        alt={title}
        sizeImg={400}
        contentClass="w-[280px] h-[200px] flex-shrink-0"
      />
      <p className="font-semibold text-green-500">{title}</p>
    </div>
  );
}
