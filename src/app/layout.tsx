export const metadata = {
  title: "Vie",
  description: "The official website of the Vie&tm; board game.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
