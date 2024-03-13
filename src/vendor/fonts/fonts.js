import localFont from "next/font/local";

const inter = localFont({
  src: [
    {
      path: "./inter-400-regular.woff2",
      weight: "400",
    },
    { path: "./inter-500.woff2", weight: "500" },
  ],
  variable: "--font-inter",
  fallback: ["system-ui", "Arial"],
});

const roboto = localFont({
  src: [
    {
      path: "./roboto-400-regular.woff2",
      weight: "400",
    },
    { path: "./roboto-500.woff2", weight: "500" },
    { path: "./roboto-700.woff2", weight: "700" },
    { path: "./roboto-900.woff2", weight: "900" },
  ],
  variable: "--font-roboto",
  fallback: ["system-ui", "Arial"],
});

const roboto_slab = localFont({
  src: [
    {
      path: "./roboto-slab-400-regular.woff2",
      weight: "400",
    },
    { path: "./roboto-slab-700.woff2", weight: "700" },
  ],
  variable: "--font-roboto-slab",
  fallback: ["system-ui", "Arial"],
});

export { inter, roboto, roboto_slab };
