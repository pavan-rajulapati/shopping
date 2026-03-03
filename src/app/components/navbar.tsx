import { IoCartOutline } from "react-icons/io5";
import { Input } from "@/components/ui/input";
import { IoFilterOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import Image from "next/image";

export default function Navbar() {
    return (
        <div>
            <nav>
                <div className="py-2 flex flex-col gap-4">
                    <div className="flex justify-between">

                        {/* User Details Section  */}
                        <div>
                            <div className="flex gap-x-2 items-center">
                                <div>
                                    <Image src={"/media/avatar.png"} alt="avathar" width={35} height={35} className="bg-accent rounded-full"></Image>
                                </div>
                                <div >
                                    <b><span>Hi, Pavan</span></b>
                                    <p className="text-[12px]">Welcome to justNow</p>
                                </div>
                            </div>
                        </div>

                        {/* Cart Section  */}
                        <div className="bg-accent p-2 rounded-full relative">
                            <IoCartOutline size={24}/>
                            <span className="absolute top-0 right-[-2] w-5 h-5 text-sm bg-primary text-background rounded-full flex items-center justify-center">
                                2
                            </span>
                        </div>
                    </div>

                    {/* Search Bar Section  */}
                    <div className="flex justify-between items-center gap-x-4">
                        <div className="bg-accent flex items-center border rounded-full px-2 focus-within:border-primary transition-colors">
                            <Input
                                placeholder="Search"
                                className="border-none outline-none ring-0 focus:ring-0 focus-visible:ring-0 focus-visible:outline-none shadow-none"
                            />

                            <span className="bg-primary text-background p-1 rounded-full">
                                <CiSearch size={20} />
                            </span>
                        </div>

                        {/* Filter Section */}
                        <div className="bg-accent p-2 rounded-full">
                            <IoFilterOutline size={24} />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
