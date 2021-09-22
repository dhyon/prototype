import type { NextApiRequest, NextApiResponse } from 'next'
import { Account, Connection, PublicKey } from '@solana/web3.js';
import { Market } from '@project-serum/serum';

type Data = {
    name: string
}
let connection = new Connection('https://solana-api.projectserum.com');

let marketAddress = new PublicKey('EJ8MX3M4xsgAn8uZkLNyp76zAqn9uY18NtitASoYoRyS');
// mainnet program id
let programAddress = new PublicKey("9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin");

export default async (
    req: NextApiRequest,
    res: NextApiResponse<Data>
) => {
    console.log(req.query)
    //let market = await Market.load(connection, marketAddress, {}, programAddress);

    res.status(200).json({ name: 'lotsa markets' })
    // TODO: this should return data on all existing markets
    // Note: data source needs to be cached
    // query params:
    // category = structure | cosmetic | access | ship | crew | equipment

    // // Fetching orderbooks
    // let bids = await market.loadBids(connection);
    // let asks = await market.loadAsks(connection);
    // // L2 orderbook data
    // for (let [price, size] of bids.getL2(20)) {
    // console.log(price, size);
    // }

    // // Retrieving fills
    // for (let fill of await market.loadFills(connection)) {
    //     console.log(fill.orderId, fill.price, fill.size, fill.side);
    // }

    let url = 'https://galaxy.staratlas.com/nfts';

    fetch(url)
    .then(res => res.json())
    .then((out) => {
    console.log(out);
    })
    .catch(err => { throw err });

    // fetch url data
    // make data struct with name, marketid, total supply and attributes


  
}
