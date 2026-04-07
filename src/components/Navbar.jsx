function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800">MyApp</h1>

        <div className="flex items-center gap-6 text-gray-600 font-medium">
          <a href="#" className="hover:text-black transition">Home</a>
          <a href="#" className="hover:text-black transition">About</a>
          <a href="#" className="hover:text-black transition">Contact</a>
        </div>

        <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
          Login
        </button>
      </div>
    </nav>
  )
}

export default Navbar