import { Lora } from "next/font/google";
import "./globals.css";

const lora = Lora({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata = {
  title: "Home | Book River",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lora.className}>
        <div className="bg-gray-100 min-h-screen px-5 lg:px-0">{children}</div>
      </body>
    </html>
  );
}
