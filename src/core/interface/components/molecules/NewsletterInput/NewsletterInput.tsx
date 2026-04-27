"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { contactFormSchema } from "@/src/schemas/inputsSchemas";
import z from "zod";

import React from "react";
import { Field, FieldError, FieldSet } from "@/components/ui/field";

export default function NewsletterInput({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const newsletterSchema = contactFormSchema.pick({
    email: true,
  });
  type NewsletterFormValues = z.infer<typeof newsletterSchema>;

  const newsletterForm = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (_data: NewsletterFormValues) => {
    toast.success("Subscription confirmed", {
      description:
        "If this was a real project, you’ll be the first to know about our newest items.",
    });
  };

  return (
    <form
      className={cn("flex", className)}
      {...props}
      onSubmit={newsletterForm.handleSubmit(onSubmit)}
    >
      <Controller
        name="email"
        control={newsletterForm.control}
        render={({ field, fieldState }) => (
          <FieldSet>
            <Field data-invalid={fieldState.invalid}>
              <Input
                {...field}
                type="email"
                placeholder="youremail@email.com"
                className="rounded-none 3xs md:w-92 h-12"
              />
              {fieldState.invalid && (
                <FieldError errors={[fieldState.error]}></FieldError>
              )}
            </Field>
          </FieldSet>
        )}
      ></Controller>

      <Button type="submit" className={"rounded-none h-12 border-none"}>
        Subscribe
      </Button>
    </form>
  );
}
