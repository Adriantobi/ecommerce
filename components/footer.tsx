import { ArrowRightIcon, GlobeIcon, InstagramIcon } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <>
      <div className="flex flex-col w-full items-center border-t border-t-white border-opacity-15 mt-12">
        <div className="!max-w-4xl w-full">
          <span className="flex flex-col items-center mt-9 gap-5">
            <h3>Support Us</h3>
            <ul className="flex gap-5">
              <li className="text-sm text-white text-opacity-65 hover:underline cursor-pointer">
                Contact Us
              </li>
              <li className="text-sm text-white text-opacity-65 hover:underline cursor-pointer">
                FAQ
              </li>
              <li className="text-sm text-white text-opacity-65 hover:underline cursor-pointer">
                Terms of service
              </li>
              <li className="text-sm text-white text-opacity-65 hover:underline cursor-pointer">
                Privacy Policy
              </li>
              <li className="text-sm text-white text-opacity-65 hover:underline cursor-pointer">
                Shipping Policy
              </li>
            </ul>
          </span>
          <span className="flex justify-between mt-9 items-center">
            <div className="flex gap-3.5 flex-col">
              <h3>Subsribe to our emails</h3>
              <div className="w-[360px] mt-2 flex items-center border border-zinc-900 relative group overflow-hidden">
                <input
                  type="text"
                  placeholder="Email"
                  className="bg-transparent px-4 py-2 w-full outline-none focus-within:translate-y-2 z-10 transition-transform"
                />
                <label
                  htmlFor="email"
                  className="cursor-pointer absolute p-4 group-focus-within:text-xs group-focus-within:-translate-y-2 transition-transform"
                >
                  Email
                </label>
                <ArrowRightIcon
                  size={20}
                  strokeWidth={1}
                  className="mr-4 cursor-pointer"
                />
              </div>
            </div>
            <div className="flex">
              <Link href="https://instagram.com/adrian.td" className="p-3">
                <InstagramIcon size={20} strokeWidth={1} />
              </Link>
              <Link href="https://adriantd.com" className="p-3">
                <GlobeIcon size={20} strokeWidth={1} />
              </Link>
            </div>
          </span>
        </div>
      </div>

      <div className="flex flex-col w-full items-center border-t border-t-white border-opacity-15 my-12 pt-12">
        <div className="!max-w-4xl w-full flex justify-between items-center">
          <span className="flex flex-col gap-4">
            <label className="text-xs">Country/region</label>
            <select className="bg-transparent text-white text-opacity-65 outline-none border border-zinc-900 px-4 py-2">
              <option>United States (USD $)</option>
              <option>Canada</option>
              <option>United Kingdom</option>
            </select>
          </span>
          <span className="text-xs">
            © 2024, coolname.{" "}
            <Link
              href="https://adriantd.com"
              className="text-inherit hover:underline"
            >
              Powered by AdrianTD
            </Link>
          </span>
        </div>
      </div>
    </>
  );
}
