import { createContext, useEffect, useState } from "react"
import { getLocalStorage } from "../utils/LocalStorage"
import { initializeLocalStorage } from "../utils/LocalStorage"

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    // localStorage.clear()
    initializeLocalStorage() 
    const { employee, admin } = getLocalStorage()
    if (employee && admin) {
      setUserData({ employee, admin })
    }
  }, [])

  return <AuthContext.Provider value={{ userData, setUserData }}>{children}</AuthContext.Provider>
}

export default AuthProvider

