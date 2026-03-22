declare interface IOverlay {
  id?: string;
  data?: Record<string, unknown>;
  open?: boolean;
  children?: React.ReactNode;
  isPadding?: boolean;
  disableOutsideInteraction?: boolean;
}

declare interface ControlledOverlay extends IOverlay {
  open: boolean;
  onClose: () => void;
  trigger?: never;
}

declare interface UncontrolledOverlay extends IOverlay {
  open?: undefined;
  onClose?: () => void;
  trigger: React.ReactNode;
}

declare type IDialogDrawer = ControlledOverlay | UncontrolledOverlay;
