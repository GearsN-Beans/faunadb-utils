import { faunaClient, setFaunaSecret } from './setFaunaSecret'
import { getCollectionDocDataAndIds } from './getCollectionDocDataAndIds'
import {
	DocDataObj,
	DocumentDataWithId,
	IndexResult,
	RawDocumentRefs,
	RefObject
} from './types/types'
import { getRawCollectionDocData } from './getRawCollectionData'
import { createNewDocument } from './createNewDocument'
import { deleteDocumentData } from './deleteDocumentData'
import { getDataByIndex } from './getDataByIndex'
import { updateDocumentData } from './updateDocumentData'
import { getRawDataByIndex } from './getRawDataByIndex'
import { getDataByIndexWithValueSet } from './getDataByIndexWithValueSet'

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
	getDataByIndexWithValueSet
}

export type {
	DocumentDataWithId,
	DocDataObj,
	RawDocumentRefs,
	RefObject,
	IndexResult
}
