# faunadb-utils

A collection of utilities for working with FaunaDB.

<!-- toc -->

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Functions at a Glance](#functions-at-a-glance)
- [Functions in Detail](#functions-in-detail)
  - [`setFaunaSecret`](#setfaunasecret)
  - [`createNewDocument`](#createnewdocument)
  - [`updateDocumentData`](#updatedocumentdata)
  - [`deleteDocumentData`](#deletedocumentdata)
  - [`getCollectionDocDataAndIds`](#getcollectiondocdataandids)
  - [`getRawCollectionData`](#getrawcollectiondata)
  - [`getDataByIndex`](#getdatabyindex)

<!-- tocstop -->

## Installation

```bash
# npm
npm install @gearsnbeans/faunadb-utils

# yarn
yarn add @gearsnbeans/faunadb-utils
```

## Usage

```javascript
import { setFaunaSecret } from '@gearsnbeans/faunadb-utils'
```

## Features

- CRUD operations for FaunaDB
- Pagination
- Getting Data by Index
- Getting Raw Data provided by FaunaDB Response

## Functions at a Glance

- `setFaunaSecret` - Sets the FaunaDB secret for the client connection.
- `createNewDocument` - Creates a new document in a collection.
- `updateDocumentData` - Updates a document in a collection.
- `deleteDocumentData` - Deletes a document in a collection.
- `getCollectionDocDataAndIds` - Gets data from a single document in a collection with their ID.
- `getRawCollectionData` - Gets all information from a single document in a collection in FaunaDB response format.
- `getDataByIndex` - Gets all matching document data by a provided setup index name and its term.

## Functions in Detail

### `setFaunaSecret`

Sets the FaunaDB secret for the client connection.

```javascript
import { setFaunaSecret } from '@gearsnbeans/faunadb-utils'

setFaunaSecret(process.env.FAUNADB_SECRET)
```

```javascript
// cloudflare workers example with itty-router
import { setFaunaSecret } from '@gearsnbeans/faunadb-utils'

const router = ittyRouter();

router.get('/api', async (request, env) => {
    return new Response('Hello World!');
});

const handleRequest = (request: Request, env: Env) => {
	setFaunaSecret(env.FAUNA_SECRET);
	return router.handle(request).then(corsify);
};

export default {
	async fetch(request: Request, env: Env) {
		return await handleRequest(request, env);
    },
};
```

### `createNewDocument`

Creates a new document in a collection.

```javascript
import { createNewDocument } from '@gearsnbeans/faunadb-utils'

const data = { name: 'Name' } // The data to create the document with.
const collection = 'myCollection' // The name of the collection to create the document in.

createNewDocument(data, collection)
```

### `updateDocumentData`

Updates a document in a collection.

```javascript
import { updateDocumentData } from '@gearsnbeans/faunadb-utils'

const docId = '1234567890' // The ID of the document to update.
const newData = { name: 'New Name' } // The new data to update the document with.
const collection = 'myCollection' // The name of the collection to update the document in.

updateDocumentData(docId, newData, collection)
```

### `deleteDocumentData`

Deletes a document in a collection.

```javascript
import { deleteDocumentData } from '@gearsnbeans/faunadb-utils'

const docId = '1234567890' // The ID of the document to delete.
const collection = 'myCollection' // The name of the collection to delete the document in.

deleteDocumentData(docId, collection)
```

### `getCollectionDocDataAndIds`

Gets data from a single document in a collection with their ID.

```javascript
import { getCollectionDocDataAndIds } from '@gearsnbeans/faunadb-utils'

const collection = 'myCollection' // The name of the collection to get the document from.

// OPTIONAL param for pagination
const size = 10 // The number of documents to get.
// defaults to 1000

getCollectionDocDataAndIds(collection, size)
```

### `getRawCollectionData`

Gets all information from a single document in a collection in FaunaDB response format.

```javascript
import { getRawCollectionData } from '@gearsnbeans/faunadb-utils'

const collection = 'myCollection' // The name of the collection to get the document from.

// OPTIONAL param for pagination
const size = 10 // The number of documents to get.
// defaults to 1000

getRawCollectionData(collection, size)
```

### `getDataByIndex`

Gets all matching document data by a provided setup index name and its term.

```javascript
import { getDataByIndex } from '@gearsnbeans/faunadb-utils'

const index = 'myIndex' // The name of the index to get the document from.

const indexTerm = '12345' // The term to search for in the index. ex: userId

getDataByIndex(index, indexTerm)
```
