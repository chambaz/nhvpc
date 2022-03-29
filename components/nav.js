// eslint-disable-line react-hooks/exhaustive-deps
import { useState, useEffect, useRef } from 'react'
import { throttle } from 'lodash'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoClose } from 'react-icons/io5'
import Image from 'next/image'

const Nav = () => {
  const nav = useRef()
  const [navClasses, setNavClasses] = useState('')
  const [mobileNavActive, setMobileNavActive] = useState(false)

  const navStyle = () => {
    const breakpoint = window.outerWidth >= 768 ? 670 : 325
    if (document.documentElement.scrollTop > breakpoint) {
      setNavClasses(
        'bg-white bg-opacity-90 text-black border-b-2 border-gray-100 shadow-sm'
      )
    } else {
      setNavClasses('text-white')
    }
  }

  const navigateTo = (id) => {
    const target = document.getElementById(id)

    if (!target) {
      return
    }

    setMobileNavActive(false)

    const bounds = target.getBoundingClientRect()

    window.scrollTo(0, document.documentElement.scrollTop + bounds.top - 160)
  }

  useEffect(() => {
    window.addEventListener('scroll', throttle(navStyle, 100))
    navStyle()
  }, [])

  return (
    <>
      <nav
        ref={nav}
        className={`fixed z-20 top-6 transition ${navClasses}`}
        style={{ margin: '0 16px', width: 'calc(100% - 32px)' }}>
        <div className="flex w-full max-w-6xl mx-auto items-center p-4 xl:px-0 font-bold text-lg">
          <a href="#" className="flex items-center text-3xl font-serif">
            <Image src="/img/logo.png" width="50" height="50" />
            <span className="ml-2">NHVPC</span>
          </a>

          <GiHamburgerMenu
            onClick={(e) => {
              e.preventDefault()
              setMobileNavActive(true)
            }}
            className="ml-auto text-2xl lg:hidden cursor-pointer"
          />

          <ul className="ml-auto hidden lg:flex">
            <li className="mx-6 cursor-pointer">
              <a
                onClick={(e) => {
                  e.preventDefault()
                  navigateTo('about')
                }}>
                The Club
              </a>
            </li>
            <li className="mx-6 cursor-pointer">
              <a
                onClick={(e) => {
                  e.preventDefault()
                  navigateTo('benefits')
                }}>
                Member Benefits
              </a>
            </li>
            <li className="mx-6 cursor-pointer">
              <a
                onClick={(e) => {
                  e.preventDefault()
                  navigateTo('partners')
                }}>
                Club Partners
              </a>
            </li>
            <li className="mx-6 mr-0 cursor-pointer">
              <a
                className="py-3 px-5 bg-indigo-500 text-white rounded-md font-bold"
                onClick={(e) => {
                  e.preventDefault()
                  navigateTo('join')
                }}>
                <span className="mr-1">🍕</span> Buy a slice
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div
        className="w-screen h-screen bg-black fixed top-0 z-30"
        style={{ display: mobileNavActive ? 'block' : 'none' }}>
        <a
          href="#"
          className="flex items-center text-3xl font-serif absolute top-10 left-8 text-white font-bold">
          <Image src="/img/logo.png" width="50" height="50" />
          <span className="ml-2">NHVPC</span>
        </a>
        <IoClose
          onClick={(e) => {
            setMobileNavActive(false)
          }}
          className="absolute top-12 right-6 text-4xl text-white cursor-pointer"
        />
        <nav className="w-screen h-screen flex items-center justify-center">
          <ul className="text-white text-center text-4xl font-bold">
            <li className="my-12 cursor-pointer">
              <a
                onClick={(e) => {
                  e.preventDefault()
                  navigateTo('about')
                }}>
                The Club
              </a>
            </li>
            <li className="my-12 cursor-pointer">
              <a
                onClick={(e) => {
                  e.preventDefault()
                  navigateTo('benefits')
                }}>
                Member Benefits
              </a>
            </li>
            <li className="my-12 cursor-pointer">
              <a
                onClick={(e) => {
                  e.preventDefault()
                  navigateTo('partners')
                }}>
                Club Partners
              </a>
            </li>
            <li className="my-12 cursor-pointer">
              <a
                onClick={(e) => {
                  e.preventDefault()
                  navigateTo('join')
                }}>
                Buy a slice
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Nav
