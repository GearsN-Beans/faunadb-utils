import { Paginate, Match, Index } from 'faunadb'
import { faunaClient } from './setFaunaSecret'

export const getDataByIndexWithValueSet = async (
	index: string,
	indexTerm: string
) => {
	return await faunaClient.query(Paginate(Match(Index(index), indexTerm)))
}
