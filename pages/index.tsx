import { Container, Heading, HStack, IconButton, useColorModeValue } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Home: NextPage = () => {
  const router = useRouter()
  const justStarred = router.query.starDone
  const yellow = useColorModeValue("yellow.300", "yellow.200")

  useEffect(() => {
    if (justStarred) {
      window.localStorage.setItem("star", "true")
    }
  })

  const hasStarred = () => {
    if (typeof window !== 'undefined') {
      if (window.localStorage.getItem("star")) {
        return true
      }
      return false
    }
    return false
  }

  console.log(hasStarred())

  return (
    <div>
      <Container maxW="container.lg" pt={16}>
        <HStack justifyContent="space-between">
          <Heading>Startrack app</Heading>
          <a href="https://startrack.vercel.app/api/star/jacobhq/stage-t-startrack?returnTo=https://jacobhq-stage-t-startrack-p9r99rwxhrj49-3000.githubpreview.dev/?starDone=true">
            <IconButton aria-label='Star on GitHub' icon={<StarIcon />} color={hasStarred() === true ? yellow : "blue.700"} variant="ghost" />
          </a>
        </HStack>
      </Container>
    </div>
  )
}

export default Home
