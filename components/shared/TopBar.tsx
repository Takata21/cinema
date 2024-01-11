import Image from "next/image"
import Link from "next/link"

export function TopBar() {
  return (
    <section className="t-navbar topbar h-[53px] p-2 xl:hidden flex justify-center items-center ">
      <Link href="/" className="flex justify-center items-center w-max">
        <Image src="/logo.png" alt="logo" width={34} height={34} />
        <span className="capitalize font-bold">cinema</span>
      </Link>
    </section>
  )
}
