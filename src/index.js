
module.exports = function makeExchange(currency) {
 var currencyy={
     H:50,
     Q:25,
     D:10,
     N:5,
     P:1,
 } 
 var result= {};
 if(currency <= 0) return {};
 if(currency >= 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};
 if(Math.floor(currency/currencyy.H)){
    result.H = Math.floor(currency/currencyy.H);
            currency = currency - result.H * currencyy.H;
 }
 if(Math.floor(currency/currencyy.Q)){
    result.Q = Math.floor(currency/currencyy.Q);
            currency = currency - result.Q * currencyy.Q;
 }
 if(Math.floor(currency/currencyy.D)){
    result.D = Math.floor(currency/currencyy.D);
            currency = currency - result.D * currencyy.D;
 }
 if(Math.floor(currency/currencyy.N)){
    result.N = Math.floor(currency/currencyy.N);
            currency = currency - result.N * currencyy.N;
 }
 if(Math.floor(currency/currencyy.P)){
    result.P = Math.floor(currency/currencyy.P);
            currency = currency - result.P * currencyy.P;
 }
 return result;
}
