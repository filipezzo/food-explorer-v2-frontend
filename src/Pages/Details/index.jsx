import { api } from '../../services/api.js'
import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import * as C from './styles.js'
import { Theme } from '../../components/Theme'
import { CaretLeft, Minus, Plus } from '@phosphor-icons/react'
import { Ingredient } from '../../components/Ingredient/index.jsx'
import { useAuth } from '../../hooks/auth.jsx'
export function Details() {
  const { user } = useAuth()
  const params = useParams()
  const navigate = useNavigate()
  const [data, setData] = useState(null)
  const [quantity, setQuantity] = useState(1)

  function handleEditDish(id) {
    navigate(`/edit/${id}`)
  }

  function handleAddQuantity(event) {
    event.preventDefault()
    const hasMoreThan10 = quantity >= 9

    if (hasMoreThan10) {
      return
    }

    setQuantity(quantity + 1)
  }

  function handleRemoveQuantity(event) {
    event.preventDefault()
    const isLess0 = quantity <= 1
    if (isLess0) {
      return
    }
    setQuantity(quantity - 1)
  }
  const imageURL = data && `${api.defaults.baseURL}/files/${data.image}`

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`)
      setData(response.data)
    }

    fetchDish()
  }, [])

  return (
    <>
      <Theme>
        <C.Container>
          <C.Content>
            <C.btnBack>
              <Link to="/">
                <CaretLeft size={32} />
                Back
              </Link>
            </C.btnBack>

            {data && (
              <C.Main>
                <div className="divres">
                  <img src={imageURL} alt="" />
                  <form>
                    <h2>{data.title}</h2>
                    <p>{data.description}</p>
                    <C.Ingredients>
                      {data.ingredients.map((ingredient) => (
                        <Ingredient
                          key={String(ingredient.id)}
                          ingredient={ingredient.name}
                        />
                      ))}
                    </C.Ingredients>
                    <C.Client>
                      {user.isAdmin ? (
                        <div>
                          <a
                            type="button"
                            onClick={() => handleEditDish(data.id)}
                          >
                            <button
                              onClick={handleEditDish}
                              className="include-btn"
                            >
                              Edit Dish
                            </button>
                          </a>
                        </div>
                      ) : (
                        <>
                          <div>
                            <button onClick={handleRemoveQuantity}>
                              <Minus size={20} />
                            </button>
                            <span>0{quantity}</span>
                            <button onClick={handleAddQuantity}>
                              <Plus size={20} />
                            </button>
                          </div>

                          <div>
                            <button
                              onClick={handleAddQuantity}
                              className="include-btn"
                            >
                              Include $
                              {Number(quantity * data.price).toFixed(2)}
                            </button>
                          </div>
                        </>
                      )}
                    </C.Client>
                  </form>
                </div>
              </C.Main>
            )}
          </C.Content>
        </C.Container>
      </Theme>
    </>
  )
}
