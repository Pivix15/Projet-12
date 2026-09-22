import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout, Home, APropos } from '@/pages'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="/propos" element={<APropos />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
