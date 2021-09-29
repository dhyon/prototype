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
export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const catalog = await getAllStarAtlasMarkets(req.query)
    res.status(200).json(catalog)
  } catch (error) {
    res.status(500).json({ error })
  }
}

function applyFilter(catalog: Array<any>, queryParams: any): Array<any> {
  var result = catalog
  if (queryParams.category)
    result = result.filter((item) => item.attributes.category === queryParams.category)
  return result
}

export async function getAllStarAtlasMarkets(query: any = {}): Promise<Array<any>> {
  // check in-memory cache first
  const maybeCatalog = await CACHE.getItem('catalog')

  if (maybeCatalog) {
    console.log('Returning cached catalog')
    return applyFilter(maybeCatalog as Array<any>, query)
  }

  return await axios.get(STAR_ATLAS_NFT_URL).then(result => {
    CACHE.setItem('catalog', result.data, { ttl: 600 })
    return applyFilter(result.data as Array<any>, query)
  })
}
