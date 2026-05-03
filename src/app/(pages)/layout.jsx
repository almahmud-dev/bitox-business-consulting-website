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
  console.log(getLayoutPath);

  return (
    <>
      {isConsulting ? <NavbarTwo /> : <NavbarOne />}
      <main className="bg-bg-secondaryOne">{children}</main>
      {isConsulting ? <BusinessFooterSection /> : <FooterOne />}
    </>
  );
}
