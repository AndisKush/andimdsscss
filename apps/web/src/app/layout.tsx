import type { Metadata } from "next";
import StyledComponentsRegistry from "../../lib/registry";
import { OrionProvider } from "@andisds/ui";

export const metadata: Metadata = {
  title: "Orion DS Consumer",
  description: "App consumindo Orion Design System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <OrionProvider>
            {children}
          </OrionProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
