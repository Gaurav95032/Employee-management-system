import React, { useState } from "react"

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    handleLogin(email, password)
    console.log("Login button clicked")
    console.log("Email : ", email)
    console.log("password : ", password)
  }

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-gradient-to-br from-red-100 to-red-200">
      <div className="bg-white p-12 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-red-600 mb-8 text-center">Login</h2>
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-6 w-full">
          <div className="space-y-2">
            <label htmlFor="email" className="font-bold text-red-600 w-full text-xl">
              Email
            </label>
            <input
              required
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="outline-none border-2 border-red-300 rounded-lg px-3 py-2 w-full text-black focus:border-red-500 transition duration-300"
              type="email"
              placeholder="Enter your Email"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="font-bold text-red-600 w-full text-xl">
              Password
            </label>
            <input
              required
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="outline-none border-2 border-red-300 rounded-lg px-3 py-2 w-full text-black focus:border-red-500 transition duration-300"
              type="password"
              placeholder="Enter your Password"
            />
          </div>
          <button
            type="submit"
            className="bg-red-600 text-white px-10 py-3 rounded-lg hover:bg-red-700 transition duration-300 shadow-md text-lg font-semibold"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login

