import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

interface ScrollSpyComponentProps {
  ids: string[]
  currentId: string
  onChange: (newId: string) => void
  percentageIntersectionThreshold?: number
}

const ScrollSpyComponent: React.FC<ScrollSpyComponentProps> = ({
  ids,
  currentId,
  onChange,
  percentageIntersectionThreshold = 75,
}) => {
  const router = useRouter()

  useEffect(() => {
    const observers = ids.map((id) => {
      const element = document.getElementById(id)

      if (element) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              const newHash = `#${id}`

              if (newHash !== currentId) {
                onChange(newHash)
              }
            }
          },
          { threshold: percentageIntersectionThreshold / 100 },
        )

        observer.observe(element)

        return observer
      }
    })

    return () => {
      observers.forEach((observer) => observer && observer.disconnect())
    }
  }, [currentId, ids, onChange, percentageIntersectionThreshold, router])

  return null
}

export default ScrollSpyComponent
