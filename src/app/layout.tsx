import type { Metadata } from "next";
import {Inter} from "next/font/google";

const inter = Inter({subsets : ["latin"]});

export const metadata: Metadata = {
  title: "Medconet Africa",
  description: "Your premier destination where buyers and sellers of medical devices and accessories unite for seamless transactions.",
  icons: {
    icon: 'icon/favicon2.ico'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
