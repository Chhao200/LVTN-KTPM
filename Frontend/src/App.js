import axios from 'axios'
import React, { Fragment } from 'react';
import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { routes } from './routes'
import Default from './components/Default/Default';

function App() {
  useEffect(() => {
    fetchApi()
  }, [])
  const fetchApi = async () => {
    const res = axios.get(`http://localhost:3001/api/product/getall`)
    console.log('res', res)
  }
  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route) => {
            const Page = route.page
            const Layout = route.isShowHeader ? Default : Fragment
            return (
              <Route key={route.path} path={route.path} element={
                <Layout>
                  <Page />
                </Layout>
              } />
            )
          })}
          <Route>
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
