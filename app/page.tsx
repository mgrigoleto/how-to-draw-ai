import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>
        <Link href="/drawing">
          Learn how to draw
        </Link>
      </h1>
    </main>
  );
}
