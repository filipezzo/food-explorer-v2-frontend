import React, { useState } from 'react'
import { api } from '../../services/api'
import * as C from './styles'
import { Heart, CaretRight, Minus, Plus, Pencil } from '@phosphor-icons/react'
import { useAuth } from '../../hooks/auth'

import { useNavigate } from 'react-router-dom'

export function Card({ data, className, ...rest }) {
  const [quantity, setQuantity] = useState(1)
  const { user } = useAuth()
  const [isClicked, setIsClicked] = useState(false)
  const navigate = useNavigate()
  const imageURL = `${api.defaults.baseURL}/files/${data?.image}`

  function handleFavorite() {
    setIsClicked(!isClicked)
  }
  function handleAddQuantity() {
    const hasMoreThan10 = quantity >= 9

    if (hasMoreThan10) {
      return
    }

    setQuantity(quantity + 1)
  }

  function handleRemoveQuantity() {
    const isLess0 = quantity <= 1
    if (isLess0) {
      return
    }
    setQuantity(quantity - 1)
  }

  function handleEditDish() {
    navigate(`/edit/${data.id}`)
  }

  function handleDetails(id) {
    navigate(`/details/${id}`)
  }

  return (
    <>
      <C.Container className={className} {...rest}>
        {user?.isAdmin ? (
          <button onClick={handleEditDish}>
            <Pencil size={24} />
          </button>
        ) : (
          <button onClick={handleFavorite}>
            <Heart
              size={24}
              className={isClicked ? 'heart-svg clicked' : 'heart-svg'}
            />
          </button>
        )}

        <img src={imageURL} alt="" />

        <a type="button" onClick={() => handleDetails(data.id)}>
          <h3>
            {data.title} <CaretRight />
          </h3>
        </a>

        <p className="description">{data.description}</p>
        <div className="boxPrice">
          <strong className={user.isAdmin ? 'margin-btn-adm' : ''}>
            {data.price}
          </strong>
        </div>

        {user.isAdmin ? (
          <div></div>
        ) : (
          <C.Client>
            <div>
              <button onClick={handleRemoveQuantity}>
                <Minus size={20} />
              </button>
              <span>0 {quantity}</span>
              <button onClick={handleAddQuantity}>
                <Plus size={20} />
              </button>
            </div>
            <div>
              <button onClick={handleAddQuantity} className="include-btn">
                Include
              </button>
            </div>
          </C.Client>
        )}
      </C.Container>
    </>
  )
}
