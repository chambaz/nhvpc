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
    const breakpoint = window.outerWidth >= 768 ? 630 : 325
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
        className={`fixed z-20 top-10 w-full transition ${navClasses}`}>
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
            className="ml-auto text-2xl md:hidden cursor-pointer"
          />

          <ul className="ml-auto hidden md:flex">
            <li className="mx-6 cursor-pointer">
              <a
                onClick={(e) => {
                  e.preventDefault()
                  navigateTo('about')
                }}>
                About
              </a>
            </li>
            <li className="mx-6 cursor-pointer">
              <a
                onClick={(e) => {
                  e.preventDefault()
                  navigateTo('benefits')
                }}>
                Benefits
              </a>
            </li>
            <li className="mx-6 cursor-pointer">
              <a
                onClick={(e) => {
                  e.preventDefault()
                  navigateTo('partners')
                }}>
                Partners
              </a>
            </li>
            <li className="mx-6 mr-0 cursor-pointer">
              <a
                onClick={(e) => {
                  e.preventDefault()
                  navigateTo('buy')
                }}>
                🍕 Buy a slice
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
          className="flex items-center text-3xl font-serif absolute top-10 left-5 text-white">
          <Image src="/img/logo.png" width="50" height="50" />
          <span className="ml-2">NHVPC</span>
        </a>
        <IoClose
          onClick={(e) => {
            setMobileNavActive(false)
          }}
          className="absolute top-11 right-5 text-5xl text-white cursor-pointer"
        />
        <nav className="w-screen h-screen flex items-center justify-center">
          <ul className="text-white text-center text-4xl">
            <li className="my-12 cursor-pointer">
              <a
                onClick={(e) => {
                  e.preventDefault()
                  navigateTo('about')
                }}>
                About
              </a>
            </li>
            <li className="my-12 cursor-pointer">
              <a
                onClick={(e) => {
                  e.preventDefault()
                  navigateTo('benefits')
                }}>
                Benefits
              </a>
            </li>
            <li className="my-12 cursor-pointer">
              <a
                onClick={(e) => {
                  e.preventDefault()
                  navigateTo('partners')
                }}>
                Partners
              </a>
            </li>
            <li className="my-12 cursor-pointer">
              <a
                onClick={(e) => {
                  e.preventDefault()
                  navigateTo('buy')
                }}>
                🍕 Buy a slice
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Nav
