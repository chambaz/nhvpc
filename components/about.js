import MailingList from './mailinglist'

const About = () => {
  return (
    <div id="about" className="max-w-4xl mx-auto mb-36 space-y-8">
      <h2 className="text-4xl font-bold font-serif my-6 text-black w-4/5 mx-auto">
        New Haven Pizza Club
      </h2>
      <div>
        <p className="max-w-2xl mx-auto mb-10">
          New Haven Pizza Club is a members-only club for residents of New
          Haven, CT. 4338 unique NFT&apos;s will be available to mint for access
          to the club. Members will benefit from exclusive deals with our
          partners, local businesses, and a tight-knit community of New
          Haven&apos;s finest.
        </p>
      </div>
      <MailingList heading="NHVPC will be launching soon, join the mailing list and stay up to date" />
    </div>
  )
}

export default About
