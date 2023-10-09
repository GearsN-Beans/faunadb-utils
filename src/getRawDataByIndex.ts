import { Paginate, Match, Index, Lambda, Get, Var, Map } from 'faunadb'
import { faunaClient } from './setFaunaSecret'

export const getRawDataByIndex = async (index: string, indexTerm: string) => {
	return await faunaClient.query(
		Map(Paginate(Match(Index(index), indexTerm)), Lambda('X', Get(Var('X'))))
	)
}
