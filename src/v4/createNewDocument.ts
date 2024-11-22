import { Collection, Create } from 'faunadb';
import { SingleDocResult } from '../types/v4';
import { faunaClient } from './setFaunaSecret';

export const createNewDocument = async (
	data: unknown,
	collection: string
): Promise<SingleDocResult> => {
	return await faunaClient.query(
		Create(Collection(collection), {
			data
		})
	);
};
