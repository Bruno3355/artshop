import { ReactNode } from "react";
import styles from "./Grid.module.css"

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export const Grid = ({children, className = '', style, ...rest}: GridProps) => (
  <div style={style} className={`${styles.grid} ${className}`} {...rest}>
    {children}
  </div>
)