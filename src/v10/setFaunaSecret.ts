import { Client } from 'fauna';

/**
 * FQL v10 DB client
 */
export let faunaClientV10: Client;

/**
 * Set the secret for the FQL v10 client
 * @param secret string. Your FaunaDB Collection key.
 */
export const setFaunaSecretV10 = (secret: string) => {
	faunaClientV10 = new Client({
		secret
	});
};
