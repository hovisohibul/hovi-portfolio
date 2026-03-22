import { IDPOP } from "@/lib/content";
import React from "react";
import { useMediaQuery } from "react-responsive";
import CDrawer from "./custom/Drawer";
import CDialog from "./custom/Dialog";
import { useAppContext } from "../layout/ContextLayout";
import ExperiencePopup from "./experience-popup";

export default function PopupWrapper() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const { closeOverlay, items } = useAppContext();
  const id = items?.id;
  const open = items?.open || false;
  const isPadding = items?.isPadding ?? true;
  const disableOutsideInteraction = items?.disableOutsideInteraction || false;

  const Content = () => {
    switch (id) {
      case IDPOP.collectiveId:
        return <ExperiencePopup />;
      default:
        return <></>;
    }
  };

  const sharedProps = {
    open,
    onClose: closeOverlay,
    isPadding,
    disableOutsideInteraction,
    children: <Content />,
  };

  return isMobile ? <CDrawer {...sharedProps} /> : <CDialog {...sharedProps} />;
}
