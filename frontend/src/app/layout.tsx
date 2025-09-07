import "./globals.css";
import { Metadata } from "next";
import { Providers } from "./Providers";
import Header from "components/header/Header";

export const metadata: Metadata = {
  title: {
    template: "%s | BI Event Search",
    default: "BI Event Search",
  },
  description: "BI Event Search",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="no">
      <body
        id="__next"
        style={{ backgroundColor: "#FFFFFF" }}
        className="h-full"
      >
        <Providers>
          <Header /> <div id="modal-root">{children}</div>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
