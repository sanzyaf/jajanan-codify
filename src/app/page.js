import Link from "next/link";

export default async function Home() {
  return (
  <main>Hey There
    <Link href="/register">
      <p>register</p>
    </Link>
    <Link href="/dashboard">
      <p>dashboard</p>
    </Link>
  </main>
  );
}
