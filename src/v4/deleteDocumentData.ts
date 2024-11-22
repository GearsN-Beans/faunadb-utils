import { Delete, Ref, Collection } from 'faunadb';
import { SingleDocResult } from '../types/types';
import { faunaClient } from './setFaunaSecret';

export const deleteDocumentData = async (
	collection: string,
	docId: string
): Promise<SingleDocResult> => {
	return await faunaClient.query(Delete(Ref(Collection(collection), docId)));
};
