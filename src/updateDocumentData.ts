import { Let, Ref, Collection, Get, Var, Select, Update } from 'faunadb'
import { faunaClient } from './setFaunaSecret'
import { SingleDocResult } from './types/types'

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
	)
}
