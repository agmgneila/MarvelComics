import Navbar from './components/Navbar';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Marvel Comics</title>
        <meta name="description" content="Explora los cómics de Marvel" />
      </head>
      <body className="font-sans bg-black text-white">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
