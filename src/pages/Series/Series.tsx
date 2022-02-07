import { useEffect, useState } from 'react'

import { logoseries } from 'assets'
import { Category } from 'types'
import { Footer } from 'ui/components/Footer'
import { Header } from 'ui/components/Header'

import api from 'services/api'

import * as S from './Series.styled'

export function Series() {
  const [series, setSeries] = useState<Category[]>([])

  useEffect(() => {
    api
      .get<Category[]>('/categories')
      .then((response) => {
        setSeries(
          response.data.map((category) => ({
            title: category.title,
            movies: category.movies.slice(0, 8),
          })),
        )
      })
      .catch((err) => {
        console.error('deu erro ' + err)
      })
  }, [])

  console.log(series)

  return (
    <>
      <Header />
      <S.Container>
        <img src={logoseries} alt='banner' />
        <h1>Séries</h1>
        <S.CategoriesList>
          {series.map((serie) => (
            <S.CategoryItem key={serie.title}>
              <h1>{serie.title}</h1>
              <S.MoviesList>
                {serie.movies.map((movie) => (
                  <S.MovieItem key={movie.title}>
                    <button>
                      <img src={movie.thumbnail} alt={movie.title} />
                    </button>
                  </S.MovieItem>
                ))}
              </S.MoviesList>
            </S.CategoryItem>
          ))}
        </S.CategoriesList>
      </S.Container>
      <Footer />
    </>
  )
}
