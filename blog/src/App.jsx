import { NavLink, Outlet } from "react-router";

function App() {
  const getNavClass = ({ isActive }) => {
    return `px-4 py-2 rounded-lg transition-colors ${isActive 
      ? 'bg-blue-500 text-white' 
      : 'text-gray-600 hover:bg-gray-100'}`
  }

  return (
    <div className='min-h-screen bg-gray-50'>
      <nav className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold text-blue-600">我的博客</div>
            <div className="flex items-center gap-2">
              <NavLink to="/home" className={getNavClass}>首页</NavLink>
              <NavLink to="/my" className={getNavClass}>我的</NavLink>
              <NavLink to="/about" className={getNavClass}>关于</NavLink>
            </div>
          </div>
        </div>
      </nav>
      <main className="container mx-auto px-4 py-6">
        <Outlet />
      </main>
    </div>
  )
}

export default App
