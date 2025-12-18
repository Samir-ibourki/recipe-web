import { Link, Outlet, useLocation } from "react-router-dom";

export default function AdminLayout() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-8 border-b border-gray-100">
          <Link to="/" className="text-2xl font-bold flex items-center gap-2 text-gray-900">
            <span className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center text-sm">RW</span>
            RecipeWeb
          </Link>
        </div>

        <nav className="flex-1 p-6 space-y-2">
          <Link
            to="/admin"
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
              isActive("/admin")
                ? "bg-black text-white shadow-lg shadow-black/20"
                : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
            }`}
          >
            <i className="fa-solid fa-grid-2"></i>
            <span className="font-medium">Dashboard</span>
          </Link>

          <Link
            to="/admin/create"
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
              isActive("/admin/create")
                ? "bg-black text-white shadow-lg shadow-black/20"
                : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
            }`}
          >
            <i className="fa-solid fa-plus-circle"></i>
            <span className="font-medium">Add Recipe</span>
          </Link>
        </nav>

        <div className="p-6 border-t border-gray-100">
          <div className="flex items-center gap-3 px-4 py-3">
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
               <i className="fa-solid fa-user text-gray-500"></i>
            </div>
            <div>
               <p className="font-bold text-sm text-gray-900">Admin User</p>
               <p className="text-xs text-gray-500">admin@recipeweb.com</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto p-8 lg:p-12">
        <Outlet />
      </main>
    </div>
  );
}
