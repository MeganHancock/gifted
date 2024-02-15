import { AppState } from "../AppState.js";
import { Gift } from "../models/Gift.js";
import { api } from "./AxiosService.js";

class GiftService {
    async getSandboxGifts() {
        console.log('gift service reporting for duty');
        const response = await api.get('api/gifts')
        console.log(response.data);
        const newGifts = response.data.map(giftPOJO => new Gift(giftPOJO))
        console.log(newGifts);
        AppState.receivedGift = newGifts
    }


}

export const giftService = new GiftService()