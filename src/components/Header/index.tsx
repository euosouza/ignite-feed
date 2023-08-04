import './header.scss';

import logo from '@assets/images/logo-ignite-feed.svg';

export function Header() {
  return (
    <header className="header">
      <img className='logo' src={logo} alt="Logotipo Ignite Feed" />
      <span className='logo-text'>Ignite Feed</span>
    </header>
  )
}