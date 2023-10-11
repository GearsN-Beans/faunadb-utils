import { Delete, Ref, Collection } from 'faunadb'
import { faunaClient } from './setFaunaSecret'
import { SingleDocResult } from './types/types'

export const deleteDocumentData = async (
	collection: string,
	docId: string
): Promise<SingleDocResult> => {
	return await faunaClient.query(Delete(Ref(Collection(collection), docId)))
}
