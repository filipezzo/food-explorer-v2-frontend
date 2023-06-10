import { useState, useEffect } from 'react'
import { api } from '../../services/api'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import * as C from './styles'
import { Theme } from '../../components/Theme'
import { Textarea } from '../../components/Textarea'
import { ItemIngredient } from '../../components/ItemIngredient'
import { CaretLeft, UploadSimple } from '@phosphor-icons/react'

export function Edit() {
  const navigate = useNavigate()

  const { user } = useAuth()
  const params = useParams()

  const [loading, setLoading] = useState(false)
  const [loadingDelete, setLoadingDelete] = useState(false)

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')
  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState('')

  const [data, setData] = useState(null)
  const [image, setImage] = useState()
  const [imageFile, setImageFile] = useState(null)

  function handleChangeImage(event) {
    const file = event.target.files[0]
    setImageFile(file)

    const imagePreview = URL.createObjectURL(file)
    setImage(imagePreview)
  }

  function handleAddIngredient() {
    if (newIngredient.length < 3) {
      return alert('Error: Invalid ingredient name!')
    } else {
      setIngredients((prevState) => [...prevState, newIngredient])
      setNewIngredient('')
    }
  }

  function handleRemoveIngredient(deleted) {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== deleted),
    )
  }

  async function handleUpdateDish() {
    if (!image) {
      return alert('Error: You have not uploaded the new dish image!')
    }

    if (!title) {
      return alert('Error: Add at least one ingredient!')
    }

    if (ingredients.length < 1) {
      return alert('Error: must have at least one ingridient!')
    }

    if (newIngredient) {
      return alert(
        'Error: You left an ingredient in the add field, but did not click add. Click the + sign to add',
      )
    }

    if (!category) {
      return alert("Error: You haven't selected the dish category")
    }

    if (!price) {
      return alert("Error: you haven't provide the price of the dish")
    }

    if (!description) {
      return alert("Error: You haven't provided a description for the dish")
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
      .put(`/dishes/${params.id}`, formData)
      .then(alert('Dish updated successfully'), navigate('/'))
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert('Error updating the dish!')
        }
      })

    setLoading(false)
  }

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`)
      setData(response.data)

      const { title, description, category, price, ingredients } = response.data
      setTitle(title)
      setDescription(description)
      setCategory(category)
      setPrice(price)
      setIngredients(ingredients.map((ingredient) => ingredient.name))
    }

    fetchDish()
  }, [])

  async function handleRemoveDish() {
    setLoadingDelete(true)
    const isConfirm = confirm('Are you sure you want to remove this item?')

    if (isConfirm) {
      await api.delete(`/dishes/${params.id}`).then(() => {
        alert('Item removed successfully!')
        navigate('/')
        setLoadingDelete(false)
      })
    }
  }

  return (
    <>
      <Theme>
        {user.isAdmin && (
          <C.Container>
            <C.Content>
              {data && (
                <>
                  <C.btnBack>
                    <Link to="/">
                      <CaretLeft size={32} />
                      Back
                    </Link>
                  </C.btnBack>
                  <h2>Edit Dish</h2>
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
                            onChange={handleChangeImage}
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
                                onClick={() =>
                                  handleRemoveIngredient(ingredient)
                                }
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
                    <div className="btn-box">
                      <button
                        className="delete-dish"
                        type="button"
                        onClick={handleRemoveDish}
                      >
                        {loadingDelete ? 'Deleting dish' : 'Delete dish'}
                      </button>

                      <button type="button" onClick={handleUpdateDish}>
                        {loading ? 'Updating dish' : 'Update Dish'}
                      </button>
                    </div>
                  </C.MainForm>
                </>
              )}
            </C.Content>
          </C.Container>
        )}
      </Theme>
    </>
  )
}
