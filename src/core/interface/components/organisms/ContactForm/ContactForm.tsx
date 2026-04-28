"use client";

import { Button } from "@/components/ui/button";
import {
  contactFormSchema,
  ContactFormValues,
} from "@/src/schemas/inputsSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function ContactForm() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(_data: ContactFormValues) {
    toast.success("Message sent!", {
      description: "Thank you for contacting us.",
    });
    form.reset();
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex flex-col h-full w-full justify-between"
    >
      <FieldSet className="flex-1 flex flex-col">
        <FieldGroup className="flex-1 flex flex-col">
          <Controller
            name="fullName"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="name">Full name</FieldLabel>
                <Input
                  {...field}
                  id="name"
                  autoComplete="off"
                  placeholder="Your name goes here"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          ></Controller>

          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  {...field}
                  type="email"
                  id="email"
                  autoComplete="off"
                  placeholder="Your email goes here"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          ></Controller>

          <Controller
            name="subject"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field>
                <FieldLabel htmlFor="subject" data-invalid={fieldState.invalid}>
                  Subject
                </FieldLabel>
                <Input
                  {...field}
                  id="subject"
                  autoComplete="off"
                  placeholder="How can we help?"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          ></Controller>

          <Controller
            name="message"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field
                data-invalid={fieldState.invalid}
                className="flex-1 flex flex-col"
              >
                <FieldLabel htmlFor="message">Message</FieldLabel>
                <Textarea
                  {...field}
                  id="message"
                  placeholder="Type your message here."
                  className="flex-1 resize-none"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          ></Controller>
        </FieldGroup>
      </FieldSet>

      <Field orientation="horizontal" className="flex justify-end gap-4 pt-4">
        <Button type="submit" fullWidth>
          Submit
        </Button>
      </Field>
    </form>
  );
}
