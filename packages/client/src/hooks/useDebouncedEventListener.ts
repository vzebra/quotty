import { useEffect, SyntheticEvent } from 'react'
import { debounce } from '@helpers/misc'

type EventHandler = (event: SyntheticEvent<HTMLElement>) => unknown

const useDebouncedEventListener = (
  eventType: string,
  eventHandler: EventHandler,
  debounceLag: number
) => {
  useEffect(() => {
    window.addEventListener(eventType, debounce(eventHandler, debounceLag))
    return () => {
      window.removeEventListener(eventType, debounce(eventHandler, debounceLag))
    }
  }, [])
}

export default useDebouncedEventListener
