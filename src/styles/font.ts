import localFont from "next/font/local";

export const libre = localFont({
  src: [
    {
      path: "../../public/fonts/LibreBaskerville-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/LibreBaskerville-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/LibreBaskerville-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-libre-baskerville",
  display: "swap",
});

export const lobster = localFont({
  src: [
    {
      path: "../../public/fonts/Lobster-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-lobster",
  display: "swap",
});
