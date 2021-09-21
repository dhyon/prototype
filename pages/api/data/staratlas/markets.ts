import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    name: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    console.log(req.query)
    res.status(200).json({ name: 'lotsa markets' })
    // TODO: this should return data on all existing markets
    // Note: data source needs to be cached
    // query params:
    // category = structure | cosmetic | access | ship | crew | equipment
}
