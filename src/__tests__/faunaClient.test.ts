import { describe, expect, expectTypeOf, test } from 'vitest'
import { faunaClient, setFaunaSecret } from '../setFaunaSecret'
import { Client } from 'faunadb'

describe('faunaClient', () => {
	test('faunaClient before set', () => {
		expect(faunaClient).toBe(undefined)
	})

	test('faunaClient after set', () => {
		expect(faunaClient).toBe(undefined)
		const faunaSecret = import.meta.env.VITE_FAUNA_SECRET
		setFaunaSecret(faunaSecret)
		expectTypeOf(faunaClient).toEqualTypeOf<Client>({} as Client)
	})
})
