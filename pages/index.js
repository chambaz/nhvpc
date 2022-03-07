import Head from 'next/head'
import Image from 'next/image'
import Nav from '../components/nav'

export default function Home() {
  return (
    <div>
      <Head>
        <title>New Haven Pizza Club (NHVPC)</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className="bg-purple-200 fixed z-20 top-0 w-full py-2 text-white text-center font-bold"
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
            <div id="about" className="max-w-4xl mx-auto mb-36 space-y-8">
              <h2 className="text-4xl font-bold font-serif my-6 text-black">
                About NHVPC
              </h2>
              <p className="max-w-2xl mx-auto">
                New Haven Pizza Club is a members-only club for residents of New
                Haven, CT. 4338 unique NFT's will be available to mint for
                access to the club. Members will benefit from exclusive deals
                with our partners, local businesses, and a tight-knit community
                New Haven's best.
              </p>
            </div>

            <div id="benefits" className="mb-36 space-y-16">
              <h2 className="text-4xl font-bold font-serif my-6 text-black">
                Member Benefits
              </h2>

              <div className="space-y-36">
                <div className="flex flex-col items-center md:flex-row text-left">
                  <img
                    src="/img/sample.jpg"
                    alt=""
                    className="w-full md:w-1/2"
                  />
                  <div className="space-y-4 md:ml-10 text-center md:text-left">
                    <h3 className="text-2xl mt-6 md:mt-0 font-bold font-serif text-black">
                      Mint 4338 unique NFTs
                    </h3>
                    <p>
                      Officia in minim pariatur ea officia velit et
                      reprehenderit laborum. Deserunt sit duis aliqua incididunt
                      proident proident proident do do labore. Voluptate
                      reprehenderit in ea minim voluptate cupidatat non officia
                      mollit aute minim Lorem veniam.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center md:flex-row-reverse text-left">
                  <img
                    src="https://via.placeholder.com/600x400"
                    alt=""
                    className="w-full md:w-1/2"
                  />
                  <div className="space-y-4 md:mr-10 text-center md:text-left">
                    <h3 className="text-2xl mt-6 md:mt-0 font-bold font-serif text-black">
                      Exclusive deals with local businesses
                    </h3>
                    <p>
                      Officia in minim pariatur ea officia velit et
                      reprehenderit laborum. Deserunt sit duis aliqua incididunt
                      proident proident proident do do labore. Voluptate
                      reprehenderit in ea minim voluptate cupidatat non officia
                      mollit aute minim Lorem veniam.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center md:flex-row text-left">
                  <img
                    src="https://via.placeholder.com/600x400"
                    alt=""
                    className="w-full md:w-1/2"
                  />
                  <div className="space-y-4 md:ml-10 text-center md:text-left">
                    <h3 className="text-2xl mt-6 md:mt-0 font-bold font-serif text-black">
                      Community meet-ups and events
                    </h3>
                    <p>
                      Officia in minim pariatur ea officia velit et
                      reprehenderit laborum. Deserunt sit duis aliqua incididunt
                      proident proident proident do do labore. Voluptate
                      reprehenderit in ea minim voluptate cupidatat non officia
                      mollit aute minim Lorem veniam.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center md:flex-row-reverse text-left">
                  <img
                    src="https://via.placeholder.com/600x400"
                    alt=""
                    className="w-full md:w-1/2"
                  />
                  <div className="space-y-4 md:mr-10 text-center md:text-left">
                    <h3 className="text-2xl mt-6 md:mt-0 font-bold font-serif text-black">
                      Pizza DAOgh
                    </h3>
                    <p>
                      Officia in minim pariatur ea officia velit et
                      reprehenderit laborum. Deserunt sit duis aliqua incididunt
                      proident proident proident do do labore. Voluptate
                      reprehenderit in ea minim voluptate cupidatat non officia
                      mollit aute minim Lorem veniam.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-36 space-y-16">
              <div id="partners" className="max-w-4xl mx-auto mb-8 space-y-8">
                <h2 className="text-4xl font-bold font-serif my-6 text-black">
                  Our Partners
                </h2>
                <p className="max-w-2xl mx-auto">
                  We have a number of local businesses in our partner network
                  and we're constantly working to expand. Here's a few of those
                  already onboard!
                </p>
              </div>

              <div className="flex flex-wrap justify-center">
                <div className="m-8">
                  <img
                    src="https://via.placeholder.com/200x200"
                    className="rounded-full shadow-lg"
                  />
                  <p className="ml-2 mt-4 text-lg font-semibold text-gray-900">
                    District
                  </p>
                </div>
                <div className="m-8">
                  <img
                    src="https://via.placeholder.com/200x200"
                    className="rounded-full shadow-lg"
                  />
                  <p className="ml-2 mt-4 text-lg font-semibold text-gray-900">
                    Sally&apos;s Apizza
                  </p>
                </div>
                <div className="m-8">
                  <img
                    src="https://via.placeholder.com/200x200"
                    className="rounded-full shadow-lg"
                  />
                  <p className="ml-2 mt-4 text-lg font-semibold text-gray-900">
                    Pepe&apos;s Apizza
                  </p>
                </div>
                <div className="m-8">
                  <img
                    src="https://via.placeholder.com/200x200"
                    className="rounded-full shadow-lg"
                  />
                  <p className="ml-2 mt-4 text-lg font-semibold text-gray-900">
                    Bear&apos;s Smokehouse
                  </p>
                </div>
                <div className="m-8 opacity-50">
                  <img
                    src="https://via.placeholder.com/200x200"
                    className="rounded-full"
                  />
                  <p className="ml-2 mt-4 text-lg font-semibold text-gray-900">
                    Coming soon...
                  </p>
                </div>
                <div className="m-8 opacity-50">
                  <img
                    src="https://via.placeholder.com/200x200"
                    className="rounded-full"
                  />
                  <p className="ml-2 mt-4 text-lg font-semibold text-gray-900">
                    Coming soon...
                  </p>
                </div>
                <div className="m-8 opacity-50">
                  <img
                    src="https://via.placeholder.com/200x200"
                    className="rounded-full"
                  />
                  <p className="ml-2 mt-4 text-lg font-semibold text-gray-900">
                    Coming soon...
                  </p>
                </div>
                <div className="m-8 opacity-50">
                  <img
                    src="https://via.placeholder.com/200x200"
                    className="rounded-full"
                  />
                  <p className="ml-2 mt-4 text-lg font-semibold text-gray-900">
                    Coming soon...
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-36 space-y-16">
              <div id="buy" className="max-w-4xl mx-auto mb-8 space-y-8">
                <h2 className="text-4xl font-bold font-serif my-6 text-black">
                  Buy a slice and join the club!
                </h2>
                <p>Coming soon...</p>
                <p className="text-8xl font-serif text-gray-300 font-light">
                  5/1/2022
                </p>
              </div>
            </div>
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
