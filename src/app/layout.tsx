import AuthLayout from "@/components/layout/AuthLayout";
import type { Metadata } from "next";
import {Montserrat} from "next/font/google";

const montserrat = Montserrat({
  display: "swap",
  subsets:["latin"],
  weight:["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

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
      <body className={montserrat.className} id="root">
        <AuthLayout>
          {children}
        </AuthLayout>
      </body>
    </html>
  );
}