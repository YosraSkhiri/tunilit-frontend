"use client"
import TooltipOptions from './Tooltip.types';
import TooltipContext from './TooltipContext';
import { useTooltip } from './useTooltip';

// https://floating-ui.com/docs/tooltip

function Tooltip({
  children,
  ...options
}: { children: React.ReactNode } & TooltipOptions) {
  // This can accept any props as options, e.g. `placement`,
  // or other positioning options.
  const tooltip = useTooltip(options);
  return (
    <TooltipContext.Provider value={tooltip}>
      {children}
    </TooltipContext.Provider>
  );
}

export default Tooltip
