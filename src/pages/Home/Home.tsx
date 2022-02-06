import { useEffect, useState } from 'react'

import { Category } from 'types'
import { Footer } from 'ui/components/Footer'
import { Header } from 'ui/components/Header'
import { Recommendation } from 'ui/components/Recommendation'

import api from 'services/api'

import * as S from './Home.styled'

export function Home() {
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    api
      .get<Category[]>('/categories')
      .then((response) => {
        setCategories(
          response.data.map((category) => ({
            title: category.title,
            movies: category.movies.slice(0, 4),
          })),
        )
      })
      .catch((err) => {
        console.error('deu erro ' + err)
      })
  }, [])

  return (
    <>
      <Header />
      <Recommendation />
      <S.Container>
        <S.CategoriesList>
          {categories.map((category) => (
            <S.CategoryItem key={category.title}>
              <h1>{category.title}</h1>
              <S.MoviesList>
                {category.movies.map((movie) => (
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
