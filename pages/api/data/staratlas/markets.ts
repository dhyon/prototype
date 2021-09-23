import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { CacheContainer } from 'node-ts-cache'
import { MemoryStorage } from 'node-ts-cache-storage-memory'

const STAR_ATLAS_NFT_URL = 'https://galaxy.staratlas.com/nfts'

const CACHE = new CacheContainer(new MemoryStorage())

/**
 * Returns catalog of Star Atlas NFT items as a list
 *
 * e.g. localhost:3000/api/data/staratlas/markets?category=cosmetic
 *
 * query params:
 * category = structure | cosmetic | access | ship | crew | equipment
 */
export default async (
    req: NextApiRequest,
    res: NextApiResponse
) => {
    // check in-memory cache first
    const maybeCatalog = await CACHE.getItem('catalog')

    if (maybeCatalog) {
        console.log("Returning cached catalog")
        res.status(200).json(applyFilter(maybeCatalog as Array<any>, req.query))
        return
    }

    await axios
        .get(STAR_ATLAS_NFT_URL)
        .then(result => {
            CACHE.setItem('catalog', result.data, { ttl: 600 })
            res.status(200).json(applyFilter(result.data as Array<any>, req.query))
        })
        .catch(({ err }) => {
            res.status(404).json({ err })
        })
}

function applyFilter(catalog: Array<any>, queryParams: any) {
    console.log(queryParams)
    let result = catalog
    if (queryParams.category)
        result = result.filter(item => item.attributes.category === queryParams.category)
    return result
}
