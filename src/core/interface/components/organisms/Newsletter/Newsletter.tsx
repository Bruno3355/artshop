import { cn } from "@/lib/utils";
import SeparatorDiamond from "../../atoms/Resources/SeparatorDiamond";
import NewsletterInput from "../../molecules/NewsletterInput/NewsletterInput";

export default function Newsletter({ className }: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col justify-center items-center", className)}>
      <SeparatorDiamond />
      <h2 className="text-display-lg font-medium">Receive our news</h2>
      <p className="text-body-lg font-light tracking-wide px-container-x">
        Don't miss any exclusive pieces — sign up for our newsletter
      </p>
      <NewsletterInput className="py-container-y" />
    </div>
  );
}
