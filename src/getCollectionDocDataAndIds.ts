import {
	Paginate,
	Documents,
	Collection,
	Lambda,
	Select,
	Get,
	Var,
	Map
} from 'faunadb'
import { faunaClient } from './faunaClient'
import { DocumentDataWithId } from './types/types'

export const getCollectionDocDataAndIds = async (
	collection: string,
	size?: number
): Promise<DocumentDataWithId> => {
	const defaultSize = 1000
	const querySize = (size ||= defaultSize)

	return await faunaClient.query(
		Map(
			Paginate(Documents(Collection(collection)), { size: querySize }),
			Lambda('ref', {
				// NOTE to get a nested obj value, cant use dot notation, must go in order with an array of strings
				id: Select(['ref', 'id'], Get(Var('ref'))),
				data: Select(['data'], Get(Var('ref'))),
				ts: Select(['ts'], Get(Var('ref')))
			})
		)
	)
}
