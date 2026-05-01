import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { cormorant, cinzel, jost } from "@/lib/fonts";
import Header from "@/src/core/interface/components/organisms/Header/Header";
import Footer from "@/src/core/interface/components/organisms/Footer/Footer";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "ANTIQUA",
  description: "Antiques and art shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        cinzel.variable,
        jost.variable,
        "font-sans",
      )}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
        <Toaster
          position="top-center"
          closeButton
          duration={4000}
          visibleToasts={2}
          style={{ "--width": "420px" } as React.CSSProperties}
          toastOptions={{
            classNames: {
              toast: " !border !border-zinc-700 !text-accent",
              title: "!font-bold",
              description: "!text-primary",
              actionButton: "!bg-accent",
              cancelButton: "!bg-warning",
              closeButton: "!bg-ring  !text-secondary",
            },
          }}
        />
      </body>
    </html>
  );
}
