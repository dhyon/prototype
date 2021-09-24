import type { NextApiRequest, NextApiResponse } from 'next'
import { Connection, PublicKey } from '@solana/web3.js'
import { Market } from '@project-serum/serum'
import { getSortedRoutes } from 'next/dist/shared/lib/router/utils'


const CONNECTION = new Connection('https://solana-api.projectserum.com')
// mainnet program id
const SERUM_V3_PROGRAM_ADDRESS = new PublicKey("9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin")

function randomIntFromInterval(min : number, max : number) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
  
  
export default async (
    req: NextApiRequest,
    res: NextApiResponse
) => {
    const marketId = req.query.marketId as string

    let marketAddress = new PublicKey(marketId)
    let market = await Market.load(CONNECTION, marketAddress, {}, SERUM_V3_PROGRAM_ADDRESS)
    const fills = await market.loadFills(CONNECTION)

    let lowest = Number.MAX_SAFE_INTEGER
    let highest = 0
    let totalCalculatedVolume = 0
    let totalSize = 0
    var sortedPrices:string[] = [] 
    let fakeDate = new Date()
    

    const marketData = fills
    .filter(f => f.side === 'buy')
    .map(f => {
        fakeDate.setDate(fakeDate.getDate()-1)
        if(lowest > f.price)
            lowest = f.price
        if(highest < f.price)
            highest = f.price
        totalSize+= f.size
        totalCalculatedVolume+= f.price
        sortedPrices.push(f.price)
        let myData = {
            'orderId': f.orderId,
            'price': f.price,
            'size': f.size,
            'timestamp': fakeDate.valueOf()
        }
        return myData
    })
    totalCalculatedVolume = totalSize / marketData.length
    sortedPrices.sort()
    let currUniqueHolders = randomIntFromInterval(totalCalculatedVolume, totalSize)
    res.status(200).json(
    { 
    marketid: marketId, 
    totalFillSize : marketData.length,
    totalVolume : totalCalculatedVolume, 
    recentFills : marketData, 
    sortedPriceFills : sortedPrices,
    allTimeHigh : highest, 
    allTimeLow : lowest, 
    uniqueHolders : currUniqueHolders 
    })

}
