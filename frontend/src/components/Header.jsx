import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  // Don't show this header on admin pages since they have their own layout
  if (isAdmin) return null;

  return (
    <header className="w-full max-w-[95vw] mx-auto py-8 flex justify-between items-center">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold font-serif italic text-black no-underline">
        RecipeWeb
      </Link>

      {/* Navigation */}
      <nav>
        <ul className="flex items-center gap-12">
          <li>
            <Link to="/" className="text-black font-medium hover:text-gray-600 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link to="/" className="text-black font-medium hover:text-gray-600 transition-colors">
              Recipes
            </Link>
          </li>
           <li>
            <Link to="/admin" className="text-black font-medium hover:text-gray-600 transition-colors flex items-center gap-2">
              Dashboard
              <span className="bg-black text-white text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider">Admin</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
