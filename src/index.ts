import { faunaClient, setFaunaSecret } from './setFaunaSecret'
import { getCollectionDocDataAndIds } from './getCollectionDocDataAndIds'
import { DocDataObj, DocumentDataWithId } from './types/types'
import { getRawCollectionDocData } from './getRawCollectionData'
import { createNewDocument } from './createNewDocument'
import { deleteDocumentData } from './deleteDocumentData'
import { getDataByIndex } from './getDataByIndex'
import { updateDocumentData } from './updateDocumentData'
import { getRawDataByIndex } from './getRawDataByIndex'

export {
	faunaClient,
	setFaunaSecret,
	getCollectionDocDataAndIds,
	getRawCollectionDocData,
	createNewDocument,
	deleteDocumentData,
	getDataByIndex,
	updateDocumentData,
	getRawDataByIndex
}

export type { DocumentDataWithId, DocDataObj }
