import { Metadata } from "next";
import Navigator from "./components/navigation";
import "../styles/global.css";
export const metadata: Metadata = {
  title: "안녕 개발자",
  description: "Test Home",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigator />
        {children}
      </body>
    </html>
  );
}
