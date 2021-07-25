export const deepFreeze = (obj: unknown) => {
  if (typeof obj !== 'object' || obj === null) return
  Object.freeze(obj)
  Object.keys(obj).forEach((key: keyof typeof obj) => deepFreeze(obj[key]))
}
