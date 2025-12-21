import type { Metadata } from "next";
import { APP_DESCRIPTION, APP_NAME } from "@/lib/constants";
import "@/assets/styles/globals.css";
import "@progress/kendo-theme-bootstrap/dist/all.css";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";

export const metadata: Metadata = {
  title: `${APP_NAME}`,
  description: `${APP_DESCRIPTION}`,
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="flex-center min-h-screen w-full">{children}</div>;
}
