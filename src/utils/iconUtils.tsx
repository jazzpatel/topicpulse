import { LucideIcon } from "lucide-react";
import React from "react";

interface IconProps {
  size?: number;
  color?: string;
}

export function createIcon(Icon: LucideIcon, color: string): React.ReactNode {
  return React.createElement(Icon, { size: 36, color });
}
