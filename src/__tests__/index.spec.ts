import ICQ from 'icq-bot'
import { vi, describe, beforeEach, test, expect } from 'vitest'
import { run } from '../index'

vi.mock('icq-bot')

type MockedICQ = typeof ICQ & {
  Bot: ReturnType<typeof vi.fn>
}

vi.mock('@actions/core', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@actions/core')>()),
  getInput: vi.fn((key: string) => {
    switch (key) {
      case 'token': return 'test-token'
      case 'to': return 'test-to'
      case 'message': return 'test-message'
      case 'file': return 'test-file'
      default: return 'unexpected'
    }
  }),
}))

vi.mock('node:fs', async (importOriginal) => {
  const actual = await importOriginal<typeof import('node:fs')>()
  return {
    ...actual,
    default: {
      ...actual,
      existsSync: vi.fn((file: string) => file === 'test-file'),
    },
  }
})

describe('index', () => {
  const MockedICQ = ICQ as MockedICQ
  const mockSendText = vi.fn()
  const mockSendFile = vi.fn()

  beforeEach(() => {
    vi.clearAllMocks()

    MockedICQ.Bot.mockImplementation(class {
      sendText = mockSendText
      sendFile = mockSendFile
    })
  })

  test('should send message and file', async () => {
    await run()
    expect(MockedICQ.Bot).toHaveBeenCalledWith('test-token')
    expect(mockSendText).toHaveBeenCalledWith('test-to', 'test-message')
    expect(mockSendFile).toHaveBeenCalledWith('test-to', Buffer.from('test-file').toString('base64'), 'test-file')
  })
})
