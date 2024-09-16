import { BiHomeAlt, BiMoviePlay, BiInfoCircle, BiMenu } from 'react-icons/bi'
import NavItem from './navItem'
import { useState } from 'react'

const defaultIconSize = '1.875rem'

const items = [
    { label: 'Home', icon: <BiHomeAlt size={defaultIconSize} />, active: true },
    { label: 'Movies', icon: <BiMoviePlay size={defaultIconSize} /> },
    { label: 'About', icon: <BiInfoCircle size={defaultIconSize} /> }
]

const NavItemContainer = () => <>
    {items.map((item, index) => <NavItem item={item} key={index} />)}
</>

const Nav = () => {

    const [isNavMobile, setIsNavMobile] = useState(false);

    return (
        <>
            <nav className="col-span-1 bg-cyan-200">
                <div className="flex md:block mx-4 justify-between items-center">
                    <h4 className="uppercase font-bold text-primary py-4 border-b text-right border-primary">
                        Phimmoi.net
                    </h4>
                    <BiMenu className='cursor-pointer md:hidden ' size={defaultIconSize} onClick={() => { setIsNavMobile(!isNavMobile) }} />
                </div>
                <ul className={` mx-4 my-2${isNavMobile ? '' : ' hidden'} md:block`}>
                    <NavItemContainer />
                </ul>
            </nav>
        </>
    )
}

export default Nav