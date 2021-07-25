export const getObjectKeyCount = (obj: unknown) =>
  typeof obj === 'object' && obj !== null ? Object.keys(obj).length : undefined
