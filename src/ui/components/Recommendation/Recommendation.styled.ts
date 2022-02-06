import styled from 'styled-components'
import { theme } from 'config'

export const ContainerRecommendation = styled.div`
  img {
    width: 100%;
    height: 700px;
    object-fit: cover;
  }
`

export const ContentRecommendation = styled.div`
  margin: -720px 0 0 50px;

  img {
    width: 900px;
    height: 350px;
  }

  p {
    font-size: 16px;
    color: ${theme.colors.white};
    max-width: 850px;
    padding: 30px 0 0 0;
  }

  button {
    width: 300px;
    height: 60px;
    background: ${theme.colors.red[700]};
    border-radius: 5px;
    border: 0;
    color: ${theme.colors.white};
    transition: 1s;
    margin-top: 30px;

    :hover {
      transform: scale(1.1);
    }
  }
`
