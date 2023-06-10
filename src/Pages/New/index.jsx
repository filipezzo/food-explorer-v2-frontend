import { useState } from 'react'
import { api } from '../../services/api'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import * as C from './styles'
import { Theme } from '../../components/Theme'
import { Textarea } from '../../components/Textarea'
import { ItemIngredient } from '../../components/ItemIngredient'
import { CaretLeft, UploadSimple } from '@phosphor-icons/react'

export function New() {
  const [imageFile, setImageFile] = useState(null)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState('')
  const [loading, setLoading] = useState(false)
  const { user } = useAuth()
  const navigate = useNavigate()

  async function handleNewDish() {
    if (!imageFile || imageFile.length === 0) {
      return alert('Please add an image for the dish')
    }

    if (!title) {
      return alert('Please add a title for the dish')
    }

    if (!description) {
      return alert('Please add a description for the dish')
    }

    if (!category) {
      return alert('Please add a category for the dish')
    }

    if (!price) {
      return alert('Please add a price for the dish')
    }

    if (newIngredient) {
      return alert(
        "You left an ingredient in the add field but did not click 'Add'. Click to add or leave the field empty.",
      )
    }

    if (ingredients.length < 1) {
      return alert('Please add at least one ingredient')
    }

    setLoading(true)
    const formData = new FormData()
    formData.append('image', imageFile)
    formData.append('title', title)
    formData.append('description', description)
    formData.append('category', category)
    formData.append('price', price)

    ingredients.map((ingredient) => formData.append('ingredients', ingredient))

    await api
      .post('/dishes', formData)
      .then(alert('Dish added!'), navigate('/'))
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert('Erro creating dish!')
        }
      })

    setLoading(false)
  }

  function handleAddIngredient() {
    setIngredients((prevState) => [...prevState, newIngredient])
    setNewIngredient('')
  }

  function handleRemoveIngredient(deleted) {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== deleted),
    )
  }

  return (
    <Theme>
      {user.isAdmin && (
        <C.Container>
          <C.Content>
            <C.btnBack>
              <Link to="/">
                <CaretLeft size={32} />
                Back
              </Link>
            </C.btnBack>
            <h2>Add dish</h2>
            <C.MainForm>
              <div className="line1">
                <div className="box">
                  <label id="file" htmlFor="image">
                    Image of the dish
                    <div className="input select">
                      <UploadSimple size={24} />
                      <span>Select the image</span>
                    </div>
                    <input
                      id="image"
                      type="file"
                      onChange={(e) => setImageFile(e.target.files[0])}
                    />
                  </label>
                </div>

                <div className="box">
                  <label id="file" htmlFor="text">
                    Name
                    <input
                      className="inputBox2 input"
                      id="text"
                      type="text"
                      placeholder="  EX: Ceasar Salad"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </label>
                </div>

                <div className="box">
                  <label id="file" htmlFor="category">
                    Category
                    <input
                      className="inputBox2 input"
                      placeholder="  type meals, dessert or drinks "
                      id="category"
                      type="text"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    />
                  </label>
                </div>
              </div>
              <div className="box line2">
                <div className="ingredientsTag ">
                  <div>
                    <p>Ingredientes</p>
                    <div className="ingredients">
                      {ingredients.map((ingredient, index) => (
                        <ItemIngredient
                          key={String(index)}
                          value={ingredient}
                          onClick={() => handleRemoveIngredient(ingredient)}
                        />
                      ))}

                      <ItemIngredient
                        isNew
                        placeholder="Add"
                        onChange={(e) => setNewIngredient(e.target.value)}
                        value={newIngredient}
                        onClick={handleAddIngredient}
                      />
                    </div>
                  </div>
                </div>
                <div className="box">
                  <label id="file" htmlFor="text">
                    Price
                    <input
                      className="price input"
                      id="text"
                      type="text"
                      placeholder="  $ 00.00"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </label>
                </div>
              </div>
              <Textarea
                label="Description"
                title="Description"
                placeholder="Describe about your new Dish"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                minLength={1}
                maxLength={80}
              />
              <button type="button" onClick={handleNewDish}>
                {loading ? 'Adding dish' : 'Add Dish'}
              </button>
            </C.MainForm>
          </C.Content>
        </C.Container>
      )}
    </Theme>
  )
}
