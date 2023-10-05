import { Delete, Ref, Collection } from 'faunadb'
import { faunaClient } from './faunaClient'

export const deleteDocumentData = async (collection: string, docId: string) => {
	return await faunaClient.query(Delete(Ref(Collection(collection), docId)))
}
