export class Gift {

    constructor(data) {
        this.tag = data.tag
        this.url = data.url
        this.opened = data.opened
        this.profileIdsOpened = data.profileIdsOpened
    }
}

// const modelBlueprint = {

//     "tag": {
//       "type": "String",
//       "maxlength": 120
//     },
//     "url": {
//       "type": "String",
//       "required": true,
//       "maxLength": 500
//     },
//     "opened": {
//       "type": "Boolean",
//       "default": false
//     },
//     "creatorId": {
//       "type": "ObjectId",
//       "required": true,
//       "ref": "Account"
//     },
//     "profileIdsOpened": [
//       {
//         "type": "ObjectId",
//         "ref": "Account"
//       }
//     ]
//   }

