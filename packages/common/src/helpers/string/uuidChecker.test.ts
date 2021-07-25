import { uuidChecker } from './uuidChecker'

describe('[helpers/string/uuidChecker]', () => {
  it('Returns the error if improper data format is passed', () => {
    const input = 42
    const helper = { error: jest.fn() }

    /* eslint-disable @typescript-eslint/ban-ts-comment */
    // @ts-ignore
    uuidChecker(input, helper)
    /* eslint-enable */
    expect(helper.error).toBeCalledWith(
      'wrong input data type (string is expected)'
    )
  })
  it('Returns the error if input string is of wrong length', () => {
    const input = '02646ac0-d9d7-4133-85c9-de392491de769'
    const helper = { error: jest.fn() }

    uuidChecker(input, helper)

    expect(helper.error).toBeCalledWith(
      'wrong input string length (has to be 36 chars)'
    )
  })
  it('Returns the error if input string contains unexpected characters', () => {
    const input = '02646ac0-d9d7-4133-85c9-de392491dg76'
    const helper = { error: jest.fn() }

    uuidChecker(input, helper)

    expect(helper.error).toBeCalledWith(
      'input value contains unexpected character(s) (a-f, 0-9 or dash are allowed)'
    )
  })
  it('Returns the error if character group number is wrong', () => {
    const input = '02646ac0-d9d7-4133-85c9-de392-91de76'
    const helper = { error: jest.fn() }

    uuidChecker(input, helper)

    expect(helper.error).toBeCalledWith(
      'wrong number of character groups (characters have to be organized into 5 dash-separated groups)'
    )
  })
  it('Returns the error if character group lengths are wrong', () => {
    const input = '02646ac0d9d7--4133-85c9-de392491de76'
    const helper = { error: jest.fn() }

    uuidChecker(input, helper)

    expect(helper.error).toBeCalledWith(
      'some character group is of wrong size (groups of 8, 3, 3, 3 and 12 chars long are expected)'
    )
  })
  it('Returns the source value if properly formatted', () => {
    const inputValue = '02646ac0-d9d7-4133-85c9-de392491de76'
    const helper = { error: jest.fn() }
    const evaluatedOutput = uuidChecker(inputValue, helper)

    expect(helper.error).not.toBeCalled()
    expect(evaluatedOutput).toEqual(inputValue)
  })
})
