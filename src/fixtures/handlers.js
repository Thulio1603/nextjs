import { rest } from 'msw'

export const handlers = [
  rest.get('localhost:3000/api/??', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(data))
  })
]