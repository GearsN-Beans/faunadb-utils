import { beforeEach, describe, expect, expectTypeOf, test } from 'vitest'
import { faunaClient, setFaunaSecret } from '../setFaunaSecret'
import { getRawCollectionDocData } from '../getRawCollectionData'
import { Client } from 'faunadb'
import { RawDocumentRefs } from '../types/types'
import { getRawDataByIndex } from '../getRawDataByIndex'
import { getDataByIndexWithValueSet } from '../getDataByIndexWithValueSet'
import { createNewDocument } from '../createNewDocument'
import { deleteDocumentData } from '../deleteDocumentData'
import { getRawDataById } from '../getRawDataById'
import { updateDocumentData } from '../updateDocumentData'
import { getDataByIndex } from '../getDataByIndex'

const faunaSecret = import.meta.env.VITE_FAUNA_SECRET
describe('faunaClient', () => {
	test('faunaClient before set', () => {
		expect(faunaClient).toBe(undefined)
	})

	test('faunaClient after set', () => {
		setFaunaSecret(faunaSecret)
		expect(faunaClient).not.toBe(undefined)
		expectTypeOf(faunaClient).toEqualTypeOf<Client>({} as Client)
	})
})

describe('all functions tests', () => {
	beforeEach(() => {
		setFaunaSecret(faunaSecret)
	})

	const newProduct = {
		name: `testProduct ${Math.random() * 100}`,
		price: Math.random() * 100,
		quantity: Math.floor(Math.random() * 100)
	}

	describe('getRawCollectionDocData', () => {
		test('should return an array of data', async () => {
			const productData: RawDocumentRefs =
				await getRawCollectionDocData('Product')

			expect(productData.data.length).toBeGreaterThan(0)
		})

		test('should return a correct length with the size param passed in', async () => {
			const productData: RawDocumentRefs = await getRawCollectionDocData(
				'Product',
				1
			)

			expect(productData.data).toHaveLength(1)
		})

		test('return an empty array with an empty collection', async () => {
			const emptyCollectionData: RawDocumentRefs =
				await getRawCollectionDocData('EmptyCollection')

			expect(emptyCollectionData.data).toHaveLength(0)
		})
	})

	describe('getRawDataByIndex', () => {
		test('should return an array of data based on the term', async () => {
			const productData: RawDocumentRefs = await getRawDataByIndex(
				'ProductName',
				'limes'
			)
			expect(productData.data).toHaveLength(3)
		})
	})

	describe('getDataByIndexWithValueSet', () => {
		test('should return an array of data based on the index and no index term', async () => {
			const productData = await getDataByIndexWithValueSet('Quantities')
			expect(productData.data).toBeInstanceOf(Array)
		})

		test('should return an array of data based on the index and index term', async () => {
			const productData = await getDataByIndexWithValueSet(
				'PhoneByName',
				'Brown'
			)
			expect(productData.data).toHaveLength(2)
		})
	})

	describe('getRawDataById', () => {
		test('should return a single document', async () => {
			const productId = '378217320570421325'

			const singleProduct = await getRawDataById('Product', productId)

			expect(singleProduct.ref.id).toEqual(productId)
			expect(singleProduct.data.name).toEqual('avocados')
		})
	})

	describe('createNewDocument', () => {
		test('should create a new document', async () => {
			const createProduct = await createNewDocument(newProduct, 'Product')

			expect(createProduct.data).toEqual(newProduct)
		})
	})
	describe('deleteDocumentData', () => {
		test('should delete a newly created document', async () => {
			const createProduct = await createNewDocument(newProduct, 'Product')

			const deletedProduct = await deleteDocumentData(
				'Product',
				createProduct.ref.id
			)

			expect(deletedProduct.ref.id).toEqual(createProduct.ref.id)
		})
	})

	describe('updateDocumentData', () => {
		test('should update an existing document', async () => {
			const productId = '378324093226713161'
			const product = await getRawDataById('Product', productId)
			const productQuantity = product.data.quantity as number

			const updatedProduct = await updateDocumentData(
				productId,
				{ name: 'updatedProduct', quantity: productQuantity + 1 },
				'Product'
			)

			expect(updatedProduct.data.name).toEqual('updatedProduct')
			expect(updatedProduct.data.quantity).toEqual(productQuantity + 1)
		})
	})

	describe('getDataByIndex', () => {
		test('should return an array of data based on the index and no designated values', async () => {
			const limeQuanitites = await getDataByIndex('ProductName', 'limes')

			expect(limeQuanitites.data[0]).toHaveProperty('id')
			expect(limeQuanitites.data[0]).toHaveProperty('data')
			expect(limeQuanitites.data[0]).toHaveProperty('ts')
		})
	})
})
