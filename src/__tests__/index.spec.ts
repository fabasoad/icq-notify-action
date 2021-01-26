import { getInput, setFailed } from '@actions/core'
import itParam from 'mocha-param'
import { run } from '../index'

describe('Main runner', () => {
  let setFailedMocked: jest.MockedFunction<typeof setFailed>
  let getInputMocked: jest.MockedFunction<typeof getInput>

  beforeEach(() => {
    getInputMocked = jest.fn()
    setFailedMocked = jest.fn()
  })

  it('should run successfully', async () => {
    await run(
      getInputMocked as typeof getInput,
      setFailedMocked as typeof setFailed
    )
  })

  itParam(
    'should print error (${value})',
    ['token', 'to', 'message'],
    async (arg: string) => {
      const expectedMessage: string = '0a77hs2u'
      getInputMocked.mockImplementation((name: string) => {
        if (arg === name) {
          throw new Error(expectedMessage + name)
        }
        return name
      })
      await run(
        getInputMocked as typeof getInput,
        setFailedMocked as typeof setFailed
      )
      expect(setFailedMocked.mock.calls.length).toBe(1)
      expect(setFailedMocked.mock.calls[0][0]).toBe(expectedMessage + arg)
    })

  afterEach(() => {
    getInputMocked.mockReset()
    setFailedMocked.mockReset()
  })
})
