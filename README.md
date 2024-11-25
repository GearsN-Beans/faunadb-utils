# faunadb-utils

![Unit Tests](https://github.com/GearsN-Beans/faunadb-utils/actions/workflows/unit-test.yml/badge.svg)

A collection of utilities for working with FaunaDB.

<!-- add important note -->

> ---
>
> ## _Important to note that the package is being split into two versions, one for FQL v4 and one for FQL v10. The v4 version will be decommissioned on June 30, 2025 as faunaDB (FQL v4) is being deprecated. The v10 version is the recommended version to use after June 30, 2025 or if you have started using the FaunaDB v10 dashboard (WIP)._
>
> ---

<!-- toc -->

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Functions & Exports at a Glance (FQL v4)](#functions--exports-at-a-glance-fql-v4)
- [Functions & Exports at a Glance (FQL v10)](#functions--exports-at-a-glance-fql-v10)
- [Functions & Exports in Detail (FQL v4)](#functions--exports-in-detail-fql-v4)
  * [`faunaClient`](#faunaclient)
  * [`setFaunaSecret`](#setfaunasecret)
  * [`createNewDocument`](#createnewdocument)
  * [`updateDocumentData`](#updatedocumentdata)
  * [`deleteDocumentData`](#deletedocumentdata)
  * [`getCollectionDocDataAndIds`](#getcollectiondocdataandids)
  * [`getRawCollectionDocData`](#getrawcollectiondocdata)
  * [`getDataByIndex`](#getdatabyindex)
  * [`getRawDataByIndex`](#getrawdatabyindex)
  * [`getDataByIndexWithValueSet`](#getdatabyindexwithvalueset)
  * [`getRawDataById`](#getrawdatabyid)
- [Functions & Exports in Detail (FQL v10)](#functions--exports-in-detail-fql-v10)
  * [`faunaClientV10`](#faunaclientv10)
  * [`setFaunaSecretV10`](#setfaunasecretv10)
  * [`getRawCollectionData`](#getrawcollectiondata)
  * [`getRawDocDataById`](#getrawdocdatabyid)

<!-- tocstop -->

## Installation

```bash
# npm
npm install @gearsnbeans/faunadb-utils

# yarn
yarn add @gearsnbeans/faunadb-utils
```

## Usage

_Important to note that the package is split into two versions, one for FQL v4 and one for FQL v10. The v4 version will be decommissioned on June 30, 2025. The v10 version is the recommended version to use (WIP)._

```javascript
// * FQL v4 will be decommissioned on June 30, 2025 *
import { setFaunaSecret } from '@gearsnbeans/faunadb-utils';

// FQL v10
import { setV10FaunaSecret } from '@gearsnbeans/faunadb-utils';
```

## Features

- CRUD operations for FaunaDB
- Pagination
- Getting Data by Index
- Getting Raw Data provided by FaunaDB Response

## Functions & Exports at a Glance (FQL v4)

_soon to be deprecated v4 faunadb util usages:_

- `faunaClient` - The FaunaDB client.
- `setFaunaSecret` - Sets the FaunaDB secret for the client connection.
- `createNewDocument` - Creates a new document in a collection.
- `updateDocumentData` - Updates a document in a collection.
- `deleteDocumentData` - Deletes a document in a collection.
- `getCollectionDocDataAndIds` - Gets data from a single document in a collection with their ID.
- `getRawCollectionDocData` - Gets all information from a single document in a collection in FaunaDB response format.
- `getDataByIndex` - Gets all matching document data by a provided setup index name and its term.
- `getRawDataByIndex` - Gets all matching document data by a provided setup index name and its term in FaunaDB response format.
- `getDataByIndexWithValueSet` - Gets all matching document data by a provided setup index name and its term with a value set.
- `getRawDataById` - Gets a single document by its ID in FaunaDB response format.

## Functions & Exports at a Glance (FQL v10)

- `faunaClientV10` - The FaunaDB client.
- `setFaunaSecretV10` - Sets the FaunaDB secret for the client connection.
- `getRawCollectionData` - Gets all or a set of Documents in a Collection in FaunaDB response format.
- `getRawDocDataById` - Gets a single document by its ID in FaunaDB response format.

## Functions & Exports in Detail (FQL v4)

### `faunaClient`

The FaunaDB client to be used with FQL queries.
**_IMPORTANT:_** This is not necessary to use if you are setting up your own client. If using, make sure to set the secret with `setFaunaSecret` at a higher level than using `faunaClient`.

```javascript
import { faunaClient } from '@gearsnbeans/faunadb-utils';

faunaClient.query(q.Get(q.Ref(q.Collection('myCollection'), '1234567890')));
```

### `setFaunaSecret`

Sets the FaunaDB secret for the client connection.
**_IMPORTANT:_** This must be called before any other functions are used as they rely on the client in this package, which gets set by this secret.

```javascript
import { setFaunaSecret } from '@gearsnbeans/faunadb-utils';

setFaunaSecret(process.env.FAUNA_SECRET);
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
import { createNewDocument } from '@gearsnbeans/faunadb-utils';

const data = { name: 'Name' }; // The data to create the document with.
const collection = 'myCollection'; // The name of the collection to create the document in.

createNewDocument(data, collection);
```

### `updateDocumentData`

Updates a document in a collection.

```javascript
import { updateDocumentData } from '@gearsnbeans/faunadb-utils';

const docId = '1234567890'; // The ID of the document to update.
const newData = { name: 'New Name' }; // The new data to update the document with.
const collection = 'myCollection'; // The name of the collection to update the document in.

updateDocumentData(docId, newData, collection);
```

### `deleteDocumentData`

Deletes a document in a collection.

```javascript
import { deleteDocumentData } from '@gearsnbeans/faunadb-utils';

const docId = '1234567890'; // The ID of the document to delete.
const collection = 'myCollection'; // The name of the collection to delete the document in.

deleteDocumentData(docId, collection);
```

### `getCollectionDocDataAndIds`

Gets data from a single document in a collection with their ID.

```javascript
import { getCollectionDocDataAndIds } from '@gearsnbeans/faunadb-utils';

const collection = 'myCollection'; // The name of the collection to get the document from.

// OPTIONAL param for pagination
const size = 10; // The number of documents to get.
// defaults to 1000

getCollectionDocDataAndIds(collection, size);
```

Returns an array of objects with the following structure:

```javascript
{
	data: [
		{
			id: '1234567890',
			data: {
				name: 'Name',
				exampleKey: 'exampleValue'
			},
			ts: 1693799240650000
		}
	];
}
```

### `getRawCollectionDocData`

Gets all information from a single document in a collection in FaunaDB response format.

```javascript
import { getRawCollectionDocData } from '@gearsnbeans/faunadb-utils';

const collection = 'myCollection'; // The name of the collection to get the document from.

// OPTIONAL param for pagination
const size = 10; // The number of documents to get.
// defaults to 1000

const data = getRawCollectionDocData(collection, size);
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
import { getDataByIndex } from '@gearsnbeans/faunadb-utils';

const index = 'myIndex'; // The name of the index to get the document from.
const indexTerm = '12345'; // The term to search for in the index. ex: userId

const userData = getDataByIndex(index, indexTerm);
// index example: 'userId'
// indexTerm example: '12345'
```

### `getRawDataByIndex`

Gets all matching document data by a provided setup index name and its term in FaunaDB response format. This is useful for getting a document by a unique index that is set up in FaunaDB.

```javascript
import { getRawDataByIndex } from '@gearsnbeans/faunadb-utils';

const index = 'dogBreed'; // The name of the index to get the document from.
const indexTerm = 'doberman'; // The term to search for in the index. ex: userId

const dobermanData = getRawDataByIndex(index, indexTerm);
```

### `getDataByIndexWithValueSet`

Gets all matching document data by a provided setup index name and its term with a value set. This is useful for getting a document by a unique index that is set up in FaunaDB.

The values field in FaunaDB specifies which document fields to return for matching entries.

The key difference between this and `getDataByIndex` is that this function returns specific document fields configured from the collection instead of the entire document. The response is much more flexible and what is returned is based on the values set.

```javascript
// WITH an indexTerm set
import { getDataByIndexWithValueSet } from '@gearsnbeans/faunadb-utils';

const index = 'PhoneByClientName'; // The name of the index to get the document from.
const indexTerm = 'Brown'; // The term field to search for in the index.

const phoneData = getDataByIndexWithValueSet(index, indexTerm);

// WITHOUT an indexTerm set

const index = 'PhoneByClientName'; // The name of the index to get the document from.

const phoneData = getDataByIndexWithValueSet(index);
```

The response will vary depending on what fields you have set to return in FaunaDB but will always be in a data array:

```javascript
{
	data: [
		{
			fieldName: 'fieldValue'
		}
	];
}
```

### `getRawDataById`

Gets a single document by its ID in FaunaDB response format.

```javascript
import { getRawDataById } from '@gearsnbeans/faunadb-utils';

const docId = '1234567890'; // The ID of the document to get.
const collection = 'myCollection'; // The name of the collection to get the document from.

const data = getRawDataById(collection, docId);
```

Returns the raw response from FaunaDB.

```javascript
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
```

## Functions & Exports in Detail (FQL v10)

### `faunaClientV10`

The FaunaDB client to be used with FQL queries.
**_IMPORTANT:_** This is not necessary to use if you are setting up your own client. If using, make sure to set the secret with `setFaunaSecretV10` at a higher level than using `faunaClientV10`.

```javascript
import { faunaClientV10 } from '@gearsnbeans/faunadb-utils';

faunaClientV10.query(`Collection(${collectionName}).all()`);
```

### `setFaunaSecretV10`

Sets the FaunaDB secret for the client connection.
**_IMPORTANT:_** This must be called before any other functions are used as they rely on the client in this package, which gets set by this secret.

```javascript
import { setFaunaSecretV10 } from '@gearsnbeans/faunadb-utils';

setFaunaSecretV10(process.env.FAUNA_SECRET);
```

```javascript
// cloudflare workers example with itty-router

import { setFaunaSecretV10 } from '@gearsnbeans/faunadb-utils'

const router = ittyRouter();

router.get('/api', async (request, env) => {
    return new Response('Hello World!');
});

const handleRequest = (request: Request, env: Env) => {
  setFaunaSecretV10(env.FAUNA_SECRET);
  return router.handle(request).then(corsify);
};

export default {
  async fetch(request: Request, env: Env) {
    return await handleRequest(request, env);
  },
};
```

### `getRawCollectionData`

Gets all or a set of Documents in a Collection in FaunaDB response format.

```javascript
import { getRawCollectionData } from '@gearsnbeans/faunadb-utils';

const collection = 'myCollection'; // The name of the collection to get the document from.

// OPTIONAL param for pagination
const size = 10; // The number of documents to get.

const data = await getRawCollectionData(collection, size);
```

<!-- TODO add response example -->

### `getRawDocDataById`

Gets a single document by its ID in FaunaDB response format.

```javascript
import { getRawDocDataById } from '@gearsnbeans/faunadb-utils';

const docId = '1234567890'; // The ID of the document to get.
const collection = 'myCollection'; // The name of the collection to get the document from.

const data = await getRawDocDataById(collection, docId);
```

<!-- TODO add response example -->
