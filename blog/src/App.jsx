import { NavLink, Outlet } from "react-router";

function App() {
  const getNavClass = ({ isActive }) => {
    return `retro-button ${isActive ? 'bg-orange-600' : 'bg-gray-600'}`
  }

  return (
    <div className='min-h-screen bg-gray-100'>
      <nav className="retro-container sticky top-4 z-10 mx-4 my-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <div className="retro-knob"></div>
              <NavLink to="/me" className={getNavClass}>me</NavLink>
              <NavLink to="/component" className={getNavClass}>组件库</NavLink>
              <NavLink to="/3D" className={getNavClass}>3D</NavLink>
              <NavLink to="/WebGIS" className={getNavClass}>WebGIS</NavLink>
            </div>
          </div>
        </div>
      </nav>
      <main className="container mx-auto px-4 py-6">
        <div className="retro-screen">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default App
