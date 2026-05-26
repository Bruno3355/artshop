import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";
import { useCartStore } from "@/src/hooks/useCartStore";
import { submitOrder } from "./actions";

export function CustomerInformationForm() {
  const items = useCartStore((state) => state.items);
  const total = useCartStore((state) => state.total);

  async function handleSubmit(formData: FormData) {
    await submitOrder(
      formData,
      items.map((item) => ({
        productId: item.id,
        quantity: item.quantity,
        unitPrice: item.price,
      })),
      total,
    );
  }

  return (
    <div className="w-full">
      <form action={handleSubmit}>
        <FieldGroup>
          <FieldSet>
            <FieldLegend>Customer information</FieldLegend>
            <FieldDescription>
              This is a student project! Do not insert real data.
            </FieldDescription>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="full-name">Full name</FieldLabel>
                <Input
                  id="full-name"
                  name="full-name"
                  placeholder="Insert your full name here"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="e-mail">E-mail</FieldLabel>
                <Input
                  id="e-mail"
                  name="e-mail"
                  placeholder="xxxxxxx@xxxxxx.com"
                  type="email"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="phone">Phone number</FieldLabel>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="+xx (xxx) xxx-xxxx"
                  required
                />
              </Field>
            </FieldGroup>
            <FieldSet>
              <FieldLegend>Address Information</FieldLegend>
              <FieldDescription>
                If this was a real project, we would need your address to
                deliver your order.
              </FieldDescription>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="street">Street Address</FieldLabel>
                  <Input
                    id="street"
                    name="street"
                    type="text"
                    placeholder="123 Main St"
                  />
                </Field>
                <div className="grid grid-cols-2 gap-4">
                  <Field>
                    <FieldLabel htmlFor="city">City</FieldLabel>
                    <Input
                      id="city"
                      name="city"
                      type="text"
                      placeholder="New York"
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="zip">Postal Code</FieldLabel>
                    <Input
                      id="zip"
                      name="zip"
                      type="text"
                      placeholder="90502"
                    />
                  </Field>
                </div>
              </FieldGroup>
            </FieldSet>
          </FieldSet>
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="notes">Comments</FieldLabel>
                <Textarea
                  id="notes"
                  name="notes"
                  placeholder="Add any additional comments"
                  className="resize-none"
                />
              </Field>
            </FieldGroup>
          </FieldSet>
          <Field orientation="horizontal">
            <Button type="submit">Submit</Button>
            <Button variant="outline" type="button">
              Cancel
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  );
}
