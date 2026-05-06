import { cn } from "@/lib/utils";
import { ReactNode } from "react";
// import styles from "./Grid.module.css";

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export const Grid = ({
  children,
  className = "",
  style,
  ...rest
}: GridProps) => (
  <div
    style={style}
    className={cn(
      "grid grid-cols-4 gap-y-section-y sm:gap-y-container-y w-full mx-auto px-section-x sm:px-container-x md:grid-cols-8 md:gap-card-gap lg:grid-cols-12",
      className,
    )}
    {...rest}
  >
    {children}
  </div>
);
