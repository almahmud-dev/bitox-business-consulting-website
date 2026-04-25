import FooterTwo from "@/components/layout/FooterTwo";
import NavbarTwo from "@/components/layout/NavbarTwo";

export default function Layout({ children }) {
  return (
    <>
      <NavbarTwo />
      <main className="pt-25">{children}</main>
      <FooterTwo/>
    </>
  );
}
