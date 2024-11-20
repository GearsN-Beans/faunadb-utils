import { fql } from 'fauna';
import { faunaClientV10 } from './setFaunaSecret';

export const getRawCollectionData = async (
	collectionName: string,
	size?: number
) => {
	const defaultMaxSize = 16000;
	const pageSize = size || defaultMaxSize;

	const getAllDocuments = fql`Collection(${collectionName}).all()`;
	const getSetOfDocuments = fql`Collection(${collectionName}).all().pageSize(${pageSize})`;

	if (!!size) {
		return await faunaClientV10.query(getSetOfDocuments);
	}

	return await faunaClientV10.query(getAllDocuments);
};