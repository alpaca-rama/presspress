import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function MainLayout({children}: {children: React.ReactNode}) {
    return (
        <>
            <Navbar/>
            <div className={'flex'}>
                <div className={'hidden md:block h-dvh w-[350px]'}>
                    <Sidebar/>
                </div>
                <div className={'px-5 w-full md:max-w-[1140px]'}>
                    {children}
                </div>
            </div>
        </>
    )
}