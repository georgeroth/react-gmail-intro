import './styles/header.css'

import TopLeftMenu from './topLeftMenu.js'
import Search from './search.js'

function Header() {
    return (
        <header className="header">
            <TopLeftMenu />
            <Search />
        </header>
    )
}

export default Header