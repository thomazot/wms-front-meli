import { useState } from 'react'
import Router from 'next/router'
import TextField from 'components/TextField'

import * as S from './Search.styles'

import { Search as SearchIcon } from '@styled-icons/boxicons-regular/Search'
import { FieldErrors, searchValidate } from 'utils/validations'

const Search = () => {
  const [inputs, setInputs] = useState({ w: '' })
  const [fieldError, setFieldError] = useState<FieldErrors>({})

  const handleInputs = (field: string, value: string) =>
    setInputs((inputsOld) => ({ ...inputsOld, [field]: value }))

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const errors = searchValidate(inputs)

    if (Object.keys(errors).length) {
      setFieldError(errors)
      return
    }
    setFieldError({})

    Router.push(`/search?w=${inputs.w}`)
  }
  return (
    <S.Wrapper onSubmit={handleSubmit}>
      <TextField
        type="search"
        name="w"
        placeholder="Search"
        error={fieldError?.w}
        onInputChange={handleInputs}
      />
      <S.Button type="submit">
        <SearchIcon />
      </S.Button>
    </S.Wrapper>
  )
}

export default Search
