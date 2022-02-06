import { logo } from 'assets'
import * as S from './Recommendation.styled'

export function Recommendation() {
  return (
    <S.Wrapper>
      <S.Container>
        <img src={logo} alt="Logo Spiderman" />
        <p>
          After fighting alongside the Avengers, the time has come
          of young Peter Parker returning home to New York alongside
          from his Aunt May. Under the watchful eye of mentor Tony Stark, Peter
          begins to embrace his new identity as Spider-Man and fights
          daily petty crimes in the surroundings. He believes he found
          his life mission when the terrifying villain Vulture appears threatening
          the city. The problem is that the task will not be as easy as he imagined.
        </p>
        <button type="button">Watch</button>
      </S.Container>
    </S.Wrapper>
  )
}
