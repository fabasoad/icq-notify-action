import * as core from '@actions/core'
import fs from 'node:fs'
import ICQ from 'icq-bot'
import { vi, describe, beforeEach, test, expect } from 'vitest'
import { run } from '../index'

vi.mock('icq-bot')

vi.mock('@actions/core', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@actions/core')>()),
  getInput: vi.fn(),
  setFailed: vi.fn(),
}))

vi.mock('node:fs', async (importOriginal) => {
  const actual = await importOriginal<typeof import('node:fs')>()
  return {
    ...actual,
    default: {
      ...actual,
      existsSync: vi.fn(),
    },
  }
})

type MockedICQ = typeof ICQ & {
  Bot: ReturnType<typeof vi.fn>
}

describe('index', () => {
  const MockedICQ = ICQ as MockedICQ
  const mockSendText = vi.fn()
  const mockSendFile = vi.fn()

  beforeEach(() => {
    MockedICQ.Bot.mockImplementation(class {
      sendText = mockSendText
      sendFile = mockSendFile
    })
  })

  function mockInputs(message: string, file: string): void {
    vi.mocked(core.getInput).mockImplementation((key: string) => {
      switch (key) {
        case 'token': return 'test-token'
        case 'to': return 'test-to'
        case 'message': return message
        case 'file': return file
        default: return ''
      }
    })
  }

  test('should send message and file', async () => {
    mockInputs('test-message', 'test-file')
    vi.mocked(fs.existsSync).mockReturnValue(true)

    await run()

    expect(MockedICQ.Bot).toHaveBeenCalledWith('test-token')
    expect(mockSendText).toHaveBeenCalledWith('test-to', 'test-message')
    expect(mockSendFile).toHaveBeenCalledWith('test-to', Buffer.from('test-file').toString('base64'), 'test-file')
  })

  test('should send message only when file is not provided', async () => {
    mockInputs('test-message', '')

    await run()

    expect(MockedICQ.Bot).toHaveBeenCalledWith('test-token')
    expect(mockSendText).toHaveBeenCalledWith('test-to', 'test-message')
    expect(mockSendFile).not.toHaveBeenCalled()
  })

  test('should send file only when message is not provided', async () => {
    mockInputs('', 'test-file')
    vi.mocked(fs.existsSync).mockReturnValue(true)

    await run()

    expect(MockedICQ.Bot).toHaveBeenCalledWith('test-token')
    expect(mockSendText).not.toHaveBeenCalled()
    expect(mockSendFile).toHaveBeenCalledWith('test-to', Buffer.from('test-file').toString('base64'), 'test-file')
  })

  test('should not send anything when neither message nor file is provided', async () => {
    mockInputs('', '')

    await run()

    expect(MockedICQ.Bot).toHaveBeenCalledWith('test-token')
    expect(mockSendText).not.toHaveBeenCalled()
    expect(mockSendFile).not.toHaveBeenCalled()
  })

  test('should call setFailed when file does not exist', async () => {
    mockInputs('', 'non-existent-file')
    vi.mocked(fs.existsSync).mockReturnValue(false)

    await run()

    expect(core.setFailed).toHaveBeenCalledWith("File non-existent-file doesn't exist")
    expect(mockSendFile).not.toHaveBeenCalled()
  })

  test('should call setFailed when sending message fails', async () => {
    mockInputs('test-message', '')
    mockSendText.mockRejectedValue(new Error('ICQ send error'))

    await run()

    expect(core.setFailed).toHaveBeenCalledWith('ICQ send error')
  })
})
