import MailingList from './mailinglist'

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
        <p className="text-6xl lg:text-8xl font-serif mb-8 lg:mb-16 bg-clip-text text-gray-400 font-light">
          5/1/2022
        </p>
        <MailingList heading="Join the mailing list and stay up to date with NHVPC" />
      </div>
    </div>
  )
}

export default Join
