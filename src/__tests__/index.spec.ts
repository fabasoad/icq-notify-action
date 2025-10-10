import ICQ from 'icq-bot'
import { run } from '../index'

jest.mock('icq-bot')

type MockedICQ = jest.Mocked<typeof ICQ>

jest.mock('@actions/core', () => ({
  ...(jest.requireActual('@actions/core')),
  getInput: jest.fn((key: string) => {
    switch (key) {
      case 'token': return 'test-token'
      case 'to': return 'test-to'
      case 'message': return 'test-message'
      case 'file': return 'test-file'
      default: return 'unexpected'
    }
  }),
}))

jest.mock('fs', () => ({
  ...(jest.requireActual('fs')),
  existsSync: jest.fn((file: string) => file === 'test-file'),
}))

describe('index', () => {
  const MockedICQ = ICQ as MockedICQ
  const mockSendText = jest.fn()
  const mockSendFile = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()

    MockedICQ.Bot.mockImplementation(() => {
      return {
        sendText: mockSendText,
        sendFile: mockSendFile,
      // biome-ignore lint/suspicious/noExplicitAny: OK for testing
      } as any
    })
  })

  test('should send message and file', async () => {
    await run()
    expect(MockedICQ.Bot).toHaveBeenCalledWith('test-token')
    expect(mockSendText).toHaveBeenCalledWith('test-to', 'test-message')
    expect(mockSendFile).toHaveBeenCalledWith('test-to', Buffer.from('test-file').toString('base64'), 'test-file')
  })
})
