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
