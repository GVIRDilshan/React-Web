import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext'; // Assuming you have an AuthContext for authentication

const Dashboard = () => {
  const { user } = useAuth(); // Assuming useAuth provides the authenticated user

  return (
    <div>
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <nav>
            <Link to="/profile" className="mr-4">Home</Link>
            <Link to="/Register" className="mr-4">Register</Link>
            <Link to="/profile" className="mr-4">Profile</Link>
            <Link to="/settings" className="mr-4">Settings</Link>
            <Link to="/logout">Logout</Link>
          </nav>
        </div>
      </header>
      <main className="flex-grow container mx-auto p-4">
        <h2 className="text-xl font-bold mb-4">Welcome, {user?.username}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Example widgets */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold mb-2">Widget 1</h3>
            <img src="" alt="" />
            <p>Some content for the first widget.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold mb-2">Widget 2</h3>
            <p>Some content for the second widget.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold mb-2">Widget 3</h3>
            <p>Some content for the third widget.</p>
          </div>
        </div>
      </main>
      
    </div>
  );
}

export default Dashboard;
