import { NavLink, Outlet } from "react-router"

function App() {

  return (
    <div className='box-border w-full h-full'>
      <header className="flex items-center gap-3 px-3 h-17 b-b-solid b-b-1 b-b-gray/10 text-lg">
        <NavLink className='' to='/me'>me</NavLink>
        <NavLink className='' to='/component'>{`<component/>`}</NavLink>
        <NavLink className='' to='/webgis'>WebGIS</NavLink>
        <NavLink className='' to='/three'>3D</NavLink>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App
