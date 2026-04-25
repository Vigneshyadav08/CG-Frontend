import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
        <Link to={'user/1'}>User 1</Link> | {""}
        <Link to={'user/2'}>User 2</Link> | {""}
        <Link to={'user/3'}>User 3</Link> | {""}
        <hr/>
        <Outlet/>
    </div>
  )
}

export default Dashboard
