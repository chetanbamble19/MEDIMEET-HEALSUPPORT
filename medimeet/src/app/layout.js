import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { dark } from "@clerk/themes";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "../components/header"; // adjust based on your file structure



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MEDIMEET HELP",
  description: "Connect With Doctors Anytime Anywhere",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {/* header */}
            <Header />

            <main className="min-h-screen">{children}</main>

            {/* footer */}
            <footer className="bg-muted/50 py-12">
              <div className="container mx-auto px-4 text-center text-black-300">
                <p>Made with Love By Chetan Bamble</p>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
