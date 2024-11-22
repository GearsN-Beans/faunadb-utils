import { faunaClient, setFaunaSecret } from './v4/setFaunaSecret';
import {
	DocDataObj,
	DocumentDataWithId,
	IndexResult,
	RawDocumentRefs,
	RefObject,
	SingleDocResult
} from './types/v4';
import { setFaunaSecretV10, faunaClientV10 } from './v10/setFaunaSecret';
import { getRawCollectionData } from './v10/getRawCollectionData';
import {
	RawCollectionData,
	RawDocument,
	PaginatedDocuments,
	RawDocumentById
} from './types/v10';
import { getRawDocDataById } from './v10/getRawDocDataById';
import { createNewDocument } from './v4/createNewDocument';
import { deleteDocumentData } from './v4/deleteDocumentData';
import { getCollectionDocDataAndIds } from './v4/getCollectionDocDataAndIds';
import { getDataByIndex } from './v4/getDataByIndex';
import { getDataByIndexWithValueSet } from './v4/getDataByIndexWithValueSet';
import { getRawCollectionDocData } from './v4/getRawCollectionData';
import { getRawDataById } from './v4/getRawDataById';
import { getRawDataByIndex } from './v4/getRawDataByIndex';
import { updateDocumentData } from './v4/updateDocumentData';

export {
	faunaClient,
	setFaunaSecret,
	getCollectionDocDataAndIds,
	getRawCollectionDocData,
	createNewDocument,
	deleteDocumentData,
	getDataByIndex,
	updateDocumentData,
	getRawDataByIndex,
	getDataByIndexWithValueSet,
	getRawDataById,
	/* v10 below */
	faunaClientV10,
	setFaunaSecretV10,
	getRawCollectionData,
	getRawDocDataById
};

export type {
	DocumentDataWithId,
	DocDataObj,
	RawDocumentRefs,
	RefObject,
	IndexResult,
	SingleDocResult,
	/* v10 below */
	RawCollectionData,
	RawDocument,
	PaginatedDocuments,
	RawDocumentById
};
