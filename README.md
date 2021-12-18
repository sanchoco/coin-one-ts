# coin-one-ts

코인원 API 타입스크립트 모듈

### initialize
new CoinOne(ACCESS_TOKEN, SECRET_KEY);

### function

#### Public API    
orderBook(currency: string)    
ticker(currency: string)   
tickerUTC(currency: string)   
trades(currency: string)    

#### Private API - Account(v2)    
balance()    
deposit()    
userInfo()     
virtual()    

#### Private API - Order(v2)     
cancel(orderId: string, price: number, qty: number, currency: string)    
limitBuy(price: number, qty: number, currency: string)    
limitSell(price: number, qty: number, currency: string)     
limitOrders(currency: string)    
completeOrders(currency: string)     
orderInfo(orderId: string, currency: string)    

#### Private API - Transactions(v2)    
coinTransHistory(currency: string)    
krwTransHistory()     
