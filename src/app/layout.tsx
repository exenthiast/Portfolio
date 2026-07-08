import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import LoadingScreen from "@/components/LoadingScreen";
import MouseGlow from "@/components/MouseGlow";
import { ThemeProvider } from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Destaz | Portfolio",
  description: "A beautiful, premium developer portfolio showcasing creative designs and projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${outfit.variable} antialiased selection:bg-violet-500/30 selection:text-white`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <LoadingScreen />
          <MouseGlow />
          {/* Soft glowing ambient backgrounds */}
          <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-violet-600/10 blur-[120px] animate-pulse-slow" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-600/10 blur-[120px] animate-pulse-slow" style={{ animationDelay: "-2s" }} />
            <div className="absolute top-[40%] left-[60%] w-[40%] h-[40%] rounded-full bg-rose-600/5 blur-[150px] animate-pulse-slow" style={{ animationDelay: "-4s" }} />
          </div>
          {children}
          
          {/* Floating Theme Switcher */}
          <div className="fixed bottom-6 right-6 z-50">
            <ThemeToggle />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
