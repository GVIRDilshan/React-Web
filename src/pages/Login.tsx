import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../utils/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const { login } = useAuth();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:8000/api/users/login", {
                email: email,
                password: password 
            })

            console.log(response.data);            

            if(response.status === 200) {
                login(response.data.token);
                toast.success("Authenticated successfully");
                navigate("/");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="flex flex-col items-center justify-center ">
          <h1 className="text-4xl font-bold mb-8 text-gray-900">Login</h1>
          <form onSubmit={handleLogin} className="bg-white p-6 rounded-lg shadow-lg w-80">
            <div className="form-group mb-4">
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                className="form-control w-full p-2 border border-gray-300 rounded"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
    
            <div className="form-group mb-4">
              <label className="block text-gray-700 mb-2">Password</label>
              <input
                type="password"
                className="form-control w-full p-2 border border-gray-300 rounded"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
    
            <button type="submit" className="btn btn-primary w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700">
              Login
            </button>
          </form>
        </div>
      );
}

export default Login;