const Header = () => (
  <div className="flex items-center justify-between px-6 py-4 [background-color:oklch(43.8%_0.218_303.724)] shadow">
    <p className="text-xl font-bold text-white">VIT FOOD FINDER</p>
    <ul className="flex gap-4">
      <li>
        <button className="px-4 py-2 text-white rounded-full [background-color:#B069DB] hover:[background-color:#8a4bb6] transition">
          Sign In
        </button>
      </li>
      <li>
        <button className="px-4 py-2 text-white rounded-full [background-color:#B069DB] hover:[background-color:#8a4bb6] transition">
          About Us
        </button>
      </li>
    </ul>
  </div>
);

export default Header;
