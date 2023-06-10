import * as C from './styles'

export function Textarea({
  title,
  value,
  label,
  minLength,
  maxLength,
  ...rest
}) {
  return (
    <C.Container>
      <label htmlFor={label}>{title}</label>
      <C.TextareaInput
        id={label}
        minLength={minLength}
        maxLength={maxLength}
        {...rest}
      >
        {value}
      </C.TextareaInput>
    </C.Container>
  )
}
