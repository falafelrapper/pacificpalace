import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faInstagram,
  faItunesNote,
  faSpotify,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons"
import { useState } from "react"

const Header = () => {
  const [isSocialHovered, setIsSocialHovered] = useState(false)
  const [isListenHovered, setIsListenHovered] = useState(false)

  return (
    <div className="absolute font-arial z-50 flex justify-between px-4 mt-3 w-full">
      <h1 className="text-5xl select-none">Pacific Palace</h1>

      <nav className="text-2xl flex items-center">
        <a href="#tour" className="mx-3 link-hover">
          Tour
        </a>
        <a className="mx-3 link-hover" href="#videos">
          Videos
        </a>

        <div
          className="flex items-center mx-3 relative"
          onMouseEnter={() => setIsSocialHovered(true)}
          onMouseLeave={() => setIsSocialHovered(false)}
        >
          <a className="cursor-pointer">Socials</a>

          <div
            className={`absolute flex flex-col top-10 left-6 social-links ${
              isSocialHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <a
              className={`my-2 ${
                isSocialHovered ? "opacity-100" : "opacity-0"
              }`}
              href="https://www.instagram.com/pacific.palaceee/"
            >
              <FontAwesomeIcon
                className="ease-in-out duration-100 mx-3 text-2xl hover:text-gray-900"
                icon={faInstagram}
              />
            </a>
            <a
              className={`my-2 ${
                isSocialHovered ? "opacity-100" : "opacity-0"
              }`}
              href="https://www.tiktok.com/@pacificpalaceee"
            >
              <FontAwesomeIcon
                className="ease-in-out duration-100 mx-3 text-2xl hover:text-gray-900"
                icon={faTiktok}
              />
            </a>
            <a
              className={`my-2 ${
                isSocialHovered ? "opacity-100" : "opacity-0"
              }`}
              href="https://www.facebook.com/pacificpalaceee"
            >
              <FontAwesomeIcon
                className="ease-in-out duration-100 mx-3 text-2xl hover:text-gray-900"
                icon={faFacebook}
              />
            </a>
          </div>
        </div>
        <div
          className="flex items-center mx-3 relative"
          onMouseEnter={() => setIsListenHovered(true)}
          onMouseLeave={() => setIsListenHovered(false)}
        >
          <a className="cursor-pointer">Listen</a>

          <div
            className={`absolute flex flex-col top-10 left-6 social-links ${
              isListenHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <a
              className={`my-2 ${
                isListenHovered ? "opacity-100" : "opacity-0"
              }`}
              href="https://music.apple.com/us/artist/pacific-palace/1570737065"
            >
              <FontAwesomeIcon
                className="ease-in-out duration-100 mx-3 text-2xl hover:text-gray-900"
                icon={faItunesNote}
              />
            </a>
            <a
              className={`my-2 ${
                isListenHovered ? "opacity-100" : "opacity-0"
              }`}
              href="https://open.spotify.com/artist/5rBKJhlJI8u3OFwglQGjcU?si=1G7RSXJfRtqAR-JUoClCeA&utm_medium=share&utm_source=linktree"
            >
              <FontAwesomeIcon
                className="ease-in-out duration-100 mx-3 text-2xl hover:text-gray-900"
                icon={faSpotify}
              />
            </a>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
