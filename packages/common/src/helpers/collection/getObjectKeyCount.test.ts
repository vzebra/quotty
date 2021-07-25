import { getObjectKeyCount } from './getObjectKeyCount'

describe('[helpers/collection/getObjectKeyCount]', () => {
  it('Should return undefined when no parameters passed in', () => {
    const givenInputValue = undefined
    const expectedOutput = undefined
    const evaluatedOutput = getObjectKeyCount(givenInputValue)

    expect(evaluatedOutput).toEqual(expectedOutput)
  })
  it('Should return undefined when null passed in', () => {
    const givenInputValue = null
    const expectedOutput = undefined
    const evaluatedOutput = getObjectKeyCount(givenInputValue)

    expect(evaluatedOutput).toEqual(expectedOutput)
  })
  it('Should return 0 when empty object passed in', () => {
    const givenInputValue = {}
    const expectedOutput = 0
    const evaluatedOutput = getObjectKeyCount(givenInputValue)

    expect(evaluatedOutput).toEqual(expectedOutput)
  })
  it('Should count object keys', () => {
    const givenInputValue = { foo: undefined }
    const expectedOutput = 1
    const evaluatedOutput = getObjectKeyCount(givenInputValue)

    expect(evaluatedOutput).toEqual(expectedOutput)
  })
})
