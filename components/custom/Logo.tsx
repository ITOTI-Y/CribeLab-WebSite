"use client";

import Image from "next/image";
import Link from "next/link";

const apiUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

export default function Logo() {
  return (
    <div className="flex items-center">
      <Link href="/" className="flex items-center">
        <Image
          src={`${apiUrl}/wp-content/uploads/2025/04/LOGO.svg`}
          alt="CRIBE Lab Logo"
          width={32}
          height={32}
          className="h-8 w-8"
        />

        <span className="ml-2 text-xl font-roboto text-white font-bold">
          CRIBE Lab
        </span>
      </Link>
    </div>
  );
}
