import { useState } from 'react'
import Hero from './components/Hero'
import CoffeForm from './components/CoffeForm'
import Layout from './components/Layout'
import Stats from './components/Stats'
import History from './components/History'
import { useAuth } from './context/AuthContext'
import { coffeeConsumptionHistory } from './utils'

function App() {
  const {globalUser,globalData,isLoading} = useAuth()
  const isAuthenticated = globalUser
  const isData = globalData && !!Object.keys(globalData || {}).length
  const authenticatedContent = (
    <>
      <Stats/>
      <History/>
    </>
  )
  return (
    <Layout>
      <Hero/>
      <CoffeForm isAuthenticated={isAuthenticated}/>
      {(isAuthenticated && isLoading) && (
        <p>Loading data...</p>
      )}
      {(isAuthenticated && isData) && (authenticatedContent)}
    </Layout>
  )
}

export default App
