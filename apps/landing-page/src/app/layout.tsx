import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MOMENTKITA BALI",
  description: "Website Official Momentkita Bali",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <head>
        <meta
          property="og:image"
          content="https://assets.vercel.com/image/upload/contentful/image/e5382hct74si/4JmubmYDJnFtstwHbaZPev/23caf8c05363419bb2b94c6c53299cb0/og-dark.png"
        />
      </head>
      <html lang="en">
        <body>{children}</body>
      </html>
    </>
  );
}
