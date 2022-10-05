import Header from "./Header";
import Fotter from "./Fotter";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main> {children}</main>
      <Fotter />
    </>
  );
};
export default Layout;
