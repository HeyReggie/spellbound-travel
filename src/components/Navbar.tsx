import Image from "next/image";
import cropLogo from "../../public/images/logo-crop.png";

export default function Navbar() {
  return (
    <header className="sticky top-0">
      <nav className="bg-black">
        <ul className="flex flex-row h-20 justify-between items-center text-white">
          <div className="px-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <li className="hidden lg:block">Trips</li>
          <li className="hidden lg:block">Experiences</li>
          <li className="hidden lg:block">Destinations</li>
          <Image
            src={cropLogo}
            alt="Spellbound logo white text on black background"
            height={65}
            width={338}
          />
          <li className="hidden lg:block">City Guides</li>
          <li className="hidden lg:block">Blog</li>
          <li className="hidden lg:block">Contact</li>
          <div className="px-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
        </ul>
      </nav>
    </header>
  );
}
