export const debounce = (func: (...args: unknown[]) => void, delay: number) => {
  let delayTimer: ReturnType<typeof setTimeout>

  return (...args: unknown[]) => {
    const delayedFuncCall = () => {
      clearTimeout(delayTimer)
      func(...args)
    }

    clearTimeout(delayTimer)
    delayTimer = setTimeout(delayedFuncCall, delay)
  }
}
