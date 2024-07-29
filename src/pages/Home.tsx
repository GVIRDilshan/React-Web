import { Link } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";

const Home = () => {

    const { user } = useAuth();

    return (
        <div>
            <main className="flex-grow container mx-auto p-4">
                <h2 className="text-xl font-bold mb-4">Welcome, {user?.username}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Example widgets */}
                    <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-100 transition-shadow transition-colors duration-300">
                        <h3 className="text-lg font-bold mb-2">Widget 1</h3>
                        <img src="src/assets/Img/maxresdefault.jpg" alt="" />
                        <p>Some content for the first widget.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-100 transition-shadow transition-colors duration-300">
                        <h3 className="text-lg font-bold mb-2">Widget 2</h3>
                        <img src="src/assets/Img/maxresdefault.jpg" alt="" />
                        <p>Some content for the second widget.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-100 transition-shadow transition-colors duration-300">
                        <h3 className="text-lg font-bold mb-2">Widget 3</h3>
                        <img src="src/assets/Img/maxresdefault.jpg" alt="" />
                        <p>Some content for the third widget.</p>
                    </div>
                </div>
            </main>
        </div>
    )    
}

export default Home;