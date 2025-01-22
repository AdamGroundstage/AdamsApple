import { useQuery } from '@tanstack/react-query'
import { getProducts } from '../api/fetchCategories'

export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: () => getProducts('')
  })
}
