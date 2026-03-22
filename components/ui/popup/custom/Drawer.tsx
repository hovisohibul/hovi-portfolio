"use client";
import React from "react";
import { Drawer } from "vaul";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { cn } from "@/lib/util";

export default function CDrawer({
  children,
  trigger,
  isPadding = true,
  open,
  onClose,
  disableOutsideInteraction = false,
}: IDialogDrawer) {
  return (
    <Drawer.Root
      open={open}
      onOpenChange={onClose}
      dismissible={!disableOutsideInteraction}
    >
      {trigger && <Drawer.Trigger asChild>{trigger}</Drawer.Trigger>}
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 size-full bg-black/10 backdrop-blur-sm" />
        <Drawer.Content className="bg-white h-fit fixed bottom-0 left-0 right-0 outline-none z-50">
          <VisuallyHidden asChild>
            <Drawer.Title />
          </VisuallyHidden>
          <div
            className={cn(
              "max-h-[80vh] w-full max-w-xl mx-auto",
              isPadding && "p-[16px]",
            )}
          >
            {children}
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
