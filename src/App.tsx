import React from 'react'

import { Input } from '../src/components/Forms'
import Header from '../src/components/header/index'
import Button from '../src/components/Button'

import { LoginContainer, Form, ErrorLabel, BlockFieldContainer } from '../src/page/styles'
import Select from '../src/components/Forms/SelectInput'
const App: React.FC = () => {
  return (
    <>
    <Header></Header>
    <LoginContainer>
      <Form style={{ width: '400px' }} onSubmit={console.log}>
       <BlockFieldContainer>
          <label htmlFor="provider">:</label>
          <Select name="provider">
            <option key="-1" value="-1" selected>
              Selecione
            </option>
          </Select>
        </BlockFieldContainer>
        <BlockFieldContainer>
          <label htmlFor="provider">:</label>
          <Select name="provider">
            <option key="-1" value="-1" selected>
              Selecione
            </option>
          </Select>
        </BlockFieldContainer>
        <BlockFieldContainer>
          <label htmlFor="provider">:</label>
          <Select name="provider">
            <option key="-1" value="-1" selected>
              Selecione
            </option>
          </Select>
        </BlockFieldContainer>
        <Button type="submit" label="Entrar"/>
      </Form>
    </LoginContainer>
</>
  )
}

export default App
