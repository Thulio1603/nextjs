import { setuprServer } from 'msw/node'
import { handlers } from './handlers'

export const server = setuprServer(...handlers)