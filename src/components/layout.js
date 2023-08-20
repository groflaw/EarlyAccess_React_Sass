import Header from "./common/header";
import Footer from "./common/footer";

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
