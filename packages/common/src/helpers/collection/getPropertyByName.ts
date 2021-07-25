export const getPropertyByName = (propertyName: string) => (
  obj: Record<typeof propertyName, any>
) => (typeof obj === 'object' && obj !== null ? obj[propertyName] : undefined)
