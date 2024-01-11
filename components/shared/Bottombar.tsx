"use client"
import { sidebarLinks } from "@/constant"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Bottombar() {
  const pathname = usePathname()
  return (
    <section className="bottombar">
      <div className="bottombar_container">
        {sidebarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route

          return (
            <Link
              href={link.route}
              key={link.label}
              className={`bottombar_link p-2 rounded-sm ${
                isActive && "bg-[#333333] font-bold text-white "
              }`}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={24}
                height={24}
                className="object-contain"
              />

              <p className="text-subtle-medium text-light-1 max-sm:hidden">
                {link.label.split(/\s+/)[0]}
              </p>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
