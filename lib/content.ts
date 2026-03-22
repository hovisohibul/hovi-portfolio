import { StaticImageData } from "next/image";
import {
  marvel,
  pj1,
  pj2,
  pj3,
  profilix,
  Test1,
  Test2,
  Test3,
  Test4,
  Test5,
  Test6,
  Test7,
  Test8,
  tovio,
  tvadmin1,
  tvadmin2,
  tvadmin3,
} from "./image";

export const BAR_ITEMS = [
  {
    title: "Home",
    link: "home",
  },
  {
    title: "About",
    link: "about",
  },
  {
    title: "Portfolio",
    link: "portfolio",
  },
  {
    title: "Experience",
    link: "experience",
  },
];

export const MARQUEE_TEXT = [
  "Web Design",
  "Frontend Developer",
  "Web Development",
  "Next JS",
  "React",
  "Tailwind",
  "Redux",
];

interface IMAGE {
  title: string;
  type: string;
  link?: string;
  collection?: string[] | StaticImageData[];
  src: string | StaticImageData;
}

export const IMAGE_SLIDER: IMAGE[] = [
  {
    title: "Marvelous",
    type: "link",
    link: "https://www.marveloustours.id/",
    src: marvel,
  },
  {
    title: "Profilix",
    type: "link",
    link: "https://profilix.id/en",
    src: profilix,
  },
  {
    title: "Tovio Landing",
    type: "link",
    link: "https://tovio.id/en",
    src: tovio,
  },
  {
    title: "Tovio CMS",
    type: "collection",
    collection: [tvadmin1, tvadmin2, tvadmin3],
    src: tvadmin1,
  },
  {
    title: "Projects",
    type: "collection",
    collection: [pj1, pj2, pj3],
    src: pj1,
  },
  {
    title: "Test6",
    type: "",
    src: Test6,
  },
  // {
  //     title: 'Test7',
  //     type: '',
  //     src: Test7
  // },
  // {
  //     title: 'Test8',
  //     type: '',
  //     src: Test8
  // },
];

export const IDPOP = {
  collectiveId: "CollectiveId",
};
