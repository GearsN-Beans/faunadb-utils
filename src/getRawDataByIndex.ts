import { Paginate, Match, Index, Lambda, Get, Var, Map } from 'faunadb'
import { faunaClient } from './setFaunaSecret'
import { RawDocumentRefs } from './types/types'

export const getRawDataByIndex = async (
	index: string,
	indexTerm: string
): Promise<RawDocumentRefs> => {
	return await faunaClient.query(
		Map(Paginate(Match(Index(index), indexTerm)), Lambda('X', Get(Var('X'))))
	)
}
