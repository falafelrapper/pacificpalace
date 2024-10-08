import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faInstagram,
  faItunesNote,
  faSpotify,
  faTiktok,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons"
import { Link } from "react-router-dom"
import { useState } from "react"

const Navbar = () => {
  const [isSocialHovered, setIsSocialHovered] = useState(false)
  const [isListenHovered, setIsListenHovered] = useState(false)

  return (
    <>
      <div className="hidden lg:flex text-white">
        <Link to="/bio" className="mx-3 link-hover">
          Bio
        </Link>
        <Link to="/#tour" className="mx-3 link-hover">
          Shows
        </Link>
        <Link className="mx-3 link-hover" to="/#videos">
          Videos
        </Link>
        <Link className="mx-3 link-hover" to="/#contact">
          Contact
        </Link>

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
              href="https://www.instagram.com/pacific.palaceee"
              target="_blank"
            >
              <FontAwesomeIcon
                className="ease-in-out duration-100 mx-3 text-2xl hover:text-gray-500"
                icon={faInstagram}
              />
            </a>
            <a
              className={`my-2 ${
                isSocialHovered ? "opacity-100" : "opacity-0"
              }`}
              href="https://x.com/pacificpalaceee"
              target="_blank"
            >
              <FontAwesomeIcon
                className="ease-in-out duration-100 mx-3 text-2xl hover:text-gray-500"
                icon={faTwitter}
              />
            </a>
            <a
              className={`my-2 ${
                isSocialHovered ? "opacity-100" : "opacity-0"
              }`}
              href="https://www.tiktok.com/@pacificpalaceee"
              target="_blank"
            >
              <FontAwesomeIcon
                className="ease-in-out duration-100 mx-3 text-2xl hover:text-gray-500"
                icon={faTiktok}
              />
            </a>
            <a
              className={`my-2 ${
                isSocialHovered ? "opacity-100" : "opacity-0"
              }`}
              href="https://www.facebook.com/pacificpalaceee"
              target="_blank"
            >
              <FontAwesomeIcon
                className="ease-in-out duration-100 mx-3 text-2xl hover:text-gray-500"
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
              target="_blank"
            >
              <FontAwesomeIcon
                className="ease-in-out duration-100 mx-3 text-2xl hover:text-gray-500"
                icon={faItunesNote}
              />
            </a>
            <a
              className={`my-2 ${
                isListenHovered ? "opacity-100" : "opacity-0"
              }`}
              href="https://open.spotify.com/artist/5rBKJhlJI8u3OFwglQGjcU?si=1G7RSXJfRtqAR-JUoClCeA&utm_medium=share&utm_source=linktree"
              target="_blank"
            >
              <FontAwesomeIcon
                className="ease-in-out duration-100 mx-3 text-2xl hover:text-gray-500"
                icon={faSpotify}
              />
            </a>
            <a
              className={`my-2 ${
                isListenHovered ? "opacity-100" : "opacity-0"
              }`}
              href="https://music.youtube.com/channel/UCX93xoLnJ93LvB9Ykm4zCYA"
              target="_blank"
            >
              <FontAwesomeIcon
                className="ease-in-out duration-100 mx-3 text-2xl hover:text-gray-500"
                icon={faYoutube}
              />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
