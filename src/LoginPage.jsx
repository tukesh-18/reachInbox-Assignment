import React,{useEffect} from 'react'
import { useNavigate,Link } from "react-router-dom";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import google from "./assets/google.png";
import axios from "axios";
const LoginPage = () => {

    console.log("compoenet rendered ");
    const navigate = useNavigate();

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get("token");

        axios
            .get("https://hiring.reachinbox.xyz/api/v1/onebox", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then(() => {
                navigate("/");
            })
            .catch(() => {

                navigate("/login");

            });
    }, [navigate]);

    const LoginController = () => {
        window.location.href =
            "https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=http://localhost:5173/";
    }

    return (
        <div>
            <Header />
            <div className="bg-gradient-to-br from-[#0A0A0A] to-[#1E1E1E] text-white flex flex-col justify-center items-center w-full min-h-screen p-4">
                <div className="bg-[#111214] border border-[#2C2E33] w-full max-w-md text-center py-8 px-6 sm:py-10 sm:px-12 rounded-xl shadow-2xl shadow-black/50">
                    {/* Header Section is here */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                            Create a new account
                        </h1>
                        <p className="text-[#A1A1AA] mt-2 text-sm">
                            Join us to get started
                        </p>
                    </div>

                    {/* Google Sign Up Controller Button */}
                    <button
                        className="w-full border border-[#3E4045] hover:border-[#52545A] transition-all duration-200 px-6 py-3 text-sm font-medium flex items-center justify-center text-[#E0E0E0] rounded-lg cursor-pointer mb-6 hover:bg-[#1E1F22] active:scale-[0.98]"
                        onClick={LoginController}
                    >
                        <img src={google} alt="google" className="w-5 h-5 mr-3" />
                        Sign Up with Google
                    </button>

                    <div className="relative flex items-center justify-center mb-6">
                        <div className="absolute h-px w-full bg-[#343A40]"></div>
                        <span className="relative px-3 text-sm text-[#707070] bg-[#111214]">
                            OR
                        </span>
                    </div>

                    {/* Email Sign Up Controller Button */}
                    <div className="mb-8">
                        <Link
                            to="/login"
                            className="block w-full bg-gradient-to-r from-[#4B63DD] to-[#3A4FCC] hover:from-[#5B73ED] hover:to-[#4A5FDC] text-white font-medium text-md py-3 px-6 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-[#4B63DD]/30 active:scale-[0.98]"
                        >
                            Create an Account
                        </Link>
                    </div>

                    {/* Sign In Link */}
                    <div className="text-[#909296] text-sm">
                        Already have an account?{" "}
                        <Link
                            to="/signin"
                            className="text-[#C1C2C5] hover:text-white font-medium transition-colors duration-200"
                        >
                            Sign In
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />


        </div>
    )
}

export default LoginPage
