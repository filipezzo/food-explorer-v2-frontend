import React from 'react'
import { Container } from './styles'

export function Input({
  type,
  placeholder,
  label,
  id,
  hasBorder,
  icon,
  onChange,
  ...rest
}) {
  const handleChange = (event) => {
    if (onChange) {
      onChange(event)
    }
  }

  return (
    <Container hasBorder={hasBorder} {...rest}>
      <label htmlFor={id}>{label}</label>

      <input
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </Container>
  )
}
