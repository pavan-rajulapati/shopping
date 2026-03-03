import Link from "next/link"
import { usePathname } from "next/navigation"

export default function SubNav() {
    const pathName = usePathname()
    const items = [
        { category: "All", href: "/" },
        { category: "Men", href: "/men" },
        { category: "Women", href: "/women" },
        { category: "Kids", href: "/kids" },
        { category: "Pet", href: "/pet" },
    ]
    return (
        <div className="py-3 flex gap-x-4 overflow-auto no-scrollbar">
            {items.map((item) => {
                const isActive = pathName === item.href || (pathName.startsWith(item.href) && item.href !== "/")
                return (
                    <div key={item.category} className="flex">
                        <Link href={item.href} className={`px-4 py-1.5 rounded-2xl text-sm transition-colors
                            ${isActive
                                ? "bg-primary text-primary-foreground"
                                : "bg-accent text-foreground"
                            }`}>
                            <span className="text-sm">{item.category}</span>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}