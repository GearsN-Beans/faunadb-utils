import { Paginate, Match, Index } from 'faunadb';
import { IndexResult } from '../types/v4';
import { faunaClient } from './setFaunaSecret';

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
