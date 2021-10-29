import axios from 'axios';
import { createHmac } from 'crypto';

type Payload = {
    [key: string]: unknown
}

export class CoinOne {
  access: string;
  secret: string;
  baseURL: string;

  constructor (access_token: string, secret: string) {
      this.access = access_token;
      this.secret = secret;
      this.baseURL = 'https://api.coinone.co.kr';
  }

  private get(path: string, currency: string) {
    return axios({
      url: this.baseURL + path,
      method: 'GET',
      params: { currency: currency }
    })
  }

  private post(path: string, payload: Payload) {
    const mergedPayload = Object.assign({ access_token: this.access, nonce: Date.now() }, payload);
    const encodedPayload = Buffer.from(JSON.stringify(mergedPayload)).toString('base64');
    const signature = createHmac('sha512', this.secret).update(encodedPayload).digest('hex');

    return axios({
        url: this.baseURL + path,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-COINONE-SIGNATURE': signature,
            'X-COINONE-PAYLOAD': encodedPayload
        },
        data: mergedPayload
    })
  }

  // Public API
  orderBook(currency: string) { return this.get('/orderbook', currency) } 
  ticker(currency: string) { return this.get('/ticker', currency) }
  tickerUTC(currency: string) { return this.get('/ticker_utc', currency) }
  trades(currency: string) { return this.get('/trades', currency) }

  // Private API - Account(v2)
  balance() { return this.post('/v2/account/balance/', {}) };
  deposit() { return this.post('/v2/account/deposit_address/', {}) };
  userInfo() { return this.post('/v2/account/user_info/', {}) };
  virtual() { return this.post('/v2/account/virtual_account/', {}) };

  // Private API - Order(v2)
  cancel(orderId: string, price: number, qty: number, currency: string) {
    return this.post('/v2/order/cancel', {
      order_id: orderId,
      price,
      qty,
      is_ask: 1,
      currency
    })
  }

  limitBuy(price: number, qty: number, currency: string) {
    return this.post('/v2/order/limit_buy', {
      price,
      qty,
      currency,
      is_post_only: false
    })
  }

  limitSell(price: number, qty: number, currency: string) {
    return this.post('/v2/order/limit_sell', {
      price,
      qty,
      currency,
      is_post_only: false
    })
  }
  
  limitOrders(currency: string) { return this.post('/v2/order/limit_orders', { currency }) }
  completeOrders(currency: string) { return this.post('/v2/order/complete_orders', { currency }) }
  orderInfo(orderId: string, currency: string) { return this.post('/v2/order/query_order', { order_id: orderId, currency }) }

    // Private API - Transactions(v2)
  coinTransHistory(currency: string) { return this.post('/v2/transaction/history', { currency }) }
  krwTransHistory() { return this.post('/v2/transaction/krw/history', { }) }
}

export default CoinOne;