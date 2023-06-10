import { useAuth } from '../../hooks/auth'
import { Link } from 'react-router-dom'

import * as C from './styles'
import logo from '../../assets/logo.svg'
import logoadm from '../../assets/logoadm.svg'
import { MagnifyingGlass, Receipt, SignOut, List } from '@phosphor-icons/react'
import { Button } from '../Button'

export function Header({ search }) {
  const { user, signOut } = useAuth()

  return (
    <C.Container>
      <div className="menu-mobile">
        <List size={34} />
      </div>
      <div>
        <Link to="/">
          {user?.isAdmin ? (
            <img src={logoadm} alt="" />
          ) : (
            <img src={logo} alt="" />
          )}
        </Link>
      </div>
      <C.Menu>
        <C.Search>
          <label>
            <MagnifyingGlass />
            <input
              type="text"
              placeholder="Search for dishes options"
              onChange={(e) => {
                search(e.target.value)
              }}
            />
          </label>
        </C.Search>

        {user?.isAdmin ? (
          <Link to="/new">
            <Button className="btn dish" text="New Dish" />
          </Link>
        ) : (
          <Button className="btn" icon={<Receipt />} text="my orders" />
        )}
        <Link to="/">
          <button className="logout" onClick={signOut}>
            <SignOut size={32} />
          </button>
        </Link>
      </C.Menu>
    </C.Container>
  )
}
