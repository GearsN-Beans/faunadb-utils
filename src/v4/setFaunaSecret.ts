import faunadb, { Client } from 'faunadb'

export let faunaClient: Client

export const setFaunaSecret = (secret: string) => {
	faunaClient = new faunadb.Client({
		secret
	})
}
