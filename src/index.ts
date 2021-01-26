import { getInput, setFailed } from '@actions/core'
import ICQ from 'icq-bot'

const INPUT_TOKEN = 'token'
const INPUT_TO = 'to'
const INPUT_MESSAGE = 'message'

export const run = async (
  gi: typeof getInput = getInput, sf: typeof setFailed = setFailed
) => {
  try {
    const token = gi(INPUT_TOKEN)
    const bot = new ICQ.Bot(token)
    bot.sendText(gi(INPUT_TO), gi(INPUT_MESSAGE))
  } catch (e) {
    sf((<Error>e).message)
  }
}

run()
