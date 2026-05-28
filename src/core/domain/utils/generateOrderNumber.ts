export default function generateOrderNumber(): string {
  const date = new Date();
  const datePart =
    date.getFullYear().toString().slice(-2) +
    String(date.getMonth() + 1).padStart(2, "0") +
    String(date.getDay()).padStart(2, "0");
  const randomPart = Math.random().toString(36).slice(2, 6).toUpperCase();

  return `ORDER-${datePart}-${randomPart}`;
}
