import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link className="text-xl font-bold underline" href="/users">
        Facebook Team Members
      </Link>
    </main>
  );
}
