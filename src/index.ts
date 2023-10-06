import { setFaunaSecret } from './setFaunaSecret'
import { getCollectionDocDataAndIds } from './getCollectionDocDataAndIds'
import { DocDataObj, DocumentDataWithId } from './types/types'
import { getRawCollectionDocData } from './getRawCollectionData'
import { createNewDocument } from './createNewDocument'
import { deleteDocumentData } from './deleteDocumentData'
import { getDataByIndex } from './getDataByIndex'
import { updateDocumentData } from './updateDocumentData'

export {
	setFaunaSecret,
	getCollectionDocDataAndIds,
	getRawCollectionDocData,
	createNewDocument,
	deleteDocumentData,
	getDataByIndex,
	updateDocumentData
}

export type { DocumentDataWithId, DocDataObj }
