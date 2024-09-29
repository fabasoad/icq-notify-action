import { getInput, setFailed } from '@actions/core'
import fs from 'fs'
import ICQ from 'icq-bot'

const INPUT_TOKEN = 'token'
const INPUT_TO = 'to'
const INPUT_MESSAGE = 'message'
const INPUT_FILE = 'file'

export const run = async () => {
  try {
    const token = getInput(INPUT_TOKEN)
    const bot = new ICQ.Bot(token)
    const to = getInput(INPUT_TO)

    const message = getInput(INPUT_MESSAGE)
    if (message) {
      await bot.sendText(to, message)
    }

    const file = getInput(INPUT_FILE)
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
