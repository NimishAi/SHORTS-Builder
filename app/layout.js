import { Outfit } from "next/font/google";
import "./globals.css";
import ConvexClientProvider from "./ConvexClientProvider";

const outFit = Outfit({
  subsets: ["latin"],
});

export const metadata = {
  title: "Candidate Screener Agent",
  description: "Candidate Screener Agent",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning="true" className="dark" style={{colorScheme:"dark"}}>
      <body
        className={`${outFit.className}`}
      >
        <ConvexClientProvider>
          {children}
        </ConvexClientProvider>
      </body>
    </html>
  );
}
