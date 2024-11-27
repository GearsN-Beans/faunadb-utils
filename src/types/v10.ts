/* ------------- fauna v10 types ------------- */

export interface PaginatedDocuments {
	data: RawCollectionData;
}
export interface RawCollectionData {
	data: RawDocument[];
}

export interface RawDocument {
	coll: string;
	id: string;
	ts: number;
	ttl?: number; // deleted doc timestamp
	[key: string]: unknown;
}

export interface RawDocumentById {
	data: RawDocument;
}
