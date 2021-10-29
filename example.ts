import CoinOne from "./index";
require('dotenv').config();

const coinApi = new CoinOne(<string>process.env['ACCESS_TOKEN'], <string>process.env['SECRET_KEY']);

// ############## Public API ##############

// 시세 조회
// coinApi.orderBook('KLAY')
//   .then((res)=> { 
//     console.log('-----매수 희망-----');
//     console.table(res.data['bid'])
//     console.log('\n-----매도 희망-----');
//     console.table(res.data['ask'])
//   });

// 코인 정보 (고가, 저가, 전일가 등)
// coinApi.ticker('KLAY') .then((response: any)=>console.table(response.data))

// 코인 정보 (UTC 기준)
// coinApi.tickerUTC('KLAY') .then((response: any)=>console.table(response.data))

// 최근 거래 현황
// coinApi.trades('KLAY') .then((res) => console.table(res.data['completeOrders']) );




// ############## Private API - Account ##############

// 잔고
// coinApi.balance() .then((response: any)=>console.table(response.data))

// 내 지갑 주소
// coinApi.deposit() .then((res)=>console.table(res.data['walletAddress']))

// 내 정보 (계좌, 모바일, 은행, 수수료, 보안 레벨 등)
// coinApi.userInfo() .then((res)=> console.dir(res.data, { depth: null }))

// 내 가상 계좌 정보
// coinApi.virtual() .then((response: any)=>console.table(response.data))





// ############## Private API - Order ##############

// 주문 취소
// coinApi.cancel('64724ebb-1e4e-11e9-9ec7-00e04c3600d7', 50000, 1, 'KLAY') .then((response: any)=>console.table(response.data))

// 매수
// coinApi.limitBuy(1, 50000, 'KLAY') .then((response: any)=>console.table(response.data))

// 매도
// coinApi.limitSell(50000, 1, 'KLAY') .then(res => console.log(res.data));

// 미체결 목록 조회
// coinApi.limitOrders('KLAY') .then(res => console.log(res.data));

// 체결 목록 조회
// coinApi.completeOrders('KLAY') .then(res => console.table(res.data['completeOrders']))

// 주문 상세 정보 (1건)
// coinApi.orderInfo('64733261-1e4e-11e9-9ec7-00e04c3600d7', 'KLAY') .then(res => console.table(res.data))
