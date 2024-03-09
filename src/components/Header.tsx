import Logo from '@/assets/images/logo.svg'

import { useMediaQuery } from 'usehooks-ts'
import { Menu } from './Icons'

function Header() {
  const isMobile = useMediaQuery('(max-width: 768px)')
  return (
    <header className='w-full py-2 px-2.5 md:px-10 lg:px-20 flex-between shadow-md'>
      <div className='container mx-auto'>
        <img src={Logo} alt='logo' />
      </div>
      {isMobile ? (
        <div className='w-[36px] h-[36px]'>
          <Menu />
        </div>
      ) : (
        <div className='flex flex-1 gap-4'>
          <button className='btn-primary'>Sign In</button>
          <button className='btn-secondary '>Join Now</button>
        </div>
      )}
    </header>
  )
}

export default Header
