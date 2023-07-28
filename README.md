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
    - [`GET`: products/](#get-products)
    - [`POST` products/](#post-products)
    - [`GET`: products/product/64c3ac6761ad3159f1d5407c](#get-productsproduct64c3ac6761ad3159f1d5407c)
    - [`GET`: ?sort=desc](#get-sortdesc)
    - [`GET`: products/64c22e3ef921a04215fed0b8/product](#get-products64c22e3ef921a04215fed0b8product)
  - [4.3 Comment Endpoint](#43-comment-endpoint)
    - [`GET`: comments/](#get-comments)
    - [`GET`: comments/:videoId/comment/](#get-commentsvideoidcomment)
    - [`POST`: comments/64c22e25f921a04215fed0b6/comment/](#post-comments64c22e25f921a04215fed0b6comment)
    - [`DELETE`: comments/?commentId=64c39d1183eb9da33df346e0](#delete-commentscommentid64c39d1183eb9da33df346e0)

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

| Method |   Path   |    Params/query    | Description              |
| :----: | :------: | :----------------: | ------------------------ |
| `POST` | product/ |         -          | Add new product          |
| `GET`  | product/ |         -          | Get all product list     |
| `GET`  | product/ | product/:productId | Get product by Id        |
| `GET`  | product/ |  :videId/product   | Get product by `videoId` |
| `GET`  | product/ |     ?sort=asc      | Get sorted product       |

#### 3.2.3. Comment Endpoint

|  Method  |   Path    |   Params/query   | Description                  |
| :------: | :-------: | :--------------: | ---------------------------- |
|  `POST`  | comments/ | :videoId/comment | Add new video                |
| `DELETE` | comments/ |        -         | Delete comment by Id         |
|  `GET`   | comments/ |        -         | Get all video list           |
|  `GET`   | comments/ | :videoId/comment | Get all comment by `videoId` |

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

  - Status code: 200
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

#### `GET`: products/

Get all Product from database

- Url Params
  
  None
- Url Payload
  
  None
- Success Response
  
  - Status code: 200
  - Body JSON

    ```json
    {
            "message": "Products was retrieve successfully...",
            "count": 1,
            "data": [
                {
                    "url": {
                        "urlProduct": "https://www.tokopedia.com/agusidstoreapple/asus-vivobook-k513ea-core-i5-1135g7-8gb-256gb-512gb-ssd-15-6-fhd-oled-512gb-gold-non-bundling?extParam=ivf%3Dfalse&src=topads",
                        "urlThumb": "https://images.tokopedia.net/img/cache/900/VqbcmM/2023/5/23/b28a6c97-2393-493b-9cbd-1fd97fe2f320.png"
                    },
                    "_id": "64c3ac6761ad3159f1d5407c",
                    "title": "Asus Vivobook K513EA Core i5 1135G7 8GB 256GB/512GB SSD 15.6\" FHD OLED - 512GB Gold, NON BUNDLING",
                    "price": 9128999,
                    "videoId": "64c22e3ef921a04215fed0b8",
                    "createdAt": "2023-07-28T11:54:15.412Z",
                    "updatedAt": "2023-07-28T11:54:15.412Z"
                }
            ]
    }
    ```

- Failed Response
  
  - Status code: 404
  
    Message : Collection Product still empty...

#### `POST` products/

Create new Product

- Url Params
  
  none
- Url Payload
  
  None
- POST Body
  
  ```json
  {
      "title": "Asus Vivobook K513EA Core i5 1135G7 8GB 256GB/512GB SSD 15.6\" FHD OLED - 512GB Gold, NON BUNDLING",
      "price": 9128999,
      "urlProduct": "https://www.tokopedia.com/agusidstoreapple/asus-vivobook-k513ea-core-i5-1135g7-8gb-256gb-512gb-ssd-15-6-fhd-oled-512gb-gold-non-bundling?extParam=ivf%3Dfalse&src=topads",
      "urlThumb": "https://images.tokopedia.net/img/cache/900/VqbcmM/2023/5/23/b28a6c97-2393-493b-9cbd-1fd97fe2f320.png",
      "videoId": "64c22e3ef921a04215fed0b8"
  }
  ```

- Success Response
  
  - Status code: 201
  - Body JSON

    ```json
    {
        "message": "Product was added successfully...",
        "data": {
            "title": "Asus Vivobook K513EA Core i5 1135G7 8GB 256GB/512GB SSD 15.6\" FHD OLED - 512GB Gold, NON BUNDLING",
            "price": 9128999,
            "url": {
                "urlProduct": "https://www.tokopedia.com/agusidstoreapple/asus-vivobook-k513ea-core-i5-1135g7-8gb-256gb-512gb-ssd-15-6-fhd-oled-512gb-gold-non-bundling?extParam=ivf%3Dfalse&src=topads",
                "urlThumb": "https://images.tokopedia.net/img/cache/900/VqbcmM/2023/5/23/b28a6c97-2393-493b-9cbd-1fd97fe2f320.png"
            },
            "videoId": "64c22e3ef921a04215fed0b8",
            "_id": "64c3ac6761ad3159f1d5407c",
            "createdAt": "2023-07-28T11:54:15.412Z",
            "updatedAt": "2023-07-28T11:54:15.412Z",
            "__v": 0
        }
    }
    ```

- Failed Response
  - Status Code: 400
  
    Message: There is empty data...

#### `GET`: products/product/64c3ac6761ad3159f1d5407c

find product by Id

- Url Params
  
  required: `productId`
- Url Payload
  
  None

- Success Response

  - Status code: 200
  - Body JSON

    ```json
    {
        "message": "Product was retrieve successfully...",
        "data": {
            "url": {
                "urlProduct": "https://www.tokopedia.com/agusidstoreapple/asus-vivobook-k513ea-core-i5-1135g7-8gb-256gb-512gb-ssd-15-6-fhd-oled-512gb-gold-non-bundling?extParam=ivf%3Dfalse&src=topads",
                "urlThumb": "https://images.tokopedia.net/img/cache/900/VqbcmM/2023/5/23/b28a6c97-2393-493b-9cbd-1fd97fe2f320.png"
            },
            "_id": "64c3ac6761ad3159f1d5407c",
            "title": "Asus Vivobook K513EA Core i5 1135G7 8GB 256GB/512GB SSD 15.6\" FHD OLED - 512GB Gold, NON BUNDLING",
            "price": 9128999,
            "videoId": "64c22e3ef921a04215fed0b8",
            "createdAt": "2023-07-28T11:54:15.412Z",
            "updatedAt": "2023-07-28T11:54:15.412Z"
        }
    }
    ```

- Failed Response

  - Status Code: 400
  
    Message: Product Id not valid...
  - Status Code: 404
  
    Message: Product not found...

#### `GET`: ?sort=desc

sort product by price

- Url Params
  
  None
- Url Payload
  
  Required: `asc` or `desc`

- Success Response

  - Status code: 200

- Failed Response

  - Status code: 400

    Message : Invalid payload, payload must either asc or desc...

#### `GET`: products/64c22e3ef921a04215fed0b8/product

find product by videoId

- Url Params
  
  required: `videoId`
- Url Payload
  
  None

- Success Response

  - Status code: 200
  - Body JSON

    ```json
    {
        "message": "Product was retrieve successfully...",
        "data": [
            {
                "url": {
                    "urlProduct": "https://www.tokopedia.com/agusidstoreapple/asus-vivobook-k513ea-core-i5-1135g7-8gb-256gb-512gb-ssd-15-6-fhd-oled-512gb-gold-non-bundling?extParam=ivf%3Dfalse&src=topads",
                    "urlThumb": "https://images.tokopedia.net/img/cache/900/VqbcmM/2023/5/23/b28a6c97-2393-493b-9cbd-1fd97fe2f320.png"
                },
                "_id": "64c3ac6761ad3159f1d5407c",
                "title": "Asus Vivobook K513EA Core i5 1135G7 8GB 256GB/512GB SSD 15.6\" FHD OLED - 512GB Gold, NON BUNDLING",
                "price": 9128999,
                "videoId": "64c22e3ef921a04215fed0b8",
                "createdAt": "2023-07-28T11:54:15.412Z",
                "updatedAt": "2023-07-28T11:54:15.412Z",
                "__v": 0
            }
        ]
    }
    ```

- Failed Response

  - Status Code: 400
  
    Message: Product Id not valid...

### 4.3 Comment Endpoint

#### `GET`: comments/

Get all comments from database

- Url Params
  
  None
- Url Payload
  
  None
- Success Response
  
  - Status code: 200
  - Body JSON

    ```json
    {
        "message": "Comments was retrieve successfully...",
        "count": 1,
        "data": [
            {
                "_id": "64c28da080dc1c11270f9949",
                "user": "WildanHero",
                "comment": "Bang, masukan aja untuk review smart tv coba juga wireless mirroring nya dari HP dan Laptop dong. Thanks, sukses terus buat channel gadgetin",
                "videoId": "64c2801db335e70f05cb3824",
                "createdAt": "2023-07-27T15:30:40.689Z",
                "updatedAt": "2023-07-27T15:30:40.689Z"
            }
        ]
    }
    ```

- Failed Response
  
  - Status code: 404
  
    Message : Collection Comment still empty...

#### `GET`: comments/:videoId/comment/

Get comment by videoId

- Url Params
  
  required: `:videoId`
- Url Payload
  
  None
- Success Response
  
  - Status code: 200
  - Body JSON
  
  ```json
  {
      "message": "Comments was retrieve successfully...",
      "count": 1,
      "data": [
          {
              "_id": "64c28da080dc1c11270f9949",
              "user": "WildanHero",
              "comment": "Bang, masukan aja untuk review smart tv coba juga wireless mirroring nya dari HP dan Laptop dong. Thanks, sukses terus buat channel gadgetin",
              "videoId": "64c2801db335e70f05cb3824",
              "createdAt": "2023-07-27T15:30:40.689Z",
              "updatedAt": "2023-07-27T15:30:40.689Z",
              "__v": 0
          }
      ]
  }
  ```

- Failed Response
  
  - Status code: 404
  
    Message : Comment not found...
  
  - Status code: 400

    Message : Video Id not valid...

#### `POST`: comments/64c22e25f921a04215fed0b6/comment/

Create new video

- Url Params
  
  required: `:videoId`
- Url Payload
  
  None
- POST Body
  
  ```json
    {
        "user":"user1",
        "comment":"mantap bang"
    }
  ```

- Success Response
  
  - Status code: 201
  - Body JSON

    ```json
    {
      "message": "Comment was added successfully...",
      "data": {
          "username": "user1",
          "comment": "mantap bang",
          "videoId": "64c22e25f921a04215fed0b6",
          "_id": "64c39c9e83eb9da33df346da",
          "createdAt": "2023-07-28T10:46:54.233Z",
          "updatedAt": "2023-07-28T10:46:54.233Z",
          "__v": 0
      }
    }
    ```

- Failed Response
  - Status Code: 400
  
    Message: There is empty data...

#### `DELETE`: comments/?commentId=64c39d1183eb9da33df346e0

Delete Comment by Id

- Url Params
  
  required: `commentId`
- Url Payload
  
  None

- Success Response

  - Status code: 202
  - Body JSON

    ```json
    {
        "message": "Comment was deleted successfully...",
        "data": {
            "_id": "64c39d1183eb9da33df346e0",
            "username": "user1",
            "comment": "mantap bang",
            "videoId": "64c22e25f921a04215fed0b6",
            "createdAt": "2023-07-28T10:48:49.979Z",
            "updatedAt": "2023-07-28T10:48:49.979Z",
            "__v": 0
        }
    }
    ```

- Failed Response

  - Status Code: 400
  
    Message: Video Id not valid...
  - Status Code: 404
  
    Message: Video not found...
