import ShortcutError from './ShortcutError'
import { Box } from './Box'

export default function ErrorMessage({ code }) {
  let title = 'five hundred'
  let description = "Something isn't right."

  if (code === 404) {
    title = "404...This page doesn't exist."
    description = "But here's a joke: What's the object-oriented way to become wealthy? Inheritance."
  }

  return (
    <Box css={{ textAlign: 'center' }}>
      <h1>{title}</h1>
      <ShortcutError />
      <p>{description}</p>
    </Box>
  )
}
