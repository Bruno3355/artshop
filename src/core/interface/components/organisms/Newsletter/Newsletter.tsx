import SeparatorDiamond from "../../atoms/Resources/SeparatorDiamond";
import NewsletterInput from "../../molecules/NewsletterInput/NewsletterInput";

export default function Newsletter() {
  return (
    <div className="flex flex-col justify-center items-center">
      <SeparatorDiamond />
      <h2 className="text-display-lg font-bold">Receive our news</h2>
      <p className="text-body-lg font-light tracking-wide">
        Don't miss any exclusive pieces — sign up for our newsletter
      </p>
      <NewsletterInput className="py-container-y" />
    </div>
  );
}
