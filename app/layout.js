import StoryblokProvider from "@/components/StoryblokProvider";
import "./globals.css"; 

export default function RootLayout({ children }) {
  return (
    <StoryblokProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/favicon.ico" />
        </head>
        <body>
          {children}
        </body>
      </html>
    </StoryblokProvider>
  );
}