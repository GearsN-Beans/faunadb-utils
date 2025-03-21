import { Get, Ref, Collection } from 'faunadb';
import { SingleDocResult } from '../types/v4';
import { faunaClient } from './setFaunaSecret';

/**
 * FQL v4
 * @param collection string
 * @param id string
 */
export const getRawDataById = async (
	collection: string,
	id: string
): Promise<SingleDocResult> => {
	return await faunaClient.query(Get(Ref(Collection(collection), id)));
};
