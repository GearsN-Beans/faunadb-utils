import { Paginate, Match, Index } from 'faunadb';
import { faunaClient } from './setFaunaSecret';
import { IndexResult } from './types/types';

// FQL v4
export const getDataByIndexWithValueSet = async (
	index: string,
	indexTerm?: string
): Promise<IndexResult> => {
	const indexQuery = indexTerm
		? Match(Index(index), indexTerm)
		: Match(Index(index));

	return await faunaClient.query(Paginate(indexQuery));
};

// TODO FQL v10 for indexes is different
