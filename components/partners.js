import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

const Partners = () => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <Transition.Root show={modalOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-20 inset-0 overflow-y-auto"
          onClose={setModalOpen}>
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0">
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
              <div className="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full sm:pt-1">
                <div className="text-center sm:mt-16">
                  <Dialog.Title
                    as="h3"
                    className="text-4xl mt-6 md:mt-0 font-bold text-gray-900">
                    Become a NHVPC Partner
                  </Dialog.Title>
                  <div className="mt-6">
                    <p className="text-gray-500">
                      Great choice! Drop us a note and we'll be in touch about
                      becoming a NHVPC partner.
                    </p>
                  </div>
                </div>
                <div className="space-y-6 sm:space-y-5 max-w-xl mx-auto mb-16 mt-10">
                  <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                      Name
                    </label>
                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                      Company
                    </label>
                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                      Email
                    </label>
                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                    <label
                      htmlFor="about"
                      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                      Message
                    </label>
                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                      <textarea
                        id="about"
                        name="about"
                        rows={3}
                        className="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
                        defaultValue={''}
                      />
                      <p className="mt-2 text-sm text-gray-500">
                        Drop us a note.
                      </p>
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={() => setModalOpen(false)}
                      className="mx-auto block mt-16 py-3 px-8 bg-indigo-500 text-white rounded-md font-bold transition-all hover:bg-indigo-400">
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      <div id="partners" className="mb-36 space-y-16">
        <div className="max-w-4xl mx-auto mb-8 space-y-8">
          <h2 className="text-4xl font-bold font-serif my-6 text-black">
            Club Partners
          </h2>
          <p className="max-w-2xl mx-auto">
            The best New Haven businesses are partnering with NHVPC and we're
            continuining to expand the partner network. Here&apos;s a few of
            those already onboard!
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
          <button
            onClick={() => setModalOpen(true)}
            className="py-3 px-5 bg-indigo-500 text-white rounded-md font-bold transition-all hover:bg-indigo-400">
            Become a Partner
          </button>
        </div>
      </div>
    </>
  )
}

export default Partners
