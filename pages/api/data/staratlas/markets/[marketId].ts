import type { NextApiRequest, NextApiResponse } from 'next'
import { Connection, PublicKey } from '@solana/web3.js';
import { Market } from '@project-serum/serum';
import { getSortedRoutes } from 'next/dist/shared/lib/router/utils';


const CONNECTION = new Connection('https://solana-api.projectserum.com');
// mainnet program id
const SERUM_V3_PROGRAM_ADDRESS = new PublicKey("9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin");

export default async (
    req: NextApiRequest,
    res: NextApiResponse
) => {
    const marketId = req.query.marketId as string

    let marketAddress = new PublicKey(marketId);
    // check if marketid doesnt exist on mainnet
    // const ifMarketExists = await CONNECTION.getAccountInfo(marketAddress);
    // if (!ifMarketExists) {
    //     res.status(400).json({ error: 'Could not find market' });
    // }
    
    let market = await Market.load(CONNECTION, marketAddress, {}, SERUM_V3_PROGRAM_ADDRESS);
    const fills = await market.loadFills(CONNECTION);

    let lowest = Number.MAX_SAFE_INTEGER;
    let highest = 0;
    let totalCalculatedVolume = 0;
    let totalCalculatedFillSize = 0;
    var sortedPrices:string[] = [] 

    const marketData = fills
    .filter(f => f.side === 'buy')
    .map(f => { 
        if(lowest > f.price)
            lowest = f.price;
        if(highest < f.price)
            highest = f.price;
        totalCalculatedFillSize++;
        totalCalculatedVolume+= f.price;
        sortedPrices.push(f.price);
        return { id : f.orderId, price : f.price, size : f.size}
    });

    sortedPrices.sort();
    res.status(200).json(  { marketid: marketId, totalFillSize : totalCalculatedFillSize,
    totalVolume : totalCalculatedVolume, aggregatedData : marketData, sortedPriceFills : sortedPrices,
    allTimeHigh : highest, allTimeLow : lowest } );
}