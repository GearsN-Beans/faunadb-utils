import { Get, Ref, Collection } from 'faunadb'
import { faunaClient } from './setFaunaSecret'
import { SingleDocResult } from './types/types'

export const getRawDataById = async (
	collection: string,
	id: string
): Promise<SingleDocResult> => {
	return await faunaClient.query(Get(Ref(Collection(collection), id)))
}
