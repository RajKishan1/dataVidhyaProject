import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube, Twitter } from "lucide-react";
import { Inter, Poppins } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function Footer() {
  return (
    <footer className="w-full border-t pb-20 pt-6">
      <div className="container px-4 md:px-6">
        <div className="-ml-4  flex justify-start">
          <div className="flex items-center gap-2">
            <div className=" ">
              <img src="/blue-logo.png" alt="" className="size-[75px]" />
            </div>
            <span
              className={`-ml-5 text-xl font-semibold text-[#333333] ${poppins.className}`}
            >
              Data Vidhya
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between sm:flex-row">
          <div
            className={`flex items-center gap-6 gap-y-2 text-sm sm:mb-0 ${inter.className}`}
          >
            <span className="text-[14px] text-[#333333] underline">
              © 2025 Your Company. All rights reserved.
            </span>
            <Link
              href="/privacy-policy"
              className="text-[14px] text-[#333333] underline"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-[14px] text-[#333333] underline"
            >
              Terms of Service
            </Link>
            <button className="text-[14px] text-[#333333] underline">
              Cookies Settings
            </button>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="https://facebook.com"
              aria-label="Facebook"
              className=""
            >
              <Facebook className="size-5" />
            </Link>
            <Link
              href="https://instagram.com"
              aria-label="Instagram"
              className=""
            >
              <Instagram className="size-5" />
            </Link>
            <Link href="https://twitter.com" aria-label="Twitter" className="">
              <Twitter className="size-5" />
            </Link>
            <Link
              href="https://linkedin.com"
              aria-label="LinkedIn"
              className=""
            >
              <Linkedin className="size-5" />
            </Link>
            <Link href="https://youtube.com" aria-label="YouTube" className="">
              <Youtube className="size-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}