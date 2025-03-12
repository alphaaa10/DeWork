import Navbar from "@/components/navbar"

export default function RootGroupLayout({ children }) {
    return (
      <main className="font-work-sans">

        <Navbar/>
        {children}
      </main>
    );
  }