import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    name: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const marketId = req.query.marketId as string
    res.status(200).json({ name: marketId })
    // TODO: this should return data on the specific marketId
}
