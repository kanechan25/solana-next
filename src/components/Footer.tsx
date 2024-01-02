import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { IconTwitter, IconGithub } from 'components/icons'
import { NavLink } from 'components/NavLink'

export const Footer: FC = () => {
  return (
    <div className='flex'>
      <footer className='border-t-2 border-[#141414] bg-black hover:text-white w-screen'>
        <div className='ml-12 py-12 mr-12'>
          <div className='grid grid-cols-2 md:grid-cols-6 gap-2 md:gap-8 md:space-x-12 relative'>
            <div className='flex flex-col col-span-2 mx-4 items-center md:items-start'>
              <div className='flex flex-row ml-1'>
                <NavLink href='https://solana.com'>
                  <div className='flex flex-row ml-1'>
                    <Image src='/solanaLogo.png' alt='solana icon' width={156} height={96} />
                  </div>
                </NavLink>
              </div>
              <div className='flex md:ml-2'>
                <a
                  href='https://twitter.com/solana_devs'
                  type='button'
                  className='flex items-center justify-center border-white text-secondary hover:text-white leading-normal hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1'
                >
                  <IconTwitter />
                </a>
                <a
                  href='https://github.com/solana-labs'
                  type='button'
                  className='flex items-center justify-center border-white text-secondary hover:text-white leading-normal hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1'
                >
                  <IconGithub />
                </a>
              </div>
              <div className='mb-6 m-1 sm:text-left place-items-start items-start font-normal tracking-tight text-secondary'>
                © 2023 Solana Foundation
              </div>
            </div>

            <div className='mb-6 items-center mx-auto max-w-screen-lg'>
              <div className='font-normal capitalize mb-2.5'>SOLANA</div>

              <div className='flex flex-col mb-0 gap-2'>
                <NavLink href='https://solana.com'>Labs</NavLink>
                <NavLink href='https://solana.org'>Foundation</NavLink>
                <NavLink href='https://solanamobile.com/'>Solana Mobile</NavLink>
                <NavLink href='https://solanapay.com/'>Solana Pay</NavLink>
                <NavLink href='https://solana.org/grants'>Grants</NavLink>
              </div>
            </div>

            <div className='mb-6 items-center mx-auto max-w-screen-lg'>
              <h5 className='font-normal capitalize tracking-tight  mb-2.5'>DEVELOPERS</h5>

              <div className='flex flex-col mb-0 gap-2'>
                <NavLink href='https://docs.solana.com/developers'>Documentation</NavLink>
                <NavLink href='https://github.com/solana-mobile/solana-mobile-stack-sdk'>Mobile SDK</NavLink>
                <NavLink href='https://github.com/solana-labs/solana-pay'>Pay SDK</NavLink>
                <NavLink href='https://solanacookbook.com/'>Cookbook</NavLink>
                <NavLink href='https://solana.com/developers/dao'>DAOs</NavLink>
              </div>
            </div>

            <div className='mb-6 items-center mx-auto max-w-screen-lg'>
              <h5 className='font-normal tracking-tight  mb-2.5'>ECOSYSTEM</h5>

              <div className='flex flex-col mb-0 gap-2'>
                <NavLink href='https://solana.com/news'>News</NavLink>
                <NavLink href='https://solana.org/validators'>Validators</NavLink>
                <NavLink href='https://www.youtube.com/@SolanaFndn'>Youtube</NavLink>
                <NavLink href='https://app.realms.today/discover'>Realms</NavLink>
                <NavLink href='https://www.solanau.org'>Solana U</NavLink>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
