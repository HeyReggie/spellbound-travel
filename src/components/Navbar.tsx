import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0">
      <nav className="bg-black px-7">
        <ul className="flex flex-row justify-between items-center text-white">
          <li>Trips</li>
          <li>Experiences</li>
          <li>Destinations</li>
          <Image
            src="/images/logo-crop.png"
            alt="Spellbound logo white text on black background"
            width={312}
            height={60}
          />
          <li>City Guides</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
