const Footer = () => {
  return (
    <footer className="bg-[#f5f5f7] text-gray-600 text-sm py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <p className="mb-2">Copyright © {new Date().getFullYear()} Apple Inc. All rights reserved.</p>
        <div className="flex flex-wrap gap-4">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Use</a>
          <a href="#" className="hover:underline">Sales and Refunds</a>
          <a href="#" className="hover:underline">Legal</a>
          <a href="#" className="hover:underline">Site Map</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
