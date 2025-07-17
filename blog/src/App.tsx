import { NavLink, Outlet } from "react-router"

function App() {

  return (
    <div className='box-border'>
      <header className="flex items-center gap-3 px-3 h-17 b-b-solid b-b-1 b-b-gray/10 text-lg">
        <NavLink className='' to='/me'>me</NavLink>
        <NavLink className='' to='/component'>{`<component/>`}</NavLink>
        <NavLink className='' to='/WebGIS'>WebGIS</NavLink>
        <NavLink className='' to='/3D'>3D</NavLink>
      </header>
      <Outlet />
    </div>
  )
}

export default App
