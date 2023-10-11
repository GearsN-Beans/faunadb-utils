export interface DocumentDataWithId {
	data: [DocDataObj]
}

export interface DocDataObj {
	id: string
	data: {
		[key: string]: unknown
	}
	ts: number
}

export interface RawDocumentRefs {
	data: [
		{
			id: string
			ref: RefObject
			data?: {
				[key: string]: unknown
			}
		}
	]
}

export interface RefObject {
	[x: string]: any
	'@ref': {
		id: string
		collection: {
			'@ref': {
				id: string
				collection: {
					'@ref': {
						id: string
					}
				}
			}
		}
	}
}

export interface IndexResult {
	data: any[]
}

export interface SingleDocResult {
	ref: RefObject
	ts: number
	data: {
		[key: string]: unknown
	}
}
