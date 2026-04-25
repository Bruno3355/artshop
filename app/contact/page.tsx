"use client";

import { Button } from "@/components/ui/button";
import * as z from "zod";
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
import { Col } from "@/src/core/interface/components/atoms/Col/Col";
import { toast } from "sonner";
import { Grid } from "@/src/core/interface/components/atoms/Grid/Grid";
import Image from "next/image";

const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters.")
    .max(50, "Full name must be at most 50 characters."),

  email: z.email({ message: "Please enter a valid email address." }),

  subject: z
    .string()
    .min(5, "Subject must be at least 5 characters.")
    .max(100, "Subject must be at most 100 characters."),

  message: z
    .string()
    .min(10, "Message must be at least 10 characters.")
    .max(1000, "Message is too long. Please keep it under 1000 characters."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(data: ContactFormValues) {
    toast.success("Message sent!", {
      description: "Thank you for contacting us.",
    });
    form.reset();
  }

  return (
    <div className="flex flex-1 justify-center items-center py-section-y px-section-x">
      <Grid className="p-section-y border-2 border-alternative-background rounded-2xl max-w-7xl mx-auto gap-0!">
        <Col xs={"full"} md={6} className="flex justify-center">
          <Image
            alt="Flower Still Life with a Timepiece. Creator: Willem van Aelst. Date: 1663. Institution: Mauritshuis."
            src={"/heropainting.jpg"}
            width={800}
            height={1200}
            loading="eager"
            className="w-full h-auto max-h-170 max-w-md object-contain"
          />
        </Col>
        <Col
          xs={"full"}
          md={6}
          className="flex justify-center gap-container-y md:justify-start flex-col px-container-x pt-container-y md:pt-0"
        >
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FieldSet>
              <FieldLegend>
                <h2 className="text-display-md font-extrabold">Contact Us</h2>
              </FieldLegend>
              <FieldDescription>
                Questions about services or pricing? We've got you covered.
                Contact us today.
              </FieldDescription>
              <FieldGroup>
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
                      <FieldLabel
                        htmlFor="subject"
                        data-invalid={fieldState.invalid}
                      >
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
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="message">Message</FieldLabel>
                      <Textarea
                        {...field}
                        id="message"
                        placeholder="Type your message here."
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                ></Controller>

                <Field orientation="horizontal">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => form.reset()}
                  >
                    Reset
                  </Button>
                  <Button type="submit">Submit</Button>
                </Field>
              </FieldGroup>
            </FieldSet>
          </form>
        </Col>
      </Grid>
    </div>
  );
}
