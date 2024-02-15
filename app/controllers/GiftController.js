import { AppState } from "../AppState.js";
import { giftService } from "../services/GiftService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";


export class GiftController {
    constructor() {
        console.log('gifted controller hooked up');
        AppState.on('account', this.getSandboxGifts)
    }

    async getSandboxGifts() {
        try {
            await giftService.getSandboxGifts()
        } catch (error) {
            Pop.error(error)
            console.error(error);
        }
    }
}
