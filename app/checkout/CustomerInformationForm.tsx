"use client";

import { Button } from "@/components/ui/button";
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
import { useCartStore } from "@/src/hooks/useCartStore";
import { submitOrder } from "./actions";
import { Controller, useForm } from "react-hook-form";
import {
  checkoutFormSchema,
  CheckoutFormValues,
} from "@/src/schemas/inputsSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function CustomerInformationForm() {
  const router = useRouter();
  const items = useCartStore((state) => state.items);
  const total = useCartStore((state) => state.total);
  const clearCart = useCartStore((state) => state.clearCart);

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      fullname: "",
      email: "",
      phoneNumber: "",
      streetAddress: "",
      city: "",
      postalCode: "",
      comments: "",
    },
  });

  async function onSubmit(formData: CheckoutFormValues) {
    if (items.length === 0) {
      toast.warning("Your cart is empty. Add items before placing an order.");
      return;
    }

    try {
      const result = await submitOrder(
        formData,
        items.map((item) => ({
          productId: item.id,
          quantity: item.quantity,
          unitPrice: item.price,
        })),
        total,
      );

      clearCart();
      router.push(`/checkout/confirmation/${result.orderNumber}`);
    } catch (error) {
      toast.error("Something went wrong.");
    }
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FieldGroup>
          <FieldSet>
            <FieldLegend>Customer information</FieldLegend>
            <FieldDescription>
              This is a student project! Do not insert real data.
            </FieldDescription>
            <FieldGroup>
              <Controller
                name="fullname"
                control={control}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel htmlFor="fullname">Full name</FieldLabel>
                    <Input
                      {...field}
                      id="fullname"
                      placeholder="Insert your full name here"
                      required
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                name="email"
                control={control}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel htmlFor="email">E-mail</FieldLabel>
                    <Input
                      {...field}
                      id="email"
                      placeholder="xxxxxxx@xxxxxx.com"
                      type="email"
                      required
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                name="phoneNumber"
                control={control}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel htmlFor="phoneNumber">Phone number</FieldLabel>
                    <Input
                      {...field}
                      id="phoneNumber"
                      placeholder="+xx (xxx) xxx-xxxx"
                      required
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </FieldGroup>
            <FieldSet>
              <FieldLegend>Address Information</FieldLegend>
              <FieldDescription>
                If this was a real project, we would need your address to
                deliver your order.
              </FieldDescription>
              <FieldGroup>
                <Controller
                  name="streetAddress"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field>
                      <FieldLabel htmlFor="streetAddress">
                        Street Address
                      </FieldLabel>
                      <Input
                        {...field}
                        id="streetAddress"
                        type="text"
                        placeholder="123 Main St"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />

                <div className="grid grid-cols-2 gap-4">
                  <Controller
                    name="city"
                    control={control}
                    render={({ field, fieldState }) => (
                      <Field>
                        <FieldLabel htmlFor="city">City</FieldLabel>
                        <Input
                          {...field}
                          id="city"
                          type="text"
                          placeholder="New York"
                        />
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />
                  <Controller
                    name="postalCode"
                    control={control}
                    render={({ field, fieldState }) => (
                      <Field>
                        <FieldLabel htmlFor="postalCode">
                          Postal Code
                        </FieldLabel>
                        <Input
                          {...field}
                          id="postalCode"
                          type="text"
                          placeholder="90502"
                        />
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />
                </div>
              </FieldGroup>
            </FieldSet>
          </FieldSet>
          <FieldSet>
            <FieldGroup>
              <Controller
                name="comments"
                control={control}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel htmlFor="comments">Comments</FieldLabel>
                    <Textarea
                      {...field}
                      id="comments"
                      placeholder="Add any additional comments"
                      className="resize-none"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </FieldGroup>
          </FieldSet>
          <Field orientation="horizontal">
            <Button type="submit" disabled={isSubmitting}>
              Submit
            </Button>
            <Button
              variant="outline"
              type="button"
              onClick={() => router.back()}
            >
              Cancel
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  );
}
