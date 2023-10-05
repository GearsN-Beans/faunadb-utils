import { Collection, Create } from 'faunadb'
import { faunaClient } from './setFaunaSecret'

export const createNewDocument = async (data: unknown, collection: string) => {
	return await faunaClient.query(
		Create(Collection(collection), {
			data
		})
	)
}
