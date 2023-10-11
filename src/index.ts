import { faunaClient, setFaunaSecret } from './setFaunaSecret'
import { getCollectionDocDataAndIds } from './getCollectionDocDataAndIds'
import {
	DocDataObj,
	DocumentDataWithId,
	IndexResult,
	RawDocumentRefs,
	RefObject,
	SingleDocResult
} from './types/types'
import { getRawCollectionDocData } from './getRawCollectionData'
import { createNewDocument } from './createNewDocument'
import { deleteDocumentData } from './deleteDocumentData'
import { getDataByIndex } from './getDataByIndex'
import { updateDocumentData } from './updateDocumentData'
import { getRawDataByIndex } from './getRawDataByIndex'
import { getDataByIndexWithValueSet } from './getDataByIndexWithValueSet'
import { getRawDataById } from './getRawDataById'

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
	getRawDataById
}

export type {
	DocumentDataWithId,
	DocDataObj,
	RawDocumentRefs,
	RefObject,
	IndexResult,
	SingleDocResult
}
