import { banner, logo } from 'assets'
import * as S from './Recommendation.styled'

export function Recommendation() {
  return (
    <>
      <S.ContainerRecommendation>
        <img src={banner} alt="banner spiderman" />
      </S.ContainerRecommendation>
      <S.ContentRecommendation>
        <img src={logo} alt="logo spiderman" />
        <p>
          Depois de lutar ao lado dos Vingadores, chegou a hora
          do jovem Peter Parker voltar para casa em Nova York ao lado
          de sua tia May. Sob o olhar atento do mentor Tony Stark, Peter
          começa a abraçar sua nova identidade como Homem-Aranha e combate
          diariamente pequenos crimes nas redondezas. Ele acredita que encontrou
          a missão de sua vida quando o terrível vilão Abutre surge ameaçando
          a cidade. O problema é que a tarefa não será tão fácil como ele imaginava.
        </p>
        <button type="button">Assistir</button>
      </S.ContentRecommendation>
    </>
  )
}
