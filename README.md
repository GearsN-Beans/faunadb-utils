# faunadb-utils

A collection of utilities for working with FaunaDB.

<!-- toc -->

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Functions & Exports at a Glance](#functions--exports-at-a-glance)
- [Functions & Exports in Detail](#functions--exports-in-detail)
- [`faunaClient`](#faunaclient)
  * [`setFaunaSecret`](#setfaunasecret)
  * [`createNewDocument`](#createnewdocument)
  * [`updateDocumentData`](#updatedocumentdata)
  * [`deleteDocumentData`](#deletedocumentdata)
  * [`getCollectionDocDataAndIds`](#getcollectiondocdataandids)
  * [`getRawCollectionData`](#getrawcollectiondata)
  * [`getDataByIndex`](#getdatabyindex)
  * [`getRawDataByIndex`](#getrawdatabyindex)

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

## Functions & Exports at a Glance

- `faunaClient` - The FaunaDB client.
- `setFaunaSecret` - Sets the FaunaDB secret for the client connection.
- `createNewDocument` - Creates a new document in a collection.
- `updateDocumentData` - Updates a document in a collection.
- `deleteDocumentData` - Deletes a document in a collection.
- `getCollectionDocDataAndIds` - Gets data from a single document in a collection with their ID.
- `getRawCollectionData` - Gets all information from a single document in a collection in FaunaDB response format.
- `getDataByIndex` - Gets all matching document data by a provided setup index name and its term.
- `getRawDataByIndex` - Gets all matching document data by a provided setup index name and its term in FaunaDB response format.

## Functions & Exports in Detail

## `faunaClient`

The FaunaDB client to be used with FQL queries.
**_IMPORTANT:_** This is not necessary to use if you are setting up your own client. If using, make sure to set the secret with `setFaunaSecret` at a higher level than using `faunaClient`.

```javascript
import { faunaClient } from '@gearsnbeans/faunadb-utils'

faunaClient.query(q.Get(q.Ref(q.Collection('myCollection'), '1234567890')))
```

### `setFaunaSecret`

Sets the FaunaDB secret for the client connection.
**IMPORTANT:** This must be called before any other functions are used as they rely on the client in this package, which gets set by this secret.

```javascript
import { setFaunaSecret } from '@gearsnbeans/faunadb-utils'

setFaunaSecret('fnAFCCznjeAATXszZR6chXVs0v4-8o5c3yn8mKcb')
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

Returns an array of objects with the following structure:

```javascript
{
    data: [
        {
            id: '1234567890',
            data: {
                name: 'Name'
                exampleKey: 'exampleValue'
            },
            ts: 1693799240650000
        }
    ]
}
```

### `getRawCollectionData`

Gets all information from a single document in a collection in FaunaDB response format.

```javascript
import { getRawCollectionData } from '@gearsnbeans/faunadb-utils'

const collection = 'myCollection' // The name of the collection to get the document from.

// OPTIONAL param for pagination
const size = 10 // The number of documents to get.
// defaults to 1000

const data = getRawCollectionData(collection, size)
```

Returns the raw response from FaunaDB.

```javascript
{
  "data": [
    {
      "ref": {
        "@ref": {
          "id": "1234567890",
          "collection": {
            "@ref": {
              "id": "CollectionName",
              "collection": {
                "@ref": {
                  "id": "collections"
                }
              }
            }
          }
        }
      },
      "ts": 1693799240650000,
      "data": {
        "name": "Name",
        "exampleKey": "exampleValue"
      }
    }
  ]
}
```

### `getDataByIndex`

Gets all matching document data by a provided setup index name and its term. This is useful for getting a document by a unique index that is set up in FaunaDB.

```javascript
import { getDataByIndex } from '@gearsnbeans/faunadb-utils'

const index = 'myIndex' // The name of the index to get the document from.
const indexTerm = '12345' // The term to search for in the index. ex: userId

const userData = getDataByIndex(index, indexTerm)
// index example: 'userId'
// indexTerm example: '12345'
```

### `getRawDataByIndex`

Gets all matching document data by a provided setup index name and its term in FaunaDB response format. This is useful for getting a document by a unique index that is set up in FaunaDB.

```javascript
import { getRawDataByIndex } from '@gearsnbeans/faunadb-utils'

const index = 'dogBreed' // The name of the index to get the document from.
const indexTerm = 'doberman' // The term to search for in the index. ex: userId

const dobermmanData = getRawDataByIndex(index, indexTerm)
```
