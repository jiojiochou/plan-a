import { NavLink, Outlet } from "react-router";

function App() {
  return (
    <div className='w-100vw h-100vh flex flex-col justify-center items-center'>
      <div className="flex items-center justify-center gap-3 w-100 b-solid b-1 b-gray/40 p-4 py-2 rounded-2 bg-white h-10 mt-10">
        <NavLink to="/home">首页</NavLink>
        <NavLink to="/my">我</NavLink>
        <NavLink to="/about">关于</NavLink>
      </div>
      <div className="flex-1 w-full">
        <Outlet />
      </div>
    </div>
  )
}

export default App
