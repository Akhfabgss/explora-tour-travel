import "./globals.css";

export const metadata = {
  title: "Explora Tour & Travel",
  description: "Find Perfect Hotels Anywhere",
  icons: {
    icon: "/logo-web.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  );
}
