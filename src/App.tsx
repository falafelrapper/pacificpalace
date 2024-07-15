import { Outlet } from "react-router-dom"
import { useState, useEffect } from "react"
import "./App.scss"
import Header from "./components/Header"

const Animation = () => {
  return (
    <div className="fixed inset-0 -z-10 opacity-0 bg-black flex items-center justify-center text-white font-Arial animate-intro">
      <h1 className="text-9xl font-bold animate-introText">Pacific Palace</h1>
    </div>
  )
}

const checkLastSeen = () => {
  const lastSeen = localStorage.getItem("animationLastSeen")
  if (!lastSeen) return false

  const lastSeenDate = new Date(lastSeen)
  const now = new Date()
  const diff = now.getTime() - lastSeenDate.getTime()
  const diffInHours = diff / (1000 * 60 * 60)

  return diffInHours < 24
}

function App() {
  const [showAnimation, setShowAnimation] = useState(false)

  useEffect(() => {
    if (!checkLastSeen()) {
      setShowAnimation(true)
    }
    localStorage.setItem("animationLastSeen", new Date().toISOString())
  }, [])

  return (
    <>
      <div className="antialiased font-proximaNova">
        {showAnimation && <Animation />}
        <Header />
        <Outlet />
      </div>
    </>
  )
}

export default App
