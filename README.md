# Mid Term Project (Backend Only)   <!-- omit from toc -->

This repository hold my assignment in Gigih 3.0

## Table of Contents <!-- omit from toc -->

- [1. How to run the project](#1-how-to-run-the-project)
  - [1.1. Prerequisite](#11-prerequisite)
  - [1.2. Run in local](#12-run-in-local)
- [2. Database Structure](#2-database-structure)
  - [2.1. Video](#21-video)
  - [2.2. Product](#22-product)
  - [2.3. Comment](#23-comment)
- [3. API Endpoint](#3-api-endpoint)
  - [3.1. Base URL](#31-base-url)
  - [3.2. Endpoint](#32-endpoint)
    - [3.2.1. Video Endpoint](#321-video-endpoint)
    - [3.2.2. Product Endpoint](#322-product-endpoint)
    - [3.2.3. Comment Endpoint](#323-comment-endpoint)
- [4. Sample Endpoint Usage](#4-sample-endpoint-usage)
  - [4.1 Video Endpoint](#41-video-endpoint)
    - [`GET`: videos/](#get-videos)
    - [`POST`: videos/](#post-videos)
    - [`DELETE`: videos/?videoId=64c388486572349b60294eed](#delete-videosvideoid64c388486572349b60294eed)
    - [`GET`: videos/?search=tv](#get-videossearchtv)
    - [`GET`: videos/video/:videoId](#get-videosvideovideoid)
  - [4.2 Product Endpoint](#42-product-endpoint)
  - [4.3 Comment Endpoint](#43-comment-endpoint)

## 1. How to run the project

### 1.1. Prerequisite

1. *Node.js* LTS version (`v18.17.0`)
2. Clone this repository

### 1.2. Run in local

1. Type `npm install` in terminal
2. Make file **.env**

   ```.env
    DATABASE_URL = *server mongodb*
    PORT = 3000
   ```

3. Type `npm run start` to run this project.

## 2. Database Structure

This API have 3 Collections with specific Schema:

### 2.1. Video

|   Name    |      Type       | Description                                                  | Property                  |
| :-------: | :-------------: | ------------------------------------------------------------ | ------------------------- |
|   __id    |    ObjectId     | Identifier a document as unique value generate automatically | -                         |
|   title   |     String      | Title a video                                                | required=true             |
|    url    |     Object      | Hold url for video and thumbnail                             | -                         |
| urlVideo  | Object(key url) | Hold url video                                               | isUrl=true, required=true |
| urlThumb  | Object(key url) | Hold url thumbnail                                           | isUrl=true, required=true |
|   views   |     Number      | views for video                                              | min=0, default=0          |
|   like    |     Number      | like for video                                               | min=0, default=0          |
| createdAt |      Date       | hold timestamps when video was created                       | -                         |
| updatedAt |      Date       | hold timestamps when video was updated                       | -                         |

### 2.2. Product

|    Name    |      Type       | Description                                                  | Property                  |
| :--------: | :-------------: | ------------------------------------------------------------ | ------------------------- |
|    __id    |    ObjectId     | Identifier a document as unique value generate automatically | -                         |
|   title    |     String      | Title a product                                              | required=true             |
|   price    |     Number      | Price a product                                              | required=true, min=0      |
|    url     |     Object      | Hold url for product and thumbnail                           | -                         |
| urlProduct | Object(key url) | Hold url product                                             | isUrl=true, required=true |
|  urlThumb  | Object(key url) | Hold url thumbnail                                           | isUrl=true, required=true |
|  videoId   | ObjectId(Video) | Hold objectId from Video Collection                          | required=true             |
| createdAt  |      Date       | hold timestamps when video was created                       | -                         |
| updatedAt  |      Date       | hold timestamps when video was updated                       | -                         |

### 2.3. Comment

|   Name    |      Type       | Description                                                  | Property      |
| :-------: | :-------------: | ------------------------------------------------------------ | ------------- |
|   __id    |    ObjectId     | Identifier a document as unique value generate automatically | -             |
| username  |     String      | Comment username                                             | required=true |
|  comment  |     String      | Hold comment text                                            | required=true |
|  videoId  | ObjectId(Video) | Hold objectId from Video Collection                          | required=true |
| createdAt |      Date       | hold timestamps when video was created                       | -             |
| updatedAt |      Date       | hold timestamps when video was updated                       | -             |

## 3. API Endpoint

### 3.1. Base URL

```powershell
http://localhost:PORT/api/v1/
```

### 3.2. Endpoint

#### 3.2.1. Video Endpoint

|  Method  |     Path      | Params / Payload |       Header       | Description           |
| :------: | :-----------: | :--------------: | :----------------: | --------------------- |
|  `GET`   |    videos/    |        -         | `application/json` | Get all video         |
|  `POST`  |    videos/    |        -         | `application/json` | Add new video         |
| `DELETE` |    videos/    |     :videoId     | `application/json` | Delete video by Id    |
|  `GET`   |    videos/    |     ?search=     | `application/json` | Search video by title |
|  `GET`   | videos/video/ |     :videoId     | `application/json` | Get video by Id       |

#### 3.2.2. Product Endpoint

| Method |       Path       |  Params/query   | Description              |
| :----: | :--------------: | :-------------: | ------------------------ |
| `POST` | /api/v1/product/ |        -        | Add new product          |
| `GET`  | /api/v1/product/ |        -        | Get all product list     |
| `GET`  | /api/v1/product/ |   :productId    | Get product by Id        |
| `GET`  | /api/v1/product/ | :videId/product | Get product by `videoId` |
| `GET`  | /api/v1/product/ |    ?sort=asc    | Get sorted product       |

#### 3.2.3. Comment Endpoint

| Method |       Path        |   Params/query   | Description                  |
| :----: | :---------------: | :--------------: | ---------------------------- |
| `POST` | /api/v1/comments/ |        -         | Add new video                |
| `GET`  | /api/v1/comments/ |        -         | Get all video list           |
| `GET`  | /api/v1/comments/ | :videoId/comment | Get all comment by `videoId` |

## 4. Sample Endpoint Usage

### 4.1 Video Endpoint

#### `GET`: videos/

Get all video from database

- Url Params
  
  None
- Url Payload
  
  None
- Success Response
  
  - Status code: 200
  - Body JSON

    ```json
    {
        "message": "Videos was retrieve successfully...",
        "count": 1,
        "data": [
            {
                "url": {
                    "urlVideo": "https://www.youtube.com/watch?v=yMrY4SYFlqk",
                    "urlThumb": "https://i.ytimg.com/vi/9aDkLTIvD-I/maxresdefault.jpg"
                },
                "_id": "64c37c468422c19c87577b35",
                "title": "TV 43 inci sekarang bagus2 ya 😳 - Google TV CHiQ G7P Pro",
                "views": 0,
                "like": 0,
                "createdAt": "2023-07-28T08:28:54.982Z",
                "updatedAt": "2023-07-28T08:28:54.982Z"
            }
        ]
    }
    ```

- Failed Response
  
  - Status code: 404
  
    Message : Collection Videos still empty...

#### `POST`: videos/

Create new video

- Url Params
  
  None
- Url Payload
  
  None
- POST Body
  
  ```json
    {
        "title":"TV 43 inci sekarang bagus2 ya 😳 - Google TV CHiQ G7P Pro",
        "urlVideo":"https://www.youtube.com/watch?v=yMrY4SYFlqk",
        "urlThumb":"https://i.ytimg.com/vi/9aDkLTIvD-I/maxresdefault.jpg"
    }
  ```

- Success Response
  
  - Status code: 201
  - Body JSON

    ```json
    {
        "message": "Video was added successfully...",
        "data": {
            "title": "TV 43 inci sekarang bagus2 ya 😳 - Google TV CHiQ G7P Pro",
            "url": {
                "urlVideo": "https://www.youtube.com/watch?v=yMrY4SYFlqk",
                "urlThumb": "https://i.ytimg.com/vi/9aDkLTIvD-I/maxresdefault.jpg"
            },
            "views": 0,
            "like": 0,
            "_id": "64c388486572349b60294eed",
            "createdAt": "2023-07-28T09:20:08.157Z",
            "updatedAt": "2023-07-28T09:20:08.157Z",
            "__v": 0
        }
    }
    ```

- Failed Response
  - Status Code: 400
  
    Message: There is empty data...

#### `DELETE`: videos/?videoId=64c388486572349b60294eed

Delete video by videoId

- Url Params
  
  required: `videoId`
- Url Payload
  
  None

- Success Response

  - Status code: 202
  - Body JSON

    ```json
    {
        "message": "Video was deleted successfully...",
        "data": {
            "url": {
                "urlVideo": "https://www.youtube.com/watch?v=yMrY4SYFlqk",
                "urlThumb": "https://i.ytimg.com/vi/9aDkLTIvD-I/maxresdefault.jpg"
            },
            "_id": "64c37c468422c19c87577b35",
            "title": "TV 43 inci sekarang bagus2 ya 😳 - Google TV CHiQ G7P Pro",
            "views": 0,
            "like": 0,
            "createdAt": "2023-07-28T08:28:54.982Z",
            "updatedAt": "2023-07-28T08:28:54.982Z",
            "__v": 0
        }
    }
    ```

- Failed Response

  - Status Code: 400
  
    Message: Video Id not valid...
  - Status Code: 404
  
    Message: Video not found...

#### `GET`: videos/?search=tv

Search video by title

- Url Params
  
  None
- Url Payload
  
  required: `?search=value`
- Success Response

  - Status code: 200
  - Body JSON
  
    ```json
    {
        "message": "Videos was retrieve successfully...",
        "count": 1,
        "data": [
            {
                "url": {
                    "urlVideo": "https://www.youtube.com/watch?v=yMrY4SYFlqk",
                    "urlThumb": "https://i.ytimg.com/vi/9aDkLTIvD-I/maxresdefault.jpg"
                },
                "_id": "64c38d1a6572349b60294ef6",
                "title": "TV 43 inci sekarang bagus2 ya 😳 - Google TV CHiQ G7P Pro",
                "views": 0,
                "like": 0,
                "createdAt": "2023-07-28T09:40:42.954Z",
                "updatedAt": "2023-07-28T09:40:42.954Z",
                "__v": 0
            }
        ]
    }
    ```

- Failed Response
  - Status Code: 404
  
    Message: Video title with tv not found...

#### `GET`: videos/video/:videoId

find video by videoId

- Url Params
  
  required: `videoId`
- Url Payload
  
  None

- Success Response

  - Status code: 202
  - Body JSON

    ```json
    {
        "message": "Video was retrieve successfully...",
        "data": {
            "url": {
                "urlVideo": "https://www.youtube.com/watch?v=yMrY4SYFlqk",
                "urlThumb": "https://i.ytimg.com/vi/9aDkLTIvD-I/maxresdefault.jpg"
            },
            "_id": "64c38d1a6572349b60294ef6",
            "title": "TV 43 inci sekarang bagus2 ya 😳 - Google TV CHiQ G7P Pro",
            "views": 0,
            "like": 0,
            "createdAt": "2023-07-28T09:40:42.954Z",
            "updatedAt": "2023-07-28T09:40:42.954Z"
        }
    }
    ```

- Failed Response

  - Status Code: 400
  
    Message: Video Id not valid...
  - Status Code: 404
  
    Message: Video not found...

### 4.2 Product Endpoint

### 4.3 Comment Endpoint
