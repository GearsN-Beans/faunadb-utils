export interface DocumentDataWithId {
	data: [DocDataObj]
}

export interface DocDataObj {
	id: string
	data: {
		selectedDate: string
		timesSelected: TimesSelected
		positionChosen: string
		userId: string
		userFullName: string
		clientId: string
		messageForManager: string
		isConfirmed: boolean
		email: string
	}
	ts: number
}

export interface TimesSelected {
	startTime: string
	endTime: string
}
