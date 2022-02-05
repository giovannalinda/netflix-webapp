import * as S from './Header.styled'
import { Link } from 'react-router-dom'
import { banner, logo } from 'assets'

export function Header() {
  return (
    <S.Header>
      <nav>
        <ul>
          <li><Link to='/home'>Dashboard</Link></li>
          <li><Link to='/home'>Movies</Link></li>
          <li><Link to='/home'>Series</Link></li>
          <li><Link to='/home'>About</Link></li>
        </ul>
      </nav>
      <img src={banner} alt="banner spiderman" />
      <S.ContentHeader>
        <img src={logo} alt="logo spiderman" />
      </S.ContentHeader>
    </S.Header>
  )
}
