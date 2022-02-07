import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home, Series } from 'pages'
import { HOME, SERIES } from 'routes'
import { GlobalStyle } from 'ui'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME} element={<Home />} />
        <Route path={SERIES} element={<Series />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  )
}

export default App
