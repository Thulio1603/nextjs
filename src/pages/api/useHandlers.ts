import handler from './handler'

export default handler()
  .get(async (req, res) => {
    const { cookie } = req.headers;

    try {
      res.status(200).json('data')
    } catch (error: any) {
      res.status(error?.response?.status || 404).json({ message: error?.message })
    }
  })
  .post(async (req, res) => {
    const { cookie } = req.headers;

    try {
      res.status(200).json('data')
    } catch (error: any) {
      res.status(error?.response?.status || 404).json({ message: error?.message })
    }
  })