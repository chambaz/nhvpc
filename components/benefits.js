const Benefits = () => {
  return (
    <div id="benefits" className="mb-36 space-y-16">
      <h2 className="text-4xl font-bold font-serif my-6 text-black">
        Member Benefits
      </h2>

      <div className="space-y-36">
        <div className="flex flex-col items-center md:flex-row text-left">
          <img src="/img/sample.jpg" alt="" className="w-full md:w-1/2" />
          <div className="space-y-4 md:ml-10 text-center md:text-left">
            <h3 className="text-2xl mt-6 md:mt-0 font-bold font-serif text-black">
              4338 unique NFTs
            </h3>
            <p>
              The New Haven Pizza Club NFT collection will be made up of 4338
              unique NFTs. Owning an NHVPC NFT will grant you access to the club
              and benefit from the utility and growth of the project. Afer the
              initial mint, the NFTs will be available for trading on secondary
              markets.
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
              The NHVPC is a network of New Haven&pos;s finest. From legendary
              restaurants to the best evening spots, NHVPC members will gain
              access to exclusive deals and special offers.
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
              Sponsored events, parties, meetups, and networking. Virtual and
              in-person. The NHVPC is a strong and vibrant community that
              believes in growth and success of the group and the city culture.
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
              NHVPC is a community driven and community led organization.
              Membership does not only grant you access to our benefits, you
              also have a say. Club members will be given the chance to vote on
              all major decisions and help to shape the direction of the club.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Benefits
