import { Header } from '../Header'
import * as C from './styles'
import { Footer } from '../Footer'

export function Theme({ children, search }) {
  return (
    <>
      <C.Container>
        <Header search={search} />
        <C.Content>{children}</C.Content>
        <Footer />
      </C.Container>
    </>
  )
}
