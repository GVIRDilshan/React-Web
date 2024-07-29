import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");

    // State variables for error messages
    const [usernameError, setUsernameError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [emailError, setEmailError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if(!usernameError && !confirmPasswordError && !emailError) {
            try {
                const response = await axios.post("http://localhost:8000/api/users/register", {
                    username: username,
                    email: email,
                    password: password,
                    telephone
                });
                
                if(response.status === 200) {
                    toast.success("User registered successfully!");
                }
                
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <div className="flex items-center justify-center ">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <div className="form-group mb-4">
                    <label className="block text-gray-700 mb-2">Username</label>
                    <input
                        type="text"
                        id="username"
                        className="form-control w-full p-2 border border-gray-300 rounded"
                        onChange={(e) => setUsername(e.target.value)}
                        onBlur={() => {
                            if (username.length < 6) {
                                setUsernameError("Username cannot be blank, and it must be longer than 6 characters");
                            } else {
                                setUsernameError("");
                            }
                        }}
                    />
                    {usernameError &&
                        <div className="text-red-500 text-sm mt-2">
                            {usernameError}
                        </div>
                    }
                </div>

                <div className="form-group mb-4">
                    <label className="block text-gray-700 mb-2">Password</label>
                    <input
                        type="password"
                        id="password"
                        className="form-control w-full p-2 border border-gray-300 rounded"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="form-group mb-4">
                    <label className="block text-gray-700 mb-2">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        className="form-control w-full p-2 border border-gray-300 rounded"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        onBlur={() => {
                            if (password !== confirmPassword) {
                                setConfirmPasswordError("Password and confirm password are not matching")
                            } else {
                                setConfirmPasswordError("");
                            }
                        }}
                    />
                    {confirmPasswordError &&
                        <div className="text-red-500 text-sm mt-2">
                            {confirmPasswordError}
                        </div>
                    }
                </div>

                <div className="form-group mb-4">
                    <label className="block text-gray-700 mb-2">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="form-control w-full p-2 border border-gray-300 rounded"
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={() => {
                            // Regex to validate email
                            const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

                            if (email.length === 0) {
                                setEmailError("Email address cannot be blank");
                            } else if (!regex.test(email)) {
                                setEmailError("Please enter a valid email address");
                            } else {
                                setEmailError("");
                            }
                        }}
                    />
                    {emailError &&
                        <div className="text-red-500 text-sm mt-2">
                            {emailError}
                        </div>
                    }
                </div>

                <div className="form-group mb-4">
                    <label className="block text-gray-700 mb-2">Telephone</label>
                    <input
                        type="text"
                        id="telephone"
                        className="form-control w-full p-2 border border-gray-300 rounded"
                        onChange={(e) => setTelephone(e.target.value)}
                    />
                </div>

                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700">
                    Sign Up
                </button>
            </form>
        </div>
    );
}

export default Register;
