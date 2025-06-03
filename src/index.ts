import { getInput, setFailed } from '@actions/core'
import fs from 'fs'
import ICQ from 'icq-bot'

export async function run(): Promise<void> {
  try {
    const token: string = getInput('token', { required: true, trimWhitespace: true })
    const bot = new ICQ.Bot(token)
    const to: string = getInput('to', { required: true, trimWhitespace: true })

    const message: string = getInput('message', { required: false, trimWhitespace: true })
    if (message) {
      await bot.sendText(to, message)
    }

    const file: string = getInput('file', { required: false, trimWhitespace: true })
    if (file) {
      if (!fs.existsSync(file)) {
        throw new Error(`File ${file} doesn't exist`)
      }
      await bot.sendFile(to, Buffer.from(file).toString('base64'), file)
    }
  } catch (e) {
    setFailed((<Error>e).message)
  }
}

run()
