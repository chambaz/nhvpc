const Join = () => {
  return (
    <div
      id="join"
      className="shadow-inner py-2 pb-12 lg:py-16 lg:pb-20 leading-loose bg-gray-100 text-gray-500 text-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: 'url(/img/map.jpg)',
      }}>
      <div className="max-w-4xl mx-auto px-4 lg:px-0">
        <h2 className="text-4xl font-bold font-serif my-6 text-black">
          Coming to New Haven soon...
        </h2>
        <p className="text-6xl lg:text-8xl font-serif mb-5 bg-clip-text text-gray-400 font-light">
          5/1/2022
        </p>
        <h3 className="mt-8 lg:mt-16 mb-4">
          Join the mailing list and stay up to date with NHVPC
        </h3>
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <input
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            placeholder="Email address..."
            className="max-w-lg py-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 lg:border-r-0 rounded-md lg:rounded-r-none"
          />
          <button className="text-sm mt-2 lg:mt-0 w-full lg:w-auto block py-4 px-4 bg-indigo-500 border border-indigo-500 text-white rounded-md lg:rounded-l-none font-bold transition-all hover:bg-indigo-400">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  )
}

export default Join
