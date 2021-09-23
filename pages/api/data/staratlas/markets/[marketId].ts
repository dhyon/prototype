import type { NextApiRequest, NextApiResponse } from 'next'
import { Connection, PublicKey } from '@solana/web3.js';
import { Market } from '@project-serum/serum';
import { getSortedRoutes } from 'next/dist/shared/lib/router/utils';

type Data = {
    marketId : string;
    totalFillSize : number;
    totalVolume: number;
    // id, timestamp, price, size, side
    arrayData : Array<[id :string, timestamp :number, price : number, size : number, side : string]>;
    sortedPriceFills : Array<any>;
    allTimeHigh : number;
    allTimeLow : number;
};

const CONNECTION = new Connection('https://solana-api.projectserum.com');
// mainnet program id
const PROGRAM_ADDRESS = new PublicKey("9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin");

export default async (
    req: NextApiRequest,
    res: NextApiResponse<Data>
) => {
    const MARKET_ID = req.query.marketId as string
    //const MARKET_ID_TEST = "8vycGWEqhvnTJR4aTcN2TvtUUNtLXoCTrpCGtoD8R4bo"; 
    
    let marketAddress = new PublicKey(MARKET_ID);
    // check if marketid doesnt exist on mainnet
    const ifMarketExists = await CONNECTION.getAccountInfo(marketAddress);
    if (ifMarketExists === null) {
      throw new Error('Could not find market');
    }
    
    let market = await Market.load(CONNECTION, marketAddress, {}, PROGRAM_ADDRESS);

    // default initialize
    let marketData : Data = {
        marketId : MARKET_ID,
        totalFillSize : 0, 
        totalVolume : 0,
        arrayData : [],  
        sortedPriceFills : [],
        allTimeHigh : 0,
        allTimeLow : 0,
    };
    

    // Retrieving fills
    for (let fill of await market.loadFills(CONNECTION)) {
        console.log(fill.orderId, fill.price, fill.size, fill.side);
        marketData.totalFillSize++;
        marketData.arrayData.push([fill.orderId, Date.now() + 10,fill.price, fill.size, fill.side]);
        if(fill.side === "buy")
            marketData.sortedPriceFills.push(fill.price);
    }
    // processing data metrics
    marketData.sortedPriceFills.sort();
    for (var i in marketData.sortedPriceFills) {
        marketData.totalVolume += marketData.sortedPriceFills[i];
    }
    let fillSize = marketData.sortedPriceFills.length;
    marketData.allTimeHigh = marketData.sortedPriceFills[fillSize-1];
    marketData.allTimeLow = marketData.sortedPriceFills[0];
    
    res.status(200).json({ marketData })
}
