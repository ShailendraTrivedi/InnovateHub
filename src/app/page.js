import { MainSection, SideNavbar } from "@/components";

export default function Home() {
  return (
    <div className="w-[1440px] mx-auto min-h-screen">
      <div className="w-full grid mobile:grid-cols-4 grid-cols-3">
        {/* Side navbar */}
        <SideNavbar />
        <MainSection />
      </div>
    </div>
  );
}
