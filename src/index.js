module.exports = function makeExchange(currency) {
    let Hquan, Qquan, Dquan, Nquan, Pquan;
   var exchange = {
       H: 50,
       Q: 25,
       D: 10,
       N: 5,
       P: 1
   };

   Hquan = Math.floor(currency/exchange.H);
   Qquan = Math.floor((currency - Hquan*exchange.H)/exchange.Q);
   Dquan = Math.floor((currency - Hquan*exchange.H - Qquan*exchange.Q)/exchange.D);
   Nquan = Math.floor((currency - Hquan*exchange.H - Qquan*exchange.Q - Dquan*exchange.D)/exchange.N);
   Pquan = Math.floor((currency - Hquan*exchange.H - Qquan*exchange.Q - Dquan*exchange.D - Nquan*exchange.N)/exchange.P);

   var result = {

   }

   if(Hquan>0){ result.H = Hquan };
   if(Qquan>0){ result.Q = Qquan };
   if(Dquan>0){ result.D = Dquan };
   if(Nquan>0){ result.N = Nquan };
   if(Pquan>0){ result.P = Pquan };

   if(currency>10000){
       return {error: "You are rich, my friend! We don't have so much coins for exchange"};
   } else {
    return result;
   }

}
