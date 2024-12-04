import {
	Paginate,
	Documents,
	Collection,
	Lambda,
	Get,
	Var,
	Map
} from 'faunadb';
import { RawDocumentRefs } from '../types/v4';
import { faunaClient } from './setFaunaSecret';

/**
 * FQL v4
 * @param collection
 * @param size optional number
 */
export const getRawCollectionDocData = async (
	collection: string,
	size?: number
): Promise<RawDocumentRefs> => {
	const defaultSize = 1000;
	const querySize = (size ||= defaultSize);

	return await faunaClient.query(
		Map(
			Paginate(Documents(Collection(collection)), { size: querySize }),
			Lambda('ref', Get(Var('ref')))
		)
	);
};
