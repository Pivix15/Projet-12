import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout, Home, APropos, Projets, Contact, NotFound } from '@/pages'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/propos" element={<APropos />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
