import { useState } from 'react'
import { Oval } from 'react-loader-spinner'
import { AiOutlineCheck } from 'react-icons/ai'

const MailingList = ({
  heading = 'Join the mailing list and stay up to date with NHVPC',
}) => {
  const [signupState, setSignupState] = useState('default')
  return (
    <div>
      {signupState === 'default' && (
        <>
          <h3 className="mb-4">{heading}</h3>
          <div className="flex flex-col lg:flex-row justify-center items-center">
            <input
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              placeholder="Email address..."
              className="max-w-lg py-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 lg:border-r-0 rounded-md lg:rounded-r-none"
            />
            <button
              onClick={() => {
                setSignupState('sending')
                setTimeout(() => {
                  setSignupState('sent')
                  setTimeout(() => {
                    setSignupState('default')
                  }, 2000)
                }, 1000)
              }}
              className="text-sm mt-2 lg:mt-0 w-full lg:w-auto block py-4 px-4 bg-indigo-500 border border-indigo-500 text-white rounded-md lg:rounded-l-none font-bold transition-all hover:bg-indigo-400">
              Sign Up
            </button>
          </div>
        </>
      )}

      {signupState === 'sending' && (
        <>
          <h3 className="mb-4">Joining the mailing list...</h3>
          <div className="flex flex-col lg:flex-row justify-center items-center">
            <Oval
              ariaLabel="loading-indicator"
              height={45}
              width={45}
              strokeWidth={2}
              strokeWidthSecondary={1}
              color="blue"
              secondaryColor="#eee"
            />
          </div>
        </>
      )}

      {signupState === 'sent' && (
        <>
          <h3 className="mb-4">
            You are on the list! Check your email for comfirmation.
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center">
            <div className="mx-auto flex items-center justify-center p-4 rounded-full bg-green-100">
              <AiOutlineCheck className="text-2xl text-green-600" />
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default MailingList
