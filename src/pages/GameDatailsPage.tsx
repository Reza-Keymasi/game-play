import { Heading, Spinner, Text } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import ExpandableText from '../components/ExpandableText'
import useGame from '../hooks/useGame'

const GameDatailsPage = () => {
    const {slug} = useParams()
    const {data:game,isLoading, error} = useGame(slug!)

    if(isLoading) return <Spinner />
    if(error || !game) throw new Error

  return (
    <>
        <Heading>{game.name}</Heading>
        <ExpandableText>{game.description_raw}</ExpandableText>
    </>
  )
}

export default GameDatailsPage