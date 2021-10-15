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
    try {
        const result = await getMarketData(marketId)
        if (result.error)
            res.status(404).json(result)
        else
            res.status(200).json(result)
    } catch (error) {
        res.status(500).json({ error })
    }
}

export async function getMarketData(marketId: string): Promise<any> {
    const marketAddress = new PublicKey(marketId)
    const ifMarketExists = await CONNECTION.getAccountInfo(marketAddress);
    if (!ifMarketExists) {
      return { error : 'Market not found'}
    }

    const market = await Market.load(CONNECTION, marketAddress, {}, SERUM_V3_PROGRAM_ADDRESS)
    const fills = await market.loadFills(CONNECTION)

    let lowest = Number.MAX_SAFE_INTEGER
    let highest = 0
    let totalSize = 0
    let sortedPrices: string[] = []
    let date = new Date()

    const marketData = fills
        .filter(f => f.side === 'buy')
            .map(f => {
                date.setDate(date.getDate()-1)
                if (lowest > f.price) lowest = f.price
                if (highest < f.price) highest = f.price
                totalSize += f.size
                sortedPrices.push(f.price)
                let myData = {
                    'orderId': f.orderId.toString(),
                    'price': f.price,
                    'size': f.size,
                    'timestamp': date.valueOf()
                }
                return myData
            })

    sortedPrices.sort()

    return {
        marketId: marketId,
        totalFillSize : marketData.length,
        totalVolume : totalSize,
        recentFills : marketData,
        sortedPriceFills : sortedPrices,
        allTimeHigh : highest,
        allTimeLow : (lowest === Number.MAX_SAFE_INTEGER) ? 0 : lowest,
        uniqueHolders : randomIntFromInterval(1, totalSize)
    }
}
