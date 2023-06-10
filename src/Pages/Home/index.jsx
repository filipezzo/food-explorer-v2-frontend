import React, { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { Theme } from '../../components/Theme'
import * as C from './styles.js'
import flavour from '../../assets/flavours.png'
import { Card } from '../../components/Card/index.jsx'
import Slider from 'react-slick'

export function Home() {
  const [dishes, setDishes] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dishes?title=${search}`)
      setDishes(response.data)
    }

    fetchDishes()
  }, [search])

  const settings = {
    slidesToShow: 3.5,
    slidesToScroll: 1,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2.7,
        },
      },
    ],
  }

  return (
    <>
      <Theme search={setSearch}>
        <C.Container>
          <C.Content>
            <C.Hero>
              <img src={flavour} alt="" />
              <div className="hero-text">
                <h1>Unparalleled flavors</h1>
                <p>
                  Feel the care in the preparation with selected ingredients
                </p>
              </div>
            </C.Hero>
            <C.Meals>
              <h2>Meals</h2>
              {dishes.filter((dish) => dish.category === 'meals').length >
                0 && (
                <Slider {...settings}>
                  {dishes
                    .filter((dish) => dish.category === 'meals')
                    .map((dish) => (
                      <div key={String(dish.id)}>
                        <Card data={dish} />
                      </div>
                    ))}
                </Slider>
              )}
            </C.Meals>

            <C.Meals>
              <h2>Dessert</h2>
              {dishes.filter((dish) => dish.category === 'dessert').length >
                0 && (
                <Slider {...settings}>
                  {dishes
                    .filter((dish) => dish.category === 'dessert')
                    .map((dish) => (
                      <div key={String(dish.id)}>
                        <Card data={dish} />
                      </div>
                    ))}
                </Slider>
              )}
            </C.Meals>

            <C.Meals>
              <h2>Drinks</h2>
              {dishes.filter((dish) => dish.category === 'drinks').length >
                0 && (
                <Slider {...settings}>
                  {dishes
                    .filter((dish) => dish.category === 'drinks')
                    .map((dish) => (
                      <div key={String(dish.id)}>
                        <Card data={dish} />
                      </div>
                    ))}
                </Slider>
              )}
            </C.Meals>
          </C.Content>
        </C.Container>
      </Theme>
    </>
  )
}
