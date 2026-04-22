import Link from "next/link";
import React from "react";
import SeparatorDiamond from "../../atoms/Resources/SeparatorDiamond";

interface MenuItem {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
}

const FooterData: MenuItem[] = [
  {
    title: "Explore",
    links: [
      { text: "Home", url: "/home" },
      { text: "Product List", url: "/shop" },
      { text: "Contact us", url: "/contactus" },
    ],
  },
  {
    title: "Resources",
    links: [
      { text: "Terms of privacy", url: "/privacy" },
      { text: "Best practices", url: "/practices" },
      { text: "Support", url: "/support" },
      { text: "About", url: "/about" },
    ],
  },
];

export default function Footer() {
  return (
    <div className="flex flex-col gap-container-y px-section-x bg-alternative-background">
      <div className="flex flex-col md:flex-row justify-center py-section-y gap-10 md:gap-0">
        <div className="flex flex-col gap-container-y text-secondary flex-1">
          <Link href={"/"} className="flex justify-start">
            <h1 className="text-3xl font-semibold ">ANTIQUA</h1>
          </Link>
          <p className="max-w-40 text-body-sm tracking-wide font-light">
            Art and rare items curated by experts for those who value what time
            has consecrated.
          </p>
        </div>
        {FooterData.map((element, id) => (
          <div
            key={id}
            className="text-secondary flex-1 flex flex-col gap-container-y justify-center"
          >
            <h3 className="uppercase tracking-wide font-extrabold">
              {element.title}
            </h3>
            <div className="flex flex-col">
              {element.links.map((item, id) => (
                <Link
                  className="text-secondary font-light hover:underline w-fit"
                  href={item.url}
                  key={id}
                >
                  {item.text}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <SeparatorDiamond />
    </div>
  );
}
