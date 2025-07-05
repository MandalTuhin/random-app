// client-theme-provider.js
"use client";

import { ThemeProvider } from "next-themes";

export default function ClientThemeProvider({ children }) {
  return (
    <ThemeProvider attribute="class" enableSystem={true} defaultTheme="system">
      {children}
    </ThemeProvider>
  );
}
