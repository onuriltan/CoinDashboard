import { config } from 'dotenv'

export const configureDotEnv = (): void => {
  config()
  let path
  switch (process.env.NODE_ENV) {
    case 'test':
      path = `${__dirname}/.env.test`
      break
    case 'production':
      path = `${__dirname}/.env.production`
      break
    case 'development':
      path = `${__dirname}/.env.development`
  }
  const result = config({ path })
  if (result.error) {
    throw new Error("Please define NODE_ENV system environment variable as 'development', 'test' or 'production'")
  } else {
    console.log(`System environment variables loaded from ${path.replace(__dirname, '')}`)
  }
}
