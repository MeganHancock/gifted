import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { Gift } from './models/Gift.js'

class ObservableAppState extends EventEmitter {

  user = null
  /**@type {import('./models/Account.js').Account | null} */
  account = null

  /**
 * @type {Gift[] | null}
  */
  receivedGifts = null



  /**
 * @type {Gift | null}
  */
  activeGift = null
}

export const AppState = createObservableProxy(new ObservableAppState())