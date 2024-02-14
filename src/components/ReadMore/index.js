// Write your code here

import {useState} from 'react'

import {
  MainContainer,
  Heading,
  Para,
  Img,
  Description,
  Button,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  // const sentences = descriptionText.split('. ');

  const sentence = reactHooksDescription.slice(0,171)

  console.log(sentence)

  const [show, setShow] = useState(false)
  const onClickBtn = () => {
    setShow(prev => !prev)
  }
  return (
    <MainContainer>
      <Heading>React Hooks</Heading>
      <Para>Hooks are a new addition to React</Para>
      <Img
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <Description>{show ? reactHooksDescription : sentence}</Description>
      <Button onClick={onClickBtn}>Read {show ? 'Less' : 'More'}</Button>
    </MainContainer>
  )
}

export default ReadMore
