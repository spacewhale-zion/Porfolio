// src/app/layout.tsx
import './globals.css'; // Make sure this is imported
import Navigation from '@/components/Navigation';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation/>
        {children}
      </body>
    </html>
  );
}