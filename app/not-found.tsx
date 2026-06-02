import { Laugh } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-8 px-8 py-12">
      <p className="text-display-lg font-medium text-primary tracking-tighter leading-none">
        404
      </p>

      <div className="w-12 h-0.5 bg-accent rounded-full" />

      <h1 className="text-display-md font-medium text-foreground text-center">
        Oops, lost in the gallery!
      </h1>
      <p className="flex flex-col justify-center items-center text-muted-foreground text-center max-w-sm leading-relaxed">
        The student budget for this shop ran out of funding. <br />
        <span>{<Laugh />}</span>
        <br />
        Please move along before the professor sees this.
      </p>
    </div>
  );
}
