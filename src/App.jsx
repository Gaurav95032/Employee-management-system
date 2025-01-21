import { useContext, useEffect, useState } from "react"
import Login from "./components/auth/Login"
import EmployeeDashboard from "./components/dashboard/EmployeeDashboard"
import AdminDashboard from "./components/dashboard/AdminDashboard"
import { AuthContext } from "./context/AuthProvider"

const App = () => {
  const [user, setUser] = useState(null)
  const [loggedInUser, setLoggedInUser] = useState(null)
  const { userData } = useContext(AuthContext)

  useEffect(() => {
    const loggedInUserData = localStorage.getItem("loggedInUser")
    if (loggedInUserData) {
      const parsedData = JSON.parse(loggedInUserData)
      setUser(parsedData.role)
      setLoggedInUser(parsedData.data)
    }
  }, [])

  const handleLogin = (email, password) => {
    if (userData?.admin && userData.admin.find((e) => e.email === email && e.password === password)) {
      setUser("admin")
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin", data: null }))
    } else if (userData?.employee) {
      const employee = userData.employee.find((e) => e.email === email && e.password === password)
      if (employee) {
        setUser("employee")
        setLoggedInUser(employee)
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee", data: employee }))
      }
    } else {
      alert("Invalid Credentials")
    }
  }

  const handleLogout = () => {
    setUser(null)
    setLoggedInUser(null)
    localStorage.removeItem("loggedInUser")
  }

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === "admin" ? (
        <AdminDashboard data={userData} handleLogout={handleLogout} />
      ) : user === "employee" ? (
        <EmployeeDashboard data={loggedInUser} handleLogout={handleLogout} />
      ) : null}
    </>
  )
}

export default App

