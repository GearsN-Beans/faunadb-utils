import { Paginate, Match, Index, Lambda, Select, Get, Var, Map } from 'faunadb';
import { DocumentDataWithId } from '../types/v4';
import { faunaClient } from './setFaunaSecret';
/**
 * FQL v4
 * @param index
 * @param indexTerm
 */
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
	);
};
