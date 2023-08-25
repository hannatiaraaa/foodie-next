import localFont from "next/font/local";

export const redhat = localFont({
  src: [
    {
      path: "../assets/fonts/RedHatDisplay-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../assets/fonts/RedHatDisplay-BlackItalic.ttf",
      weight: "900",
      style: "italic",
    },
    {
      path: "../assets/fonts/RedHatDisplay-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../assets/fonts/RedHatDisplay-ExtraBoldItalic.ttf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../assets/fonts/RedHatDisplay-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/RedHatDisplay-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../assets/fonts/RedHatDisplay-Semibold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/RedHatDisplay-SemiboldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../assets/fonts/RedHatDisplay-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/RedHatDisplay-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../assets/fonts/RedHatDisplay-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/RedHatDisplay-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../assets/fonts/RedHatDisplay-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/RedHatDisplay-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
  ],
  variable: "--font-redhat",
});
