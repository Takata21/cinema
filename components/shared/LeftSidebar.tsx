"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { sidebarLinks } from "@/constant/index"
export function LeftSidebar() {
  const pathname = usePathname()
  return (
    <section className="sticky left-0 top-0 z-20 xl:flex h-screen w-fit flex-col justify-between pb-5 hidden bg-background-secondary py-5">
      <div className="flex w-full flex-1 flex-col gap-5 px-3">
        <Link href="/" className="flex flex-col justify-center items-center">
          <Image src="/logo.png" alt="logo" width={34} height={34} />
          <p className="capitalize font-bold">Cinema</p>
        </Link>
        {sidebarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route
          return (
            <Link
              key={link.label}
              className={`relative flex items-center gap-4 rounded-lg p-4 text-gray-500 group hover:bg-[#333333] ${
                isActive && "bg-[#333333] font-bold text-white "
              }`}
              href={link.route}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={24}
                height={24}
                className="h-6 w-6"
              />
              <span className="hidden md:block group-hover:text-[#fefefe]   text-nowrap">
                {link.label}
              </span>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
