import Link from 'next/link'
import dynamic from 'next/dynamic'
import React, { useState } from 'react'
import { useAutoConnect } from 'contexts/AutoConnectProvider'
import NetworkSwitcher from 'components/NetworkSwitcher'
import NavElement from 'components/nav-element'
import { IconSolana, IconSetting, IconHumberger, IconClose } from 'components/icons/index'
import { NavLink } from 'components/NavLink'

const WalletMultiButtonDynamic = dynamic(
  async () => (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
  { ssr: false }
)

export const AppBar: React.FC = () => {
  const { autoConnect, setAutoConnect } = useAutoConnect()
  const [isNavOpen, setIsNavOpen] = useState(false)
  return (
    <div>
      {/* NavBar / Header */}
      <div className='navbar flex h-20 flex-row md:mb-2 shadow-lg bg-black text-neutral-content border-b border-zinc-600 bg-opacity-66'>
        <div className='navbar-start align-items-center'>
          <div className='hidden sm:inline w-22 h-22 md:p-2 ml-10'>
            <NavLink href='https://solana.com'>
              <IconSolana width='105%' height='24' />
            </NavLink>
          </div>
          <div className='flex md:hidden'>
            <WalletMultiButtonDynamic style={{ padding: '0px 12px', marginLeft: '16px' }} />
          </div>
        </div>

        {/* Nav Links */}
        {/* Wallet & Settings */}
        <div className='navbar-end'>
          <div className='hidden md:inline-flex items-center justify-center gap-6'>
            <NavElement label='Home' href='/' navigationStarts={() => setIsNavOpen(false)} />
            <NavElement label='Basics' href='/basics' navigationStarts={() => setIsNavOpen(false)} />
            <WalletMultiButtonDynamic style={{ padding: '0px 12px', marginRight: '16px' }} />
          </div>
          <label
            htmlFor='my-drawer'
            className='btn-gh items-center justify-between md:hidden mr-6'
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <div className={`space-y-2.5 ml-5 ${isNavOpen ? 'hidden' : ''}`}>
              <IconHumberger iconColor='purple' height='36' width='36' />
            </div>
            <div className={`space-y-2.5 ml-5 ${isNavOpen ? '' : 'hidden'}`}>
              <IconClose iconColor='purple' height='26' width='26' />
            </div>
          </label>
          <div>
            <span className='absolute block h-0.5 w-12 bg-zinc-600 rotate-90 right-14'></span>
          </div>
          <div className='dropdown dropdown-end'>
            <div tabIndex={0} className='btn btn-square btn-ghost text-right mr-4'>
              <IconSetting iconColor='#FFF' width='28' height='28' />
            </div>
            <ul tabIndex={0} className='p-2 shadow menu dropdown-content bg-base-100 rounded-box sm:w-52'>
              <li>
                <div className='form-control bg-opacity-100'>
                  <label className='cursor-pointer label'>
                    <a>Autoconnect</a>
                    <input
                      type='checkbox'
                      checked={autoConnect}
                      onChange={(e) => setAutoConnect(e.target.checked)}
                      className='toggle'
                    />
                  </label>
                  <NetworkSwitcher />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
