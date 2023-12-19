import React from 'react'
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon
} from '@heroicons/react/24/outline'
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon
} from '@heroicons/react/20/solid'
import TextField from '@mui/material/TextField'
import { Autocomplete } from '@react-google-maps/api'
function Header ({ setCoordinates }) {
  const products = [
    {
      name: 'Analytics',
      description: 'Get a better understanding of your traffic',
      href: '#',
      icon: ChartPieIcon
    },
    {
      name: 'Engagement',
      description: 'Speak directly to your customers',
      href: '#',
      icon: CursorArrowRaysIcon
    },
    {
      name: 'Security',
      description: 'Your customers’ data will be safe and secure',
      href: '#',
      icon: FingerPrintIcon
    },
    {
      name: 'Integrations',
      description: 'Connect with third-party tools',
      href: '#',
      icon: SquaresPlusIcon
    },
    {
      name: 'Automations',
      description: 'Build strategic funnels that will convert',
      href: '#',
      icon: ArrowPathIcon
    }
  ]
  const callsToAction = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon }
  ]

  function classNames (...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [srch, setSrch] = useState(null)
  const onLoad = (autoC) => setSrch(autoC)
  const onplaceChange = () => {
    const lat = srch.getPlace().geometry.location.lat()
    const lng = srch.getPlace().geometry.location.lng()
    setCoordinates({ lat, lng })
  }

  return (
    <div>
      <header className='bg-white'>
        <nav
          className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'
          aria-label='Global'
        >
          <div className='flex lg:flex-1'>
            <a href='#' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Your Company</span>
              <img className='h-10 w-auto' src='/Logo.png' alt='' />
            </a>
          </div>
          <div className='flex lg:hidden'>
            <button
              type='button'
              className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className='sr-only'>Open main menu</span>
              <Bars3Icon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
         
          <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
            <p className='text-sm font-semibold leading-6 text-gray-900'>
              <Autocomplete onplaceChange={onplaceChange} onLoad={onLoad}>
                <input
                  type='text'
                  name=''
                  id=''
                  className='px-4 outline-none   rounded-lg shadow-md py-2'
                />
              </Autocomplete>
            </p>
          </div>
        </nav>
        <Dialog
          as='div'
          className='lg:hidden'
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className='fixed inset-0 z-10' />
          <Dialog.Panel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
            <div className='flex items-center justify-between'>
              <a href='#' className='-m-1.5 p-1.5'>
                <span className='sr-only'>Your Company</span>
                <img className='h-10 w-auto' src='/Logo.png' alt='' />
              </a>
              <button
                type='button'
                className='-m-2.5 rounded-md p-2.5 text-gray-700'
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className='sr-only'>Close menu</span>
                <XMarkIcon className='h-6 w-6' aria-hidden='true' />
              </button>
            </div>
            <div className='mt-6 flow-root'>
              <div className='-my-6 divide-y divide-gray-500/10'>
               
                <div className='py-6'>
                  <p className='text-sm font-semibold leading-6 text-gray-900'>
                    <Autocomplete onplaceChange={onplaceChange} onLoad={onLoad}>
                      <input
                        type='text'
                        name=''
                        id=''
                        className='px-4 outline-none   rounded-lg shadow-md py-2'
                      />
                    </Autocomplete>
                  </p>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  )
}

export default Header
