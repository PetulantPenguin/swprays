import Link from 'next/link';

export default function PageNotFound() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div>Sorry. Not found.</div>
      <div>
        <Link href="/">Return home.</Link>
      </div>
    </div>
  );
}
