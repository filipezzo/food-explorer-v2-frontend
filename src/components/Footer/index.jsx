import * as C from './styles'
import footer from '../../assets/footer.svg'
export function Footer() {
  return (
    <C.Container>
      <img src={footer} alt="" />
      <p>&copy; 2023 - All rights reserved.</p>
    </C.Container>
  )
}
