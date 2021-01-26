import { getInput, setFailed } from '@actions/core'
import itParam from 'mocha-param'
import { run } from '../index'

interface FixtureParams {
  [key: string]: string,
}

interface Fixture {
  params: FixtureParams
  title: string
}

describe('Main runner', () => {
  let setFailedMocked: jest.MockedFunction<typeof setFailed>
  let getInputMocked: jest.MockedFunction<typeof getInput>

  beforeEach(() => {
    getInputMocked = jest.fn()
    setFailedMocked = jest.fn()
  })
  afterEach(() => {
    getInputMocked.mockReset()
    setFailedMocked.mockReset()
  })

  const fixture: Fixture[] = [
    {
      params: {
        'token': 'test-token',
        'to': 'test-to',
        'message': 'test-message',
        'file': ''
      },
      title: 'message'
    },
    {
      params: {
        'token': 'test-token',
        'to': 'test-to',
        'message': '',
        'file': 'test-file'
      },
      title: 'file'
    }
  ]
  itParam('should send ${value.title}', fixture, async ({ params }) => {
    getInputMocked.mockImplementation((name: string) => params[name])
    await run(
      getInputMocked as typeof getInput,
      setFailedMocked as typeof setFailed
    )
    Object.keys(params).forEach((p) => expect(getInputMocked).toBeCalledWith(p))
  })

  it('should run with default parameters', async () => {
    await run(
      getInputMocked as typeof getInput,
      setFailedMocked as typeof setFailed
    )
  })

  itParam(
    'should print error (${value})', ['token', 'to'], async (arg: string) => {
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
})
