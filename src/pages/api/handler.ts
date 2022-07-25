import { NextApiRequest, NextApiResponse } from 'next'
import nextConnect from 'next-connect'

export default function handler() {
  return nextConnect<NextApiRequest, NextApiResponse>({
    onError(error, req, res) {
      res.status(500).json({ error: `Server error. ${error.message}` })
    },
    onNoMatch(req, res) {
      res.status(405).json({ error: `Method ${req.method} Not Allowed` })
    },
  })
}
