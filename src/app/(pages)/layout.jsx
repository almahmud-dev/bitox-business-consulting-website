import FooterOne from "@/components/layout/FooterOne";
import BusinessFooterSection from "@/components/layout/FooterTwo";
import NavbarOne from "@/components/layout/NavbarOne";
import NavbarTwo from "@/components/layout/NavbarTwo";
import { cookies } from "next/headers";

export default async function Layout({ children }) {
  const cookieStore = await cookies();

  const getLayoutPath =
    cookieStore.get("pathname")?.value || "business-consultant";

    
    const isConsulting = getLayoutPath === "consulting-agency";
   
    
  return (
    <>
      {isConsulting ? <NavbarTwo /> : <NavbarOne />}
      {children}
      {isConsulting ? <BusinessFooterSection /> : <FooterOne />}
    </>
  );
}
