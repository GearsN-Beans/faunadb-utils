import { Paginate, Match, Index, Lambda, Get, Var, Map } from 'faunadb';
import { RawDocumentRefs } from '../types/types';
import { faunaClient } from './setFaunaSecret';

export const getRawDataByIndex = async (
	index: string,
	indexTerm: string
): Promise<RawDocumentRefs> => {
	return await faunaClient.query(
		Map(Paginate(Match(Index(index), indexTerm)), Lambda('X', Get(Var('X'))))
	);
};
