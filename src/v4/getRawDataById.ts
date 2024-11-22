import { Get, Ref, Collection } from 'faunadb';
import { SingleDocResult } from '../types/types';
import { faunaClient } from './setFaunaSecret';

export const getRawDataById = async (
	collection: string,
	id: string
): Promise<SingleDocResult> => {
	return await faunaClient.query(Get(Ref(Collection(collection), id)));
};
