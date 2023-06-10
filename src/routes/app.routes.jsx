import { Routes, Route } from 'react-router-dom'

import { Home } from '../Pages/Home'
import { Details } from '../Pages/Details'
import { Cart } from '../Pages/Cart'
import { New } from '../Pages/New'
import { Edit } from '../Pages/Edit'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/new" element={<New />} />
      <Route path="/edit/:id" element={<Edit />} />
    </Routes>
  )
}
