export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: "sans-serif",
          background: "#0b0b10",
          color: "white",
        }}
      >
        {children}
      </body>
    </html>
  );
}
