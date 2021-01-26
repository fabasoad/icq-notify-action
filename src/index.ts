import { getInput, setFailed } from '@actions/core'
import fs from 'fs'
import ICQ from 'icq-bot'

const INPUT_TOKEN = 'token'
const INPUT_TO = 'to'
const INPUT_MESSAGE = 'message'
const INPUT_FILE = 'file'

export const run = async (
  gi: typeof getInput = getInput,
  sf: typeof setFailed = setFailed
) => {
  try {
    const token = gi(INPUT_TOKEN)
    const bot = new ICQ.Bot(token)
    const to = gi(INPUT_TO)

    const message = gi(INPUT_MESSAGE)
    if (message) {
      bot.sendText(to, message)
    }

    const file = gi(INPUT_FILE)
    if (file) {
      if (!fs.existsSync(file)) {
        throw new Error(`File ${file} doesn't exist`)
      }
      bot.sendFile(to, Buffer.from(file).toString('base64'), file)
    }
  } catch (e) {
    sf((<Error>e).message)
  }
}

run()
