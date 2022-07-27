import { getPokemons } from '../../services/pokemon';
import handler from './handler'

export default handler()
  .get(async (req, res) => {
    const { cookie } = req.headers;
    console.log(cookie)
    try {
      const response = await getPokemons()
      res.status(200).json(response)
    } catch (error: any) {
      res.status(error?.response?.status || 404).json({ message: error?.message })
    }
  })