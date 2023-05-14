import Link from 'next/link';

export default function PageNotFound() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div>Sorry. Not found.</div>
      <div><Link href="/">Return home.</Link></div>
    </div>
  )
}
