import { AppState } from "../AppState.js";
import { Gift } from "../models/Gift.js";
import { api } from "./AxiosService.js";
import { setHTML, setText } from "../utils/Writer.js";



class GiftService {
    async getSandboxGifts() {
        console.log('gift service reporting for duty');
        const response = await api.get('api/gifts')
        console.log(response.data);
        const newGifts = response.data.map(giftPOJO => new Gift(giftPOJO))
        console.log(newGifts);
        AppState.receivedGifts = newGifts
    }


}

export const giftService = new GiftService()