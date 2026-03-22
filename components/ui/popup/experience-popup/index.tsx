"use client";
import React from "react";
import { useAppContext } from "../../layout/ContextLayout";
import Carousel from "../../carousel";
import CImage from "../../image";

export default function ExperiencePopup() {
  const { items } = useAppContext();

  const imageSlide = items?.data?.images as [];
  const title = items?.data?.title as string;

  return (
    <div className="flex flex-col gap-4 max-w-[800px] h-full bg-white rounded-lg">
      <p>{title}</p>
      <Carousel
        datas={imageSlide}
        isAuto
        render={(item) => (
          <CImage
            src={item}
            alt="item"
            sizeImg={800}
            contentClass="md:max-w-[550px] "
          />
        )}
      />
    </div>
  );
}
