const Partners = () => {
  return (
    <div id="partners" className="mb-36 space-y-16">
      <div className="max-w-4xl mx-auto mb-8 space-y-8">
        <h2 className="text-4xl font-bold font-serif my-6 text-black">
          Club Partners
        </h2>
        <p className="max-w-2xl mx-auto">
          The best New Haven businesses are partnering with NHVPC and we're
          continuining to expand the partner network. Here&apos;s a few of those
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
      <div className="text-black">
        <p className="my-0 mb-6">
          Interested in joining NHVPC as a club partner?
          <br className="hidden md:block" />
          &nbsp; Drop us a note and we'll follow up with more information.
        </p>
        <button className="py-3 px-5 bg-indigo-500 text-white rounded-md font-bold transition-all hover:bg-indigo-400">
          Become a Partner
        </button>
      </div>
    </div>
  )
}

export default Partners
