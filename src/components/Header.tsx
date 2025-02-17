import '../styles/Header.css'

function Header() {

  return (
    <header className='header'>
      <button className='header__menu-button' />
      <h1 className='header__text'>Dashboard</h1>
      <button className='header__refresh'/>
    </header>
  )
}

export default Header