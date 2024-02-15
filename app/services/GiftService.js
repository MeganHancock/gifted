import { api } from "./AxiosService.js";

class GiftService {
    async getSandboxGifts() {
        console.log('gift service reporting for duty');
        const response = await api.get('api/models/gift')
        console.log(response.data);
    }


}

export const giftService = new GiftService()