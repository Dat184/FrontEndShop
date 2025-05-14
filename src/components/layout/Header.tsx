import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Logo from '../../assets/img/logo.jpg'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <header className='bg-[#f4f1eb] shadow-sm border-b border-gray-300 sticky top-0 z-50'>
      <div className='container mx-auto px-6 py-3'>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <Link to='/' className='flex items-center'>
            <span className='ml-3 text-2xl  font-serif text-[#5c6a5f]'>VANE STUDIO</span>
          </Link>
          {/* Desktop Navigation */}{' '}
          <div className='hidden md:flex space-x-8'>
            <NavLink
              to='/men'
              className={({ isActive }) =>
                isActive ? 'text-[#5c6a5f] font-medium' : 'text-gray-700 hover:text-[#5c6a5f]'
              }
            >
              Men
            </NavLink>
            <NavLink
              to='/women'
              className={({ isActive }) =>
                isActive ? 'text-[#5c6a5f] font-medium' : 'text-gray-700 hover:text-[#5c6a5f]'
              }
            >
              Women
            </NavLink>
            <NavLink
              to='/new-arrivals'
              className={({ isActive }) =>
                isActive ? 'text-[#5c6a5f] font-medium' : 'text-gray-700 hover:text-[#5c6a5f]'
              }
            >
              New Arrivals
            </NavLink>
            <NavLink
              to='/about'
              className={({ isActive }) =>
                isActive ? 'text-[#5c6a5f] font-medium' : 'text-gray-700 hover:text-[#5c6a5f]'
              }
            >
              About
            </NavLink>
            <NavLink
              to='/contact'
              className={({ isActive }) =>
                isActive ? 'text-[#5c6a5f] font-medium' : 'text-gray-700 hover:text-[#5c6a5f]'
              }
            >
              Contact
            </NavLink>
          </div>
          {/* Shopping Cart & User Account */}{' '}
          <div className='hidden md:flex items-center space-x-4'>
            <Link to='/cart' className='text-gray-700 hover:text-[#5c6a5f] relative'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                />
              </svg>
              <span className='absolute -top-1 -right-1 bg-[#5c6a5f] text-white text-xs rounded-full h-4 w-4 flex items-center justify-center'>
                0
              </span>
            </Link>
            <Link to='/account' className='text-gray-700 hover:text-[#5c6a5f]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                />
              </svg>
            </Link>
          </div>
          {/* Mobile Menu Button */}{' '}
          <div className='md:hidden'>
            <button onClick={toggleMenu} className='text-gray-700'>
              {isMenuOpen ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
                </svg>
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
                </svg>
              )}
            </button>
          </div>
        </div>{' '}
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className='md:hidden mt-4 border-t border-gray-300 pt-4'>
            <div className='flex flex-col space-y-3'>
              <NavLink
                to='/'
                className={({ isActive }) =>
                  isActive ? 'text-[#5c6a5f] font-medium' : 'text-gray-700 hover:text-[#5c6a5f]'
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to='/products'
                className={({ isActive }) =>
                  isActive ? 'text-[#5c6a5f] font-medium' : 'text-gray-700 hover:text-[#5c6a5f]'
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </NavLink>
              <NavLink
                to='/categories'
                className={({ isActive }) =>
                  isActive ? 'text-[#5c6a5f] font-medium' : 'text-gray-700 hover:text-[#5c6a5f]'
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Categories
              </NavLink>
              <NavLink
                to='/about'
                className={({ isActive }) =>
                  isActive ? 'text-[#5c6a5f] font-medium' : 'text-gray-700 hover:text-[#5c6a5f]'
                }
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </NavLink>
              <NavLink
                to='/contact'
                className={({ isActive }) =>
                  isActive ? 'text-[#5c6a5f] font-medium' : 'text-gray-700 hover:text-[#5c6a5f]'
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </NavLink>
            </div>{' '}
            <div className='flex space-x-4 mt-4 pt-4 border-t border-gray-200'>
              <Link
                to='/cart'
                className='text-gray-700 hover:text-[#5c6a5f] relative'
                onClick={() => setIsMenuOpen(false)}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                  />
                </svg>{' '}
                <span className='absolute -top-1 -right-1 bg-[#5c6a5f] text-white text-xs rounded-full h-4 w-4 flex items-center justify-center'>
                  0
                </span>
              </Link>
              <Link to='/account' className='text-gray-700 hover:text-[#5c6a5f]' onClick={() => setIsMenuOpen(false)}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                  />
                </svg>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
