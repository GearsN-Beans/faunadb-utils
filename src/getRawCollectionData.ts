import {
	Paginate,
	Documents,
	Collection,
	Lambda,
	Get,
	Var,
	Map
} from 'faunadb';
import { faunaClient } from './setFaunaSecret';
import { RawDocumentRefs } from './types/types';

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
