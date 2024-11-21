import { faunaClient, setFaunaSecret } from './setFaunaSecret';
import { getCollectionDocDataAndIds } from './getCollectionDocDataAndIds';
import {
	DocDataObj,
	DocumentDataWithId,
	IndexResult,
	RawDocumentRefs,
	RefObject,
	SingleDocResult
} from './types/types';
import { getRawCollectionDocData } from './getRawCollectionData';
import { createNewDocument } from './createNewDocument';
import { deleteDocumentData } from './deleteDocumentData';
import { getDataByIndex } from './getDataByIndex';
import { updateDocumentData } from './updateDocumentData';
import { getRawDataByIndex } from './getRawDataByIndex';
import { getDataByIndexWithValueSet } from './getDataByIndexWithValueSet';
import { getRawDataById } from './getRawDataById';
import { setFaunaSecretV10, faunaClientV10 } from './v10/setFaunaSecret';
import { getRawCollectionData } from './v10/getRawCollectionData';
import {
	RawCollectionData,
	RawDocument,
	PaginatedDocuments,
	RawDocumentById
} from './types/v10';
import { getRawDocDataById } from './v10/getRawDocDataById';

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
