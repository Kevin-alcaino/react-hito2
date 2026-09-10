import { Link } from 'react-router-dom'

function HomePages() {
  return (
    <div className="home-container">
      <h1>Welcome to the Home Page</h1>
      <p>This is the main landing page of our application.</p>
      <Link to="/home" className="nav-link">Go to Home Page</Link>
    </div>
  );
}
export default HomePages;