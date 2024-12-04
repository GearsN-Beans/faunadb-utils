import faunadb, { Client } from 'faunadb';

export let faunaClient: Client;

/**
 * FQL v4
 * @param secret string. Your FaunaDB Collection key.
 */
export const setFaunaSecret = (secret: string) => {
	faunaClient = new faunadb.Client({
		secret
	});
};
