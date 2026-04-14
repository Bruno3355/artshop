import React from "react"

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
      className?: string;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="mx-auto max-w-(--container-max) w-full px-4">
        {children}
    </div>
  )
}
