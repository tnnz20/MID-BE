# Mid Term Project (Backend Only)

This repository hold my assignment in Gigih 3.0

## How to run the project

### Prerequisite

1. *Node.js* LTS version (`v18.17.0`)
2. Clone this repository

### Run in local

1. Type `npm install` in terminal
2. Make file **.env**

   ```.env
    DATABASE_URL = *server mongodb*
    PORT = 3000
   ```

3. Type `npm run start` to run this project.

## Database Structure

This API have 3 Collections with specific document:

### Video

```json
_id: ObjectId  // Unique
title: String // required=true, index=true, 
url: Array - Object{
                urlVideo: String,  // isUrl=true, required=true
                urlThumb: String,  // isUrl=true, required=true
                _id: false // turnoff _id generate
            }
views: Number // min=0, default=0
like: Number // min=0, default=0
createdAt: Date
updatedAt: Date
```

### Product

```json
_id: ObjectId  // Unique
title: String // required=true, index=true, 
price: number // required=true, min=0
url: Array - Object{
                urlProduct: String,  // isUrl=true, required=true
                urlThumb: String,   // isUrl=true, required=true
                _id: false // turnoff _id generate
            }
videoId: ObjectId // reference Video Collection
createdAt: Date
updatedAt: Date
```

### Comment

```json
_id: ObjectId  // Unique
user: String // required=true, index=true, 
comment: String // required=true, index=true, 
videoId: ObjectId // reference Video Collection
createdAt: Date
updatedAt: Date
```

## API Endpoint

### Video Endpoint

|Method|Path|Params/query|Description|
|:---:|:---:|:---:|---|
|`POST`|/api/v1/videos/| - | Add new video |
|`GET`|/api/v1/videos/| - | Get all video list|
|`GET`|/api/v1/videos/| ?search= | Search video by name|
|`GET`|/api/v1/videos/| :videoId | Get video by Id|

### Product Endpoint

|Method|Path|Params/query|Description|
|:---:|:---:|:---:|---|
|`POST`|/api/v1/product/| - | Add new product |
|`GET`|/api/v1/product/| - | Get all product list|
|`GET`|/api/v1/product/| :productId | Get product by Id|
|`GET`|/api/v1/product/| :videId/product | Get product by `videoId`|
|`GET`|/api/v1/product/| ?sort=asc | Get sorted product|

### Comment Endpoint

|Method|Path|Params/query|Description|
|:---:|:---:|:---:|---|
|`POST`|/api/v1/comments/| - | Add new video |
|`GET`|/api/v1/comments/| - | Get all video list|
|`GET`|/api/v1/comments/| :videoId/comment |Get all comment by `videoId`|
