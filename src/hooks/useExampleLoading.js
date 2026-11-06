import { useEffect, useState } from 'react'

// 실제 API가 없어 불러오는 시간을 흉내 낸다. API를 붙이면 이 훅을 실제 요청으로 바꾼다.
const EXAMPLE_LOADING_MS = 400

export function useExampleLoading() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), EXAMPLE_LOADING_MS)
    return () => clearTimeout(timer)
  }, [])

  return isLoading
}
