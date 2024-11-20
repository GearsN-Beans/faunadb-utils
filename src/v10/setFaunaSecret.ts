import { Client } from 'fauna';

export let faunaClientV10: Client;

export const setFaunaSecretV10 = (secret: string) => {
	faunaClientV10 = new Client({
		secret
	});
};
