import Sidebar from "@/components/common/Sidebar";
import Navbar from "@/components/common/navbar";

interface Props {
  children?: React.ReactNode;
}

export default function UserLayout({ children }: Props) {
  return (
    <div className="flex">
      {/* sidebar */}
      <Sidebar />

      <div className="flex flex-col w-full">
        {/* bar */}
        <Navbar />

        {/* content */}
        <main>{children}</main>
      </div>
    </div>
  );
}
