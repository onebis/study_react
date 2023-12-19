import useSWR from 'swr'

type Posts = {
  userId: number
  id: number
  title: string
  body: string
}

const URL = 'https://jsonplaceholder.typicode.com/posts'

async function fetcher() {
  const response = await fetch(URL)
  if (!response.ok) {
    throw new Error('データの取得に失敗したためエラーが発生しました')
  }
  return response.json()
}

export const usePosts = () => {
  const { data, isLoading, error } = useSWR<Posts[]>(URL, fetcher)
  return {
    data,
    error,
    isLoading,
    isEmpty: data && data.length === 0,
  }
}
