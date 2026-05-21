import FooterOne from "@/components/layout/FooterOne";
import NavbarOne from "@/components/layout/NavbarOne";

const layout = ({ children }) => {
  return (
    <>
      <NavbarOne />
      <main className="bg-bg-secondaryOne">{children}</main>
      <FooterOne />
    </>
  );
};

export default layout;
