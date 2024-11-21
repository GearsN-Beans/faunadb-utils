import { describe, test, expect, beforeEach } from 'vitest';
import { faunaClientV10, setFaunaSecretV10 } from '../v10/setFaunaSecret';
import { getRawCollectionData } from '../v10/getRawCollectionData';
import { getRawDocDataById } from '../v10/getRawDocDataById';
import { Client } from 'fauna';

const faunaSecret = import.meta.env.VITE_V10_FAUNA_SECRET;

describe('faunaClientV10', () => {
	test('faunaClientV10 before set', () => {
		expect(faunaClientV10).toBe(undefined);
	});

	test('faunaClientV10 after set', () => {
		setFaunaSecretV10(faunaSecret);
		expect(faunaClientV10).not.toBe(undefined);
		expect(faunaClientV10).toBeInstanceOf(Client);
	});
});

describe('all functions tests', () => {
	beforeEach(() => {
		setFaunaSecretV10(faunaSecret);
	});

	describe('getRawCollectionData', () => {
		test('should return an array of data', async () => {
			const productData = await getRawCollectionData('Product');
			expect(productData.data.data.length).toBeGreaterThan(0);
		});

		test('should return a correct length with the size param passed in', async () => {
			const { data: productData } = await getRawCollectionData('Product', 1);
			expect(productData.data).toHaveLength(1);
		});

		test('return an empty array with an empty collection', async () => {
			const emptyCollectionData = await getRawCollectionData('EmptyCollection');
			expect(emptyCollectionData.data.data).toHaveLength(0);
		});
	});

	describe('getRawDataById', () => {
		test('should return a single document by id', async () => {
			const productId = '378217320570421325';

			const singleProduct = await getRawDocDataById('Product', productId);

			expect(singleProduct.data.id).toEqual(productId);
			expect(singleProduct.data.name).toEqual('avocados');
		});
		test('should error with an invalid id', async () => {
			const invalidId = '378217320570421324';
			const singleProductResponse = await getRawDocDataById(
				'Product',
				invalidId
			);

			expect(singleProductResponse).toMatchObject({
				data: { cause: 'not found' }
			});
		});
	});
});
