import Head from 'next/head'
import Image from 'next/image'
import Nav from '../components/nav'
import About from '../components/about'
import Benefits from '../components/benefits'
import Partners from '../components/partners'
import Join from '../components/join'

export default function Home() {
  return (
    <div>
      <Head>
        <title>New Haven Pizza Club (NHVPC)</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className="bg-purple-200 fixed z-20 w-full py-2 text-white text-center font-bold banner"
        style={{
          background: 'linear-gradient(135deg, #CB5EEE 0%, #4BE1EC 100%)',
        }}>
        Pizza is in the oven, club opens soon.
      </div>

      <Nav />

      <main>
        <div
          className="fixed z-0 top-0 w-full bg-cover shadow-inner bg-center masthead"
          style={{
            backgroundImage: 'url(/img/masthead.jpg)',
          }}></div>

        <div className="bg-white relative z-10 px-4 content pb-5">
          <div className="max-w-6xl mx-auto pt-16 leading-loose text-gray-500 text-center">
            <About />
            <Benefits />
            <Partners />
            <Join />
          </div>
        </div>
      </main>

      <footer className="w-full py-6 px-4 border-t-2 border-gray-100 text-xs">
        <div className="flex max-w-6xl mx-auto">
          <p className="font-bold mr-auto flex items-center">
            <Image src="/img/logo.png" width="20" height="20" />
            <span className="ml-1">NHVPC</span>
          </p>
          <p>&copy; New Haven Pizza Club, 2022</p>
        </div>
      </footer>
    </div>
  )
}
