export class Gift {

    constructor(data) {
        this.tag = data.tag
        this.url = data.url
        this.opened = data.opened
        this.profileIdsOpened = data.profileIdsOpened
        this.id = data.id
        this.opened = data.opened
        this.creator = data.creator
    }

    get UnopenedReceivedGiftsTemplate() {
        return `
        <div  id="unopenedGift" class="col-3 card p-2 m-3 d-flex align-items-center justify-content-center">
        <div class="card p-2 h-auto white-bg rounded-3 text-center">


            <p class="m-2 fw-bold">${this.tag}</p>
            <button  type="button" onclick="app.GiftController.setActiveGift('${this.id}')">Click Here to Open</p>
            </button>
            <i class="mb-2 fs-3 mdi mdi-cursor-default-click"></i>
     
        </div>
    </div>
`
    }

    get RevealActiveGiftTemplate() {
        return `
        <div onclick="app.GiftController.hideActiveGift('${this.id}')"id="openedActiveGift"
                    class="col-3 h-auto card p-2 m-1 d-flex align-items-center justify-content-center">
                    <div class="h-auto white-bg rounded-3 text-center">
                        <img src='${this.url}'
                            class="card-img-top" alt="...">

                    </div>
                    
        `
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

