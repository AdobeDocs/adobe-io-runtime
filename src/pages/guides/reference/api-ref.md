# Adobe I/O Runtime API Reference

## API endpoints

Adobe I/O Runtime supports the following API endpoints for interacting programmatically with the service. 

**Notes:**
1. Unless otherwise noted, all parameters are required. 
2. For all the API calls on this page, the base URL is:  
`https://api.adobe.io/`

### GET /runtime/admin/namespaces/{orgId}/{intId}
Returns the details of the namespace associated with the specified organization and integration.

#### _Parameters:_

| Name                       | Description                                                             |
|----------------------------|-------------------------------------------------------------------------|
| `orgId` (`string`: _path_)  | Organization ID                                                        |
| `intId` (`string`: _path_)  | Integration ID                                                         |
| `Authorization` (`string`: _header_) | Authorization token in the format: `Bearer {token}`               |
| `X-Api-Key` (`string`: _header_)   | API key                                                                |

#### _Responses:_
Response content type: `application/json`

| Code | Description                                                                                |
|------|--------------------------------------------------------------------------------------------|
| 200  | Successful operation. Example value:  `json { "name": "string", "auth": "string" } ` Model: `Model:` `NamespaceDTO` `Description:` Namespace Details `Fields:` - `name` (string): Namespace name - `auth` (string): Auth associated with Namespace |

### POST /runtime/admin/namespaces/{orgId}/{intId}

Creates a new namespace and returns the details of the newly created namespace. If namespace already exists it returns the details of the namespace.

#### _Parameters:_


| Name                       | Description                                                             |
|----------------------------|-------------------------------------------------------------------------|
| `orgId` (`string`: _path_)  | Organization ID                                                        |
| `intId` (`string`: _path_)  | Integration ID                                                         |
| `Authorization` (`string`: _header_) | Authorization token in the format: `Bearer {token}`               |
| `X-Api-Key` (`string`: _header_)   | API key                                                                |


### POST /runtime/admin/namespaces/{orgId}/{intId}

Creates a new namespace and returns the details of the newly created namespace. If namespace already exists it returns the details of the namespace.

#### _Parameters:_

| Name                       | Description                                                             |
|----------------------------|-------------------------------------------------------------------------|
| `orgId` (`string`: _path_)  | Organization ID                                                        |
| `intId` (`string`: _path_)  | Integration ID                                                         |
| `Authorization` (`string`: _header_) | Authorization token in the format: `Bearer {token}`               |
| `X-Api-Key` (`string`: _header_)   | API key                                                                |

#### _Responses:_
Response content type: `application/json`

| Code | Description |
|------|-------------|
| 200  | Successful operation. Example value: `json { "name": "string", "auth": "string" } ` Model: `NamespaceDTO` Description: Namespace Details Fields: - `name` (string): Namespace name - `auth` (string): Auth associated with Namespace |


### DELETE /runtime/admin/namespaces/{orgId}/{intId}

Deletes the namespace associated with the specified organization and integration.

#### _Parameters:_

| Name                         | Description                                                             |
|------------------------------|-------------------------------------------------------------------------|
| `orgId` (`string`: _path_)    | Organization ID                                                        |
| `intId` (`string`: _path_)    | Integration ID                                                         |
| `Authorization` (`string`: _header_) | Authorization token in the format: `Bearer {token}`               |
| `X-Api-Key` (`string`: _header_)   | API key                                                                |

#### _Responses:_
Response content type: `application/json`

| Code      | Description            |
|-----------|------------------------|
| _default_ | Successful operation   |

### GET /runtime/namespaces/{orgId}/{intId}/actions

Returns the list of actions associated with the specified organization and integration.

#### _Parameters:_

| Name                         | Description                                                             |
|------------------------------|-------------------------------------------------------------------------|
| `orgId` (`string`: _path_)    | Organization ID                                                        |
| `intId` (`string`: _path_)    | Integration ID                                                         |
| `Authorization` (`string`: _header_) | Authorization token in the format: `Bearer {token}`               |
| `X-Api-Key` (`string`: _header_)   | API key                                                                |

#### _Responses:_
Response content type: `application/json`

