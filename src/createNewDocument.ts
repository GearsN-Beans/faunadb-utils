import { Collection, Create } from 'faunadb'
import { faunaClient } from './setFaunaSecret'
import { SingleDocResult } from './types/types'

export const createNewDocument = async (
	data: unknown,
	collection: string
): Promise<SingleDocResult> => {
	return await faunaClient.query(
		Create(Collection(collection), {
			data
		})
	)
}
