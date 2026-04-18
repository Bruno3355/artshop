import styles from "./Col.module.css";
import { ReactNode } from "react";

type ColSize = number | "full";

interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  xs?: ColSize;
  sm?: ColSize;
  md?: ColSize;
  lg?: ColSize;
  start?: number | "auto";
  smStart?: number | "auto";
  mdStart?: number | "auto";
  lgStart?: number | "auto";
  className?: string;
}

export const Col = ({
  children,
  xs = 'full',
  sm,
  md,
  lg,
  start = "auto",
  smStart,
  mdStart,
  lgStart,
  className = "",
  style,
  ...props
}: ColProps) => {
  const activeSm = sm ?? xs;
  const activeMd = md ?? activeSm;
  const activeLg = lg ?? activeMd;

  const activeStartSm = smStart ?? start;
  const activeStartMd = mdStart ?? activeStartSm;
  const activeStartLg = lgStart ?? activeStartMd;

  const vars = {
    "--start-xs": xs === "full" ? "1" : start,
    "--end-xs": xs === "full" ? "-1" : `span ${xs}`,

    "--start-sm": activeSm === "full" ? "1" : activeStartSm,
    "--end-sm": activeSm === "full" ? "-1" : `span ${activeSm}`,

    "--start-md": activeMd === "full" ? "1" : activeStartMd,
    "--end-md": activeMd === "full" ? "-1" : `span ${activeMd}`,

    "--start-lg": activeLg === "full" ? "1" : activeStartLg,
    "--end-lg": activeLg === "full" ? "-1" : `span ${activeLg}`,
  } as React.CSSProperties;

  return (
    <div
      style={{ ...vars, ...style }}
      className={`${styles.col} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
