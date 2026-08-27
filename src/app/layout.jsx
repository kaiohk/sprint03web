import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <script
        src="https://kit.fontawesome.com/b522bdfe69.js"
        crossOrigin="anonymous"
        async
      ></script>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
