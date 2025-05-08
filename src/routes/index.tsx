import MoviesPage from '@/components/pages/movie'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: MoviesPage,
  
})
