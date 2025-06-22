const Navbar = () => {
  return (
    <nav className="bg-black text-white text-sm py-2">
      <ul className="flex justify-center gap-6">
        <li className="hover:text-gray-400 cursor-pointer">Apple</li>
        <li className="hover:text-gray-400 cursor-pointer">Mac</li>
        <li className="hover:text-gray-400 cursor-pointer">iPad</li>
        <li className="hover:text-gray-400 cursor-pointer">iPhone</li>
        <li className="hover:text-gray-400 cursor-pointer">Watch</li>
        <li className="hover:text-gray-400 cursor-pointer">AirPods</li>
        <li className="hover:text-gray-400 cursor-pointer">TV & Home</li>
        <li className="hover:text-gray-400 cursor-pointer">Support</li>
      </ul>
    </nav>
  );
};

export default Navbar;
