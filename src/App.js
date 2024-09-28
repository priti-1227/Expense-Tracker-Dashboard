import React from 'react'
import SideBar from './components/SideBar'

import { ChakraProvider, Flex } from '@chakra-ui/react'
import Main from './components/Main'
import Layout from './components/Layout'
import { ExpenseProvider } from './context/ExpenseProvider'
import Login from './components/Login'
import { AuthProvider } from './context/AuthContext'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <AuthProvider>
            <ExpenseProvider>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route
                  path="/main"
                  element={
                    <PrivateRoute>
                      <Main />
                    </PrivateRoute>
                  }
                />
                <Route path="*" element={<Login />} />
              </Routes>
            </ExpenseProvider>
          </AuthProvider>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
