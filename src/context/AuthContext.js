import React, { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
export const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const navigate = useNavigate()
  const login = (credentials) => {
    if (
      credentials.email === 'test@123.com' &&
      credentials.password === '123@priti'
    ) {
      setIsAuthenticated(true)
      navigate('/main')
    }
  }

  const logout = () => {
    setIsAuthenticated(false)
    navigate('/login')
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
