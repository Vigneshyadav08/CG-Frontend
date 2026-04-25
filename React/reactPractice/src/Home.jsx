import { Link } from "react-router-dom"

const Home = () => {
  localStorage.setItem('isGranted','false')
  return (
    <div>
      <h2>Welcome Home</h2>

      <Link to="/dashboard">Dashboard</Link>
    </div>
  )
}

export default Home
