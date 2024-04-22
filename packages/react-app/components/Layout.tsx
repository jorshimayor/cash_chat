import { FC, ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Andada_Pro } from "next/font/google";

const andadaPro = Andada_Pro({ subsets: ["latin"], weight: "700" });

export const metadata = {
  title: "CashChat",
  description:
    "This is a decentralized application that allows transfer of funds on the Celo blockchain.",
};

interface Props {
  children: ReactNode;
  children: ReactNode;
}
const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <div
        className={`${andadaPro.className} bg-gypsum overflow-hidden flex flex-col min-h-screen`}
      >
        <Header />
        <div className="py-16 max-w-7xl mx-auto space-y-8 sm:px-6 lg:px-8">
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
