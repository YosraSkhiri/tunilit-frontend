import type { Placement } from "@floating-ui/react";

export default interface TooltipOptions {
  initialOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  open?: boolean;
  placement?: Placement;
}
