import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

export default function Signin(){
    return(
        <div className="min-h-screen bg-white">
    
        {/* Signin Form */}
        <section className="py-16">
          <div className="container mx-auto max-w-md bg-white shadow-lg shadow-pink-200 rounded-md p-8">
            <h3 className="text-2xl font-bold mb-8">Sign ln</h3>
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  className="w-full border rounded px-3 py-2 focus:ring focus:ring-yellow-300"
                  placeholder="Name"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  className="w-full border rounded px-3 py-2 focus:ring focus:ring-yellow-300"
                  placeholder="Email"
                />
              </div>
              <div className="mb-4">

                <input
                  type="password"
                  className="w-full border rounded px-3 py-2 focus:ring focus:ring-yellow-300"
                  placeholder="Password"
                />
              </div>
              <div className="flex items-center mb-4">
                <input type="checkbox" className="mr-2" />
                <span>Remember me?</span>
              </div>
              <button
                type="submit"
                className="w-full bg-[#FF9F0D] hover:bg-[#e4890b] text-white py-2 rounded"
              >
                Sign Up
              </button>
              <p className="text-center mt-4">
                <Link href="/forgot-password" className="text-slate-500 flex justify-end">Forgot password?</Link>
              </p>
            </form>
            <div className="text-center mt-8">
              <p className="text-slate-800 text-xl">OR</p>
              <button className="w-full bg-gray-100 border text-black py-2 rounded mt-2 flex items-center justify-center gap-2">
              <FcGoogle size={24}/>
              <p>Sign up with Google</p>
              </button>
              <button className="w-full bg-gray-100 border text-black py-2 rounded mt-2 flex items-center justify-center gap-3">
                <FaApple size={24}/>
                <p>Sign up with Apple</p>
              </button>
            </div>
          </div>
        </section>
  
       
      </div>
    )
}