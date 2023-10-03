import type { Metadata } from "next";

import "~/styles/globals.css";

import { siteConfig } from "~/config/site";
import { montserrat } from "~/lib/fonts";
import { cn } from "~/lib/utils";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [],
  authors: [{ name: "iboughtbed", url: "https://github.com/iboughtbed" }],
  creator: "iboughtbed",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background antialiased",
          montserrat.className,
        )}
      >
        {children}
      </body>
    </html>
  );
}
