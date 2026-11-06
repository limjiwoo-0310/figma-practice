import { useEffect, useState } from 'react'

// 현재 시각을 1초마다 새로 알려 준다. 마감 시각이 지나면 화면이 바로 바뀌게 하는 데 쓴다.
export function useNow() {
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(timer)
  }, [])

  return now
}
