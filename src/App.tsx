import { Outlet, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import "./App.scss"
import Header from "./components/Header"

const Animation = () => {
  return (
    <div className="fixed inset-0 -z-10 opacity-0 bg-black flex items-center justify-center text-white font-arial animate-intro">
      <h1 className="text-9xl font-bold animate-introText text-center font-skorzhen">
        Pacific Palace
      </h1>
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

const ScrollToHashElement = () => {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1))
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }, [location])

  return null
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
    <div className="font-proximaNova">
      {showAnimation && <Animation />}
      <ScrollToHashElement />
      <Header />
      <Outlet />
    </div>
  )
}

export default App
