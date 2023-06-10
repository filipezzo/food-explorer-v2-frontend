import { Container } from './styles'

export function Button({ text, icon, className, ...rest }) {
  return (
    <Container className={className} {...rest}>
      {icon && icon}
      {text}
    </Container>
  )
}
