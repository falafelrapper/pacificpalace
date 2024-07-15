import { useEffect } from "react"

const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      const tourElement = document.getElementById("tour") as HTMLElement
      const videosElement = document.getElementById("videos") as HTMLElement
      const tourImageElement = tourElement.querySelector(
        ".cover-img"
      ) as HTMLElement
      const videosImageElement = videosElement.querySelector(
        ".cover-img"
      ) as HTMLElement

      if (
        !tourElement ||
        !videosElement ||
        !tourImageElement ||
        !videosImageElement
      )
        return

      const tourRect = tourElement.getBoundingClientRect()
      const videosRect = videosElement.getBoundingClientRect()

      const isTourVisible =
        tourRect.top < window.innerHeight && tourRect.bottom >= 0
      const isVideosVisible =
        videosRect.top < window.innerHeight && videosRect.bottom >= 0

      if (isTourVisible) {
        const scrollPosition = window.scrollY
        const zoomFactor = 1 + scrollPosition / 8000 // Adjust this factor as needed
        tourImageElement.style.transform = `scale(${zoomFactor})`
      } else {
        tourImageElement.style.transform = "scale(1)"
      }

      if (isVideosVisible) {
        const scrollPosition = window.scrollY
        const zoomFactor = 1 + scrollPosition / 8000 // Adjust this factor as needed
        videosImageElement.style.transform = `scale(${zoomFactor})`
      } else {
        videosImageElement.style.transform = "scale(1)"
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      <div id="cover" className="cover relative z-40">
        <img className="cover-img absolute" src="/img/cover.jpg" alt="Cover" />
      </div>
      <div id="tour" className="cover scroll-section z-30">
        <img
          className="cover-img absolute min-w-full"
          src="/img/james_blue.png"
          alt="Cover"
        />
      </div>
      <div id="videos" className="cover scroll-section relative z-20">
        <img className="cover-img absolute" src="/img/hero.jpg" alt="Cover" />
      </div>
    </>
  )
}

export default Home
