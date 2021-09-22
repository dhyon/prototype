import type { NextApiRequest, NextApiResponse } from 'next'
import { Account, Connection, PublicKey } from '@solana/web3.js';
import { Market } from '@project-serum/serum';

type Data = {
    name: string
}

let connection = new Connection('https://solana-api.projectserum.com');

// mainnet program id
let programAddress = new PublicKey("9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin");

export default async (
    req: NextApiRequest,
    res: NextApiResponse<Data>
) => {
    const marketId = req.query.marketId as string
    let marketAddress = new PublicKey(marketId);
    let market = await Market.load(connection, marketAddress, {}, programAddress);

    res.status(200).json({ name: marketId })
    // TODO: this should return data on the specific marketId

    // fetch all fills for item with this id
    // determine total volume and attach timestamps to fills
    // fetch more data from galaxy url?

}
