import { ReactNode } from "react";
import Navbar from "@src/components/layout/navbar";
import Footer from "@src/components/layout/footer";
import MetaHead from "@src/components/layout/meta-head";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <MetaHead />
      <nav>
        <Navbar />
      </nav>
      <main>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
