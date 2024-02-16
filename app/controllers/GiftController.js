import { AppState } from "../AppState.js";
import { giftService } from "../services/GiftService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawGiftsFromSandbox() {
    const receivedGifts = AppState.receivedGifts
    let htmlString = ''
    receivedGifts.forEach(gift => htmlString += gift.UnopenedReceivedGiftsTemplate);
    setHTML('receivedGiftGrid', htmlString)
}

function _drawActiveGift() {
    const activeGift = AppState.activeGift
    let htmlString = ''
    htmlString += activeGift.RevealActiveGiftTemplate;
    setHTML('unopenedGift', htmlString)
}

// function _drawActiveGift() {
//     document.getElementById('unopenedGift').style.display = "none";
//     document.getElementById('openedActiveGift').style.display = "block";
// }


export class GiftController {
    constructor() {
        console.log('gifted controller hooked up');
        AppState.on('account', this.getSandboxGifts)
        AppState.on('receivedGifts', _drawGiftsFromSandbox)
        AppState.on('activeGift', _drawActiveGift)
    }

    async getSandboxGifts() {
        try {
            await giftService.getSandboxGifts()
        } catch (error) {
            Pop.error(error)
            console.error(error);
        }
    }

    setActiveGift(giftId) {
        console.log('setting active gift', giftId);
        const foundGift = AppState.receivedGifts.find(gift => gift.id == giftId)
        AppState.activeGift = foundGift
        // _drawActiveGift()

    }

    // revealActiveGift(giftId) {
    //     console.log('clicking to reveal');
    //     // document.getElementById('unopenedGift').style.display = "block";
    //     // document.getElementById('openedActiveGift').style.display = "none";
    //     _drawActiveGift()
    // }

    // hideActiveGift(giftId){}
}
