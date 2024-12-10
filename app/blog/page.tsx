import Navbar from '../../components/Navbar'

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        {/* Add blog post list or grid here */}
      </div>
    </div>
  )
}

