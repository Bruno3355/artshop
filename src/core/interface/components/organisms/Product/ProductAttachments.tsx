import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FileX } from "lucide-react";
import Link from "next/link";

export default function ProductAttachments({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={className} {...props}>
      <div className="rounded-t-md bg-muted border px-container-x py-container-y-sm mt-section-y md:my-container-y gap-container-y flex flex-col">
        <div className="font-medium underline">Attachments</div>
        <Separator />
        <div className="flex justify-start gap-container-x">
          <FileX color="#878787" />
          <span className="text-primary/50">No files available yet</span>
        </div>
      </div>

      <div className="rounded-b-md bg-muted border flex justify-between items-center my-container-y px-container-x py-container-y-sm">
        <span className="font-medium">Need help?</span>
        <Link href={"/contact"}>
          <Button
            variant={"outline"}
            className="hover:bg-accent hover:text-accent-foreground"
          >
            Contact us
          </Button>
        </Link>
      </div>
    </div>
  );
}
