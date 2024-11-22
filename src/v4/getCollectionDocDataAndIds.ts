import {
	Paginate,
	Documents,
	Collection,
	Lambda,
	Select,
	Get,
	Var,
	Map
} from 'faunadb';
import { DocumentDataWithId } from '../types/types';
import { faunaClient } from './setFaunaSecret';

export const getCollectionDocDataAndIds = async (
	collection: string,
	size?: number
): Promise<DocumentDataWithId> => {
	const defaultSize = 1000;
	const querySize = (size ||= defaultSize);

	// this will be different in v10, there is no data field
	// https://docs.fauna.com/fauna/v4/migration/migrate-to-v10/#data-field
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
	);
};
