import { getPokemon } from '../../services/pokemon';
import handler from './handler'

export default handler()
  .get(async (req, res) => {
    // const { cookie } = req.headers;
    const { id } = req.query
    try {
      if (id) {
        const response = await getPokemon(id)
        res.status(200).json(response)
      } else {
        return res.status(400).json('Empty id')
      }
    } catch (error: any) {
      res.status(error?.response?.status || 404).json({ message: error?.message })
    }
  })