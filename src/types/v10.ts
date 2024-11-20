/* ------------- fauna v10 types ------------- */
export interface RawCollectionData {
	data: RawDocument[];
}

export interface RawDocument {
	coll: string;
	id: string;
	ts: number;
	[key: string]: unknown;
}
