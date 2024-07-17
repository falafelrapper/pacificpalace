import { faX, faBars } from "@fortawesome/free-solid-svg-icons"
import { Transition } from "@headlessui/react"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faInstagram,
  faItunesNote,
  faSpotify,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons"

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeId, setActiveId] = useState<number | null>(null)

  const handleClose = () => {
    setIsOpen(false)
    setActiveId(0)
  }

  return (
    <>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="z-50 flex fixed top-0 right-0 items-center p-3 text-black hover:text-gray-700"
        >
          <div className="relative w-6 h-6">
            <div className="absolute inset-0 flex items-center justify-center">
              <Transition
                show={!isOpen}
                enter="transition-opacity duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <FontAwesomeIcon
                  icon={faBars}
                  className="h-6 w-6 text-white ease-in-out duration-100 hover:text-gray-500"
                  aria-hidden="true"
                />
              </Transition>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Transition
                show={isOpen}
                enter="transition-opacity duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <FontAwesomeIcon
                  icon={faX}
                  className="h-6 w-6 text-white ease-in-out duration-100 hover:text-gray-500"
                  aria-hidden="true"
                />
              </Transition>
            </div>
          </div>
        </button>
      </div>
      <Transition
        show={isOpen}
        enter="transition duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition duration-200 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
        as="div"
        className="fixed inset-0 bg-black z-40"
      >
        <div className="text-center mx-auto">
          <div className="text-4xl flex w-screen h-screen items-center justify-center flex-col">
            <div className="flex w-screen items-center justify-center flex-col">
              <a
                className="ease-in-out duration-100 my-2 border-b-transparent border-b-2 text-white hover:text-gray-500"
                href="#tour"
                onClick={handleClose}
              >
                Tours
              </a>
              <a
                className="ease-in-out duration-100 my-2 border-b-transparent border-b-2 text-white hover:text-gray-500"
                href="#videos"
                onClick={handleClose}
              >
                Videos
              </a>
              <div className="relative">
                <div className="ease-in-out duration-100 my-2 border-b-2 border-b-transparent text-white role-nav hover:text-gray-500">
                  <span
                    className="cursor-pointer "
                    onClick={() => setActiveId(1)}
                  >
                    Socials
                  </span>
                </div>

                <div
                  className={`mt-2 bg-black text-white mobile-hidden text-5xl ${
                    activeId === 1 ? "employee-nav-mobile" : ""
                  }`}
                >
                  <a
                    className={`my-2`}
                    href="https://www.instagram.com/pacific.palaceee/"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      className="ease-in-out duration-100 my-4 mx-7 hover:text-gray-900"
                      icon={faInstagram}
                    />
                  </a>
                  <a
                    className={`my-2`}
                    href="https://www.tiktok.com/@pacificpalaceee"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      className="ease-in-out duration-100 my-4 mx-7 hover:text-gray-900"
                      icon={faTiktok}
                    />
                  </a>
                  <a
                    className={`my-2`}
                    href="https://www.facebook.com/pacificpalaceee"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      className="ease-in-out duration-100 my-4 mx-7 hover:text-gray-900"
                      icon={faFacebook}
                    />
                  </a>
                </div>
                <div className="ease-in-out duration-100 my-2 border-b-2 border-b-transparent text-white role-nav hover:text-gray-500">
                  <span
                    className="cursor-pointer "
                    onClick={() => setActiveId(2)}
                  >
                    Listen
                  </span>
                </div>

                <div
                  className={`mt-2 bg-black text-white mobile-hidden text-5xl ${
                    activeId === 2 ? "employee-nav-mobile" : ""
                  }`}
                >
                  <a
                    className={`my-2`}
                    href="https://open.spotify.com/artist/5rBKJhlJI8u3OFwglQGjcU?si=1G7RSXJfRtqAR-JUoClCeA&utm_medium=share&utm_source=linktree"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      className="ease-in-out duration-100 mx-7 my-4 hover:text-gray-900"
                      icon={faSpotify}
                    />
                  </a>
                  <a
                    className={`my-2`}
                    href="https://music.apple.com/us/artist/pacific-palace/1570737065"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      className="ease-in-out duration-100 mx-7 my-4 hover:text-gray-900"
                      icon={faItunesNote}
                    />
                  </a>
                  <a
                    className={`my-2`}
                    href="https://music.youtube.com/channel/UCX93xoLnJ93LvB9Ykm4zCYA"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      className="ease-in-out duration-100 mx-7 my-4 hover:text-gray-900"
                      icon={faYoutube}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </>
  )
}

export default MobileNav
