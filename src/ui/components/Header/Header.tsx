import * as S from './Header.styled'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <S.Header>
      <nav>
        <ul>
          <li>
            <Link to='/'>Dashboard</Link>
          </li>
          <li>
            <Link to='/'>Movies</Link>
          </li>
          <li>
            <Link to='/'>Series</Link>
          </li>
          <li>
            <Link to='/'>About</Link>
          </li>
        </ul>
      </nav>
    </S.Header>
  )
}
