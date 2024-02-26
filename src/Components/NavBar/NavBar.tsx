import React from 'react'
import './NavBar.css'
function NavBar() {
  return (
    <div className='navbar'>
        <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo" />
        {/* <nav className='center-nav'>
            <div className='left-nav'>
                <div>Home</div>
                <div>Tv Shows</div>
                <div>Movies</div>
                <div>Recently Added</div>
                <div>My list</div>
            </div>
            <div className='right-nav'>
                <div>search</div>
                <div>KIDS</div>
                <div>DVD</div>
                <div>NOTI</div>
            </div>
        </nav>*/}
        <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar" />
    </div>
  )
}

export default NavBar
