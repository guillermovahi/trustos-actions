import { getInput, setOutput, setFailed } from '@actions/core'
import { login } from './trustos'

async function run() {
  try {
    const directory = getInput('directory')
    const apiUser = getInput('api_user', { required: true })
    const apiPassword = getInput('api_password', { required: true })

    const token = login(apiUser, apiPassword)
    setOutput('token', token)
  } catch (error) {
    setFailed(error.message)
  }
}

run()
