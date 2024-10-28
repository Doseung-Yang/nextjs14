import Navigator from "../components/navigation";

export const metadata = {
  title: "about 페이지",
  description: "about 페이지",
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
