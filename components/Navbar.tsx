import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 backdrop-blur-md bg-white/30 border-b border-beige/20">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          竜牙
        </Link>
        <div className="space-x-6">
          <Link href="/about" className="hover:text-gray-300 transition-colors">About Me</Link>
          <Link href="/projects" className="hover:text-gray-300 transition-colors">Projects</Link>
          <Link href="/blog" className="hover:text-gray-300 transition-colors">Blog</Link>
          <Link href="/contact" className="hover:text-gray-300 transition-colors">Contact Me</Link>
        </div>
        <div className="text-sm">EST - 2024</div>
      </div>
    </nav>
  )
}

