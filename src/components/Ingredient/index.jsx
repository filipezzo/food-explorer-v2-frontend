import * as C from './styles'

export function Ingredient({ ingredient }) {
  return (
    <>
      <C.Container>
        <button>{ingredient}</button>
      </C.Container>
    </>
  )
}
