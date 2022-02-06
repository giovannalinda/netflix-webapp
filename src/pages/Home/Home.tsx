import { useEffect, useState } from 'react'

import { Movie } from 'types'
import { Footer } from 'ui/components/Footer'
import { Header } from 'ui/components/Header'
import { Recommendation } from 'ui/components/Recommendation'

import api from 'services/api'

import * as S from './Home.styled'

export function Home() {
  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    api
      .get<Movie[]>('/movies')
      .then((response) => {
        const previewMovies = response.data.slice(0, 30)
        setMovies(previewMovies)
      })
      .catch((err) => {
        console.error('deu erro ' + err)
      })
  }, [])

  return (
    <>
      <Header />
      <Recommendation />
      <S.ContentMain>
        <h1>Popular on Netflix</h1>
        <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <img src={movie.thumbnail} alt={movie.title} />
          </li>
        ))}
        </ul>
      </S.ContentMain>
      <Footer />
    </>
  )
}
