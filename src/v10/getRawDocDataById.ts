import { fql } from 'fauna';
import { faunaClientV10 } from './setFaunaSecret';
import { RawDocumentById } from '../types/v10';

/**
 * FQL v10
 * @param collectionName
 * @param id
 */
export const getRawDocDataById = async (collectionName: string, id: string) => {
	const getCollectionDocById = fql`Collection(${collectionName}).byId(${id})`;
	const documentById: RawDocumentById =
		await faunaClientV10.query(getCollectionDocById);

	return documentById;
};
