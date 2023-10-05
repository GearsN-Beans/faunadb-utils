import { Paginate, Match, Index, Lambda, Select, Get, Var, Map } from 'faunadb'
import { faunaClient } from './setFaunaSecret'
import { DocumentDataWithId } from './types/types'

export const getDataByIndex = async (
	index: string,
	indexTerm: string
): Promise<DocumentDataWithId> => {
	return await faunaClient.query(
		Map(
			Paginate(Match(Index(index), indexTerm)),
			Lambda('ref', {
				id: Select(['ref', 'id'], Get(Var('ref'))),
				data: Select(['data'], Get(Var('ref'))),
				// NOTE merges the id with the data within one obj - not sure if i want to do this
				// dataTwo: Merge(Select(['data'], Get(Var('ref'))), {
				// 	id: Select(['ref', 'id'], Get(Var('ref'))),
				// }),
				ts: Select(['ts'], Get(Var('ref')))
			})
		)
	)
}
