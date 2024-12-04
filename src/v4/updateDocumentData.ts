import { Let, Ref, Collection, Get, Var, Select, Update } from 'faunadb';
import { SingleDocResult } from '../types/v4';
import { faunaClient } from './setFaunaSecret';

/**
 * FQL v4
 * @param docId string
 * @param newData any
 * @param collection string
 */
export const updateDocumentData = async (
	docId: string,
	newData: any,
	collection: string
): Promise<SingleDocResult> => {
	return await faunaClient.query(
		Let(
			{
				documentRef: Ref(Collection(collection), docId),
				document: Get(Var('documentRef')),
				currentData: Select(['data'], Var('document'))
			},
			Update(Var('documentRef'), { data: { ...newData } })
		)
	);
};
