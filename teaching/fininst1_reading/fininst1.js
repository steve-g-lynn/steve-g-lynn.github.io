
/*** SET INPUT NUMBERS ***/

/* random numbers to generate algorithmic variations */
let a1=getRndInteger(100,999);
let b1=getRndInteger(100,999);
let c1=getRndInteger(100,999);

/* EXAMPLE 1 FINANCIAL ASSET RIGHT TO RECEIVE*/
let fa_receive = [
"Trade receivables or outstanding dues from customers",
"A note receivable",
"A bond asset (i.e., a bond held by the entity in the position of lender)",
"The right to receive shares of another entity",
][getRndInteger(0,4)];

sl_update("fa_receive",fa_receive);


/* EXAMPLE 2 FINANCIAL ASSET GAIN EXPECTED */
let ex2_fwd_K = getRndInteger(100,120);
let ex2_fwd_F = getRndInteger(130, 140);
let ex2_opt1_K = getRndInteger(10,20);
let ex2_opt1_S = getRndInteger(23, 27);
let ex2_opt2_K = getRndInteger(25,30);
let ex2_opt2_S = getRndInteger(5,10);

let fa_gain = [
`A forward contract giving the entity the right (and obligation) to buy an item at a future date for a fixed price of ${ex2_fwd_K}. The current market price for buying the item at that future date (the forward price) is ${ex2_fwd_F}. Thus the entity has an expected gain of ${ex2_fwd_F - ex2_fwd_K} when it buys the item at the future date`,
`An option contract giving the entity the right (but not the obligation) to buy the shares of Ho Co at a future date for a fixed price of ${ex2_opt1_K}. The current share price of Ho Co shares is ${ex2_opt1_S} (the best guess of the future price under the standard finance assumption of a random walk). Thus, the entity can expect to make a gain of ${ex2_opt1_S - ex2_opt1_K} if and when it exercises the option.`,
`An option contract giving the entity the right (but not the obligation) to buy the shares of See Tho Co at a future date for a fixed price of ${ex2_opt2_K}. The current share price of See Tho Co shares is ${ex2_opt2_S} (the best guess of the future price under the standard finance assumption of a random walk). Although this option is &quot;out of the money&quot;, it still carries the expectation of a future gain, since there is some probability of the share price rising above ${ex2_opt2_K} by the exercise date, and the entity need only exercise the option if it is profitable to do so.`,
][getRndInteger(0,3)];

sl_update("fa_gain", fa_gain);


/* EXAMPLE 3 FINANCIAL LIABILITY DUTY TO PAY*/
let ex3_must_pay = [
"Trade payables or outstanding dues to suppliers",
"A note payable",
"A bond issued (i.e., a bond issued by the entity in the position of borrower)",
][getRndInteger(0,3)];

sl_update("ex3_must_pay",ex3_must_pay);

/* EXAMPLE 4 FINANCIAL LIABILITY LOSS EXPECTED */
let ex4_fwd_K = getRndInteger(130,140);
let ex4_fwd_F = getRndInteger(100, 120);
let ex4_opt1_K = getRndInteger(10,20);
let ex4_opt1_S = getRndInteger(23, 27);
let ex4_opt2_K = getRndInteger(25,30);
let ex4_opt2_S = getRndInteger(5,10);

let ex4_loss = [
`A forward contract giving the entity the right (and obligation) to buy an item at a future date for a fixed price of ${ex4_fwd_K}. The current market price for buying the item at that future date (the forward price) is ${ex4_fwd_F}. Thus the entity has an expected loss of ${ex4_fwd_K - ex4_fwd_F} when it buys the item at the future date`,
`An option contract written or issued or sold by See Tho Co (the reporting entity) giving See Tho Co the obligation to sell the shares of Ho Co at a future date to the option holder for a fixed price of ${ex4_opt1_K}. The current share price of Ho Co shares is ${ex4_opt1_S} (the best guess of the future price under the standard finance assumption of a random walk). Thus, the entity can expect to make a loss of ${ex4_opt1_S - ex4_opt1_K} if and when the holder exercises the option.`,
`An option contract written or issued or sold by See Tho Co (the reporting entity) giving the option holder the right (but not the obligation) to buy the shares of Ho Co at a future date for a fixed price of ${ex4_opt2_K}. The current share price of Ho Co shares is ${ex4_opt2_S} (the best guess of the future price under the standard finance assumption of a random walk). Although this option is &quot;out of the money&quot;, it still carries the expectation of a future loss to See Tho Co, since there is some probability of the share price rising above ${ex4_opt2_K} by the exercise date, and the option holder need only exercise the option if it is profitable to them to do so.`,
][getRndInteger(0,3)];

sl_update("ex4_loss", ex4_loss);


/* EX 5 EXAMPLE OF FORWARD CONTRACT */

let ex5_no = getRndInteger(10,20);
sl_update("ex5_no",ex5_no);
let ex5_F = getRndInteger(100,200);
sl_update("ex5_F", ex5_F);
let ex5_days = getRndInteger(60,90);
sl_update("ex5_days", ex5_days);


/*EX 6 -- FUTURES EXAMPLE */
let ex6_00tons = getRndInteger(3,5)*100;
sl_update("ex6_00tons", ex6_00tons);
let ex6_F = getRndInteger(100,110);
sl_update("ex6_F", ex6_F);
let ex6_days = getRndInteger(60,90);
sl_update("ex6_days", ex6_days);
let ex6_deposit = ex6_00tons * 100 * ex6_F * 0.1;
sl_update("ex6_deposit", ex6_deposit.toLocaleString());

/* EXAMPLE 7 OPTIONS EXAMPLE */

let ex7_no = getRndInteger(1000,1500);
sl_update("ex7_no", ex7_no.toLocaleString());
let ex7_days = getRndInteger(60,90);
sl_update("ex7_days", ex7_days);
let ex7_S = getRndInteger(100,110);
sl_update("ex7_S", ex7_S);
let ex7_V0 = getRndInteger(3,7)*0.01;
sl_update("ex7_V0", ex7_V0.toLocaleString());

/* EX 8 FAIR VALUE OF FORWARD */

let ex8_A = getRndInteger(10,30)*1000;
sl_update("ex8_A", ex8_A.toLocaleString());

let ex8_days = getRndInteger(60,90);
sl_update("ex8_days", ex8_days);

let ex8_dt = getRndInteger(9900, 9999) / 10_000;
sl_update("ex8_dt", ex8_dt);

let ex8_K = getRndInteger(150, 180) / 100;
sl_update("ex8_K", ex8_K);

let ex8_F = getRndInteger(150, 180) / 100;
sl_update("ex8_F", ex8_F);

let ex8_fv = ex8_A * (ex8_K - ex8_F) * ex8_dt;
sl_update("ex8_fv", ex8_fv.toLocaleString());

let ex8_isliab;
if (ex8_fv < 0){
 ex8_isliab = "The forward contract is a liability.";
}
else if (ex8_fv > 0) {
 ex8_isliab = "The forward contract is an asset."
}
else {
 ex8_isliab = "The forward contract is worth zero."
 ex8_isliab = "The forward contract is worth zero."
}
sl_update("ex8_isliab", ex8_isliab);

/* EX9 -- ACCOUNTING FOR FORWARDS */

let ex9_A = getRndInteger(2,5)*1_000;
sl_update("ex9_A", ex9_A);
let ex9_K = getRndInteger(150,170)/100;
sl_update("ex9_K", ex9_K);
let ex9_F_0430 = getRndInteger(150,170)/100;
if (ex9_F_0430 == ex9_K) {
 ex9_F_0430 += 1/10;
}
sl_update("ex9_F_0430", ex9_F_0430);

let ex9_dt_0430 = getRndInteger(9993, 9999)/10000;
sl_update("ex9_dt_0430", ex9_dt_0430);

let ex9_S_0515 = getRndInteger(150,170)/100;
if (ex9_S_0515 == ex9_K) {
 ex9_S_0515 += 1/10;
}
sl_update("ex9_S_0515", ex9_S_0515);

let ex9_fv_0430 = ( ex9_K - ex9_F_0430 ) * ex9_dt_0430 * ex9_A;
sl_update("ex9_fv_0430", ex9_fv_0430.toLocaleString());

let ex9_je_0430="";
if ( ex9_fv_0430 > 0 ) {
 ex9_je_0430 = `
<table>
<tr>
<td class="je_item">
30-Apr-20x5
</td>
<td></td>
<td></td>
</tr>
<tr>
<td class="je_item">
Dr Forward contract (A)
</td>
<td class="je_amt">
${ ex9_fv_0430.toFixed(2) }
</td>
<td></td>
</tr>
<tr>
<td class="je_item">
&emsp;Cr Gain on forward contract
</td>
<td></td>
<td class="je_amt">
${ ex9_fv_0430.toFixed(2) }
</td>
</tr>
<tr>
<td class="je_item">
<i>Mark to market on 30-Apr-20x5</i>
</td>
<td></td>
<td></td>
</tr>
</table>
 `;
}
else {
 ex9_je_0430 = `
<table>
<tr>
<td class="je_item">
30-Apr-20x5
</td>
<td></td>
<td></td>
</tr>
<tr>
<td class="je_item">
Dr Loss on forward contract
</td>
<td class="je_amt">
${ Math.abs(ex9_fv_0430).toFixed(2) }
</td>
<td></td>
</tr>
<tr>
<td class="je_item">
&emsp;Cr Forward contract (L)
</td>
<td></td>
<td class="je_amt">
${ Math.abs(ex9_fv_0430).toFixed(2) }
</td>
</tr>
<tr>
<td class="je_item">
<i>Mark to market on 30-Apr-20x5</i>
</td>
<td></td>
<td></td>
</tr>
</table>
 `;
}
sl_update("ex9_je_0430", ex9_je_0430);

let ex9_fv_0515 = ex9_A * (ex9_K - ex9_S_0515);
sl_update("ex9_fv_0515", ex9_fv_0515.toLocaleString());

let ex9_je_0515_m2m = "";
let ex9_gain_0515 = ex9_fv_0515 - ex9_fv_0430;
sl_update("ex9_gain_0515", ex9_gain_0515.toLocaleString());


if ( ex9_fv_0515 > ex9_fv_0430 ) {
 ex9_je_0515_m2m = `
<table>
<tr>
<td class="je_item">
15-May-20x5
</td>
<td></td>
<td></td>
</tr>
<tr>
<td class="je_item">
Dr Forward contract
</td>
<td class="je_amt">
${ ex9_gain_0515.toFixed(2) }
</td>
<td></td>
</tr>
<tr>
<td class="je_item">
&emsp;Cr Gain on forward contract
</td>
<td></td>
<td class="je_amt">
${ ex9_gain_0515.toFixed(2) }
</td>
</tr>
<tr>
<td class="je_item">
<i>Mark to market on 15-May-20x5</i>
</td>
<td></td>
<td></td>
</tr>
</table>
 `;
}
else {
 ex9_je_0515_m2m = `
<table>
<tr>
<td class="je_item">
15-May-20x5
</td>
<td></td>
<td></td>
</tr>
<tr>
<td class="je_item">
Dr Loss on forward contract
</td>
<td class="je_amt">
${ Math.abs(ex9_gain_0515).toFixed(2) }
</td>
<td></td>
</tr>
<tr>
<td class="je_item">
&emsp;Cr Forward contract 
</td>
<td></td>
<td class="je_amt">
${ Math.abs(ex9_gain_0515).toFixed(2) }
</td>
</tr>
<tr>
<td class="je_item">
<i>Mark to market on 15-May-20x5</i>
</td>
<td></td>
<td></td>
</tr>
</table>
 `;
}
sl_update("ex9_je_0515_m2m", ex9_je_0515_m2m);

let ex9_je_0515_settle = "";

if ( ex9_fv_0515 > 0 ) {
 ex9_je_0515_settle = `
<table>
<tr>
<td class="je_item">
15-May-20x5
</td>
<td></td>
<td></td>
</tr>
<tr>
<td class="je_item">
Dr Cash
</td>
<td class="je_amt">
${ ex9_fv_0515.toFixed(2) }
</td>
<td></td>
</tr>
<tr>
<td class="je_item">
&emsp;Cr Forward contract
</td>
<td></td>
<td class="je_amt">
${ ex9_fv_0515.toFixed(2) }
</td>
</tr>
<tr>
<td class="je_item">
<i>Settlement on 15-May-20x5</i>
</td>
<td></td>
<td></td>
</tr>
</table>
 `;
}
else {
 ex9_je_0515_settle = `
<table>
<tr>
<td class="je_item">
15-May-20x5
</td>
<td></td>
<td></td>
</tr>
<tr>
<td class="je_item">
Dr Forward contract
</td>
<td class="je_amt">
${ Math.abs(ex9_fv_0515).toFixed(2) }
</td>
<td></td>
</tr>
<tr>
<td class="je_item">
&emsp;Cr Cash 
</td>
<td></td>
<td class="je_amt">
${ Math.abs(ex9_fv_0515).toFixed(2) }
</td>
</tr>
<tr>
<td class="je_item">
<i>Settlement on 15-May-20x5</i>
</td>
<td></td>
<td></td>
</tr>
</table>
 `;
}
sl_update("ex9_je_0515_settle",  ex9_je_0515_settle);

/* EX10 ACCOUNTING FOR FUTURES*/

let ex10_A = getRndInteger(1,5)*1000;
sl_update("ex10_A", ex10_A);

let ex10_K = getRndInteger(95,110);
sl_update("ex10_K", ex10_K);

let ex10_deposit_dec = getRndInteger(5,20)/100;
let ex10_deposit_perc = 100*ex10_deposit_dec;
sl_update("ex10_deposit_perc", ex10_deposit_perc);
sl_update("ex10_deposit_dec", ex10_deposit_dec);

let ex10_F_16 = getRndInteger(95,110);
sl_update("ex10_F_16", ex10_F_16);
let ex10_F_17 = getRndInteger(95,110);
sl_update("ex10_F_17", ex10_F_17);

// CALCULATIONS
let ex10_deposit_amt = ex10_deposit_dec * ex10_A * ex10_K;
sl_update("ex10_deposit_amt", ex10_deposit_amt.toFixed(2));
let ex10_fv_16 = ex10_A * (ex10_K - ex10_F_16);
sl_update("ex10_fv_16", ex10_fv_16.toFixed(2));

let ex10_je_16="";
if (ex10_fv_16 > 0) {
 ex10_je_16 = `
<table>
<tr>
<td class="je_item">16-Oct-20x5</td>
<td></td>
<td></td>
</tr>
<tr>
<td class="je_item">Dr Cash</td>
<td class="je_amt">${ex10_fv_16.toFixed(2)}</td>
<td></td>
</tr>
<tr>
<td class="je_item">&nbsp;&nbsp;Cr Gain on futures contract</td>
<td></td>
<td class="je_amt">${ex10_fv_16.toFixed(2)}</td>
</tr>
<tr>
<td class="je_item"><i>Settlement of gain on 16-Oct</i></td>
<td></td>
<td></td>
</tr>
</table>
`
}
else {
 ex10_je_16 = `
<table>
<tr>
<td class="je_item">16-Oct-20x5</td>
<td></td>
<td></td>
</tr>
<tr>
<td class="je_item">Dr Loss on futures contract</td>
<td class="je_amt">${Math.abs(ex10_fv_16).toFixed(2)}</td>
<td></td>
</tr>
<tr>
<td class="je_item">&nbsp;&nbsp;Cr Cash</td>
<td></td>
<td class="je_amt">${Math.abs(ex10_fv_16).toFixed(2)}</td>
</tr>
<tr>
<td class="je_item"><i>Settlement of loss on 16-Oct</i></td>
<td></td>
<td></td>
</tr>
</table>
`
}
sl_update("ex10_je_16", ex10_je_16);

let ex10_fv_17 = ex10_A * (ex10_K - ex10_F_17);
sl_update("ex10_fv_17", ex10_fv_17.toFixed(2));

let ex10_gain_17 = ex10_fv_17 - ex10_fv_16;
sl_update("ex10_gain_17", ex10_gain_17.toFixed(2));

let ex10_je_17="";
if (ex10_gain_17 > 0) {
 ex10_je_17 = `
<table>
<tr>
<td class="je_item">17-Oct-20x5</td>
<td></td>
<td></td>
</tr>
<tr>
<td class="je_item">Dr Cash</td>
<td class="je_amt">${(ex10_deposit_amt +ex10_gain_17).toFixed(2)}</td>
<td></td>
</tr>
<tr>
<td class="je_item">&nbsp;&nbsp;Cr Gain on futures contract</td>
<td></td>
<td class="je_amt">${ex10_gain_17.toFixed(2)}</td>
</tr>
<tr>
<td class="je_item">&nbsp;&nbsp;Cr Margin deposit</td>
<td></td>
<td class="je_amt">${ex10_deposit_amt.toFixed(2)}</td>
</tr>
<tr>
<td class="je_item"><i>Settlement of futures contract on 17-Oct</i></td>
<td></td>
<td></td>
</tr>
</table>
`
}
else {
 ex10_je_17 = `
<table>
<tr>
<td class="je_item">17-Oct-20x5</td>
<td></td>
<td></td>
</tr>
<tr>
<td class="je_item">Dr Cash</td>
<td class="je_amt">${(ex10_deposit_amt +ex10_gain_17).toFixed(2)}</td>
<td></td>
</tr>
<tr>
<td class="je_item">Dr Loss on futures contract</td>
<td class="je_amt">${Math.abs(ex10_gain_17).toFixed(2)}</td>
<td></td>
</tr>
<tr>
<td class="je_item">&nbsp;&nbsp;Cr Margin deposit</td>
<td></td>
<td class="je_amt">${ex10_deposit_amt.toFixed(2)}</td>
</tr>
<tr>
<td class="je_item"><i>Settlement of futures contract on 17-Oct</i></td>
<td></td>
<td></td>
</tr>
</table>
`
}
sl_update("ex10_je_17", ex10_je_17);


/* EXAMPLE 11 OPTIONS ACCOUNTING*/

let ex11_K = getRndInteger(8,12);
sl_update("ex11_K", ex11_K.toLocaleString());

let ex11_A = getRndInteger(8,12)*1000;
sl_update("ex11_A", ex11_A.toLocaleString());

let ex11_V0 = getRndInteger(10,23)/100;
sl_update("ex11_V0", ex11_V0.toLocaleString());

let ex11_S1 = getRndInteger(8,12);
sl_update("ex11_S1", ex11_S1.toLocaleString());

let ex11_V1=0;
if ( (ex11_K - ex11_S1) > 0 ) {
 ex11_V1 = (ex11_K - ex11_S1) + getRndInteger(10,23)/100;
}
else {
 ex11_V1 = getRndInteger(10,23)/100;
}
sl_update("ex11_V1", ex11_V1.toLocaleString());

let ex11_S2= getRndInteger(8,12);
sl_update("ex11_S2", ex11_S2.toLocaleString());

let ex11_amt_0 = ex11_V0 * ex11_A;
sl_update("ex11_amt_0", ex11_amt_0.toFixed(2));

let ex11_je_1="";
let ex11_fv_1 = ex11_V1 * ex11_A;
let ex11_gain_1 = ex11_fv_1 - ex11_amt_0;

if (ex11_gain_1 > 0) {
 ex11_je_1 = `
<table>
<tr>
<td class="je_item">30-Jun-20x5</td>
<td></td>
<td></td>
</tr>
<tr>
<td class="je_item">Dr Options</td>
<td class="je_amt">${ex11_gain_1.toFixed(2)}</td>
<td></td>
</tr>
<tr>
<td class="je_item">&nbsp;&nbsp;Cr Gain on options</td>
<td></td>
<td class="je_item">${ex11_gain_1.toFixed(2)}</td>
</tr>
<tr>
<td class="je_item"><i>Mark to market at year-end</i></td>
<td></td>
<td></td>
</tr>
</table> 
 `;
}
else {
 ex11_je_1 = `
<table>
<tr>
<td class="je_item">30-Jun-20x5</td>
<td></td>
<td></td>
</tr>
<tr>
<td class="je_item">Dr Loss on options</td>
<td class="je_amt">${Math.abs(ex11_gain_1).toFixed(2)}</td>
<td></td>
</tr>
<tr>
<td class="je_item">&nbsp;&nbsp;Cr Options</td>
<td></td>
<td class="je_item">${Math.abs(ex11_gain_1).toFixed(2)}</td>
</tr>
<tr>
<td class="je_item"><i>Mark to market at year-end</i></td>
<td></td>
<td></td>
</tr>
</table> 
 `;
}
sl_update("ex11_je_1", ex11_je_1);

let ex11_je_2 = "";
let ex11_fv_2 = 0;
if (ex11_S2 < ex11_K) {
 ex11_fv_2 = ex11_A*(ex11_K - ex11_S2);
}
ex11_gain_2 = ex11_fv_2 - ex11_fv_1;

if (ex11_fv_2 == 0) {
ex11_je_2 = `
<table>
<tr>
<td class="je_item">15-Jul-20x5</td>
<td></td>
<td></td>
</tr>
<tr>
<td class="je_item">Dr Loss on options</td>
<td>${ex11_fv_1.toFixed(2)}</td>
<td></td>
</tr>
<tr>
<td class="je_item">&nbsp;&nbsp; Cr Options</td>
<td></td>
<td>${ex11_fv_1.toFixed(2)}</td>
</tr>
<tr>
<td class="je_item"><i>Options expire unexercised</i></td>
<td></td>
<td></td>
</tr>
</table>
`;
}
else if (ex11_gain_2 > 0) {
ex11_je_2 = `
<table>
<tr>
<td class="je_item">15-Jul-20x5</td>
<td></td>
<td></td>
</tr>
<tr>
<td class="je_item">Dr Cash</td>
<td class="je_amt">${(ex11_A * ex11_K).toFixed(2)}</td>
<td></td>
</tr>
<tr>
<td class="je_item">&nbsp;&nbsp;Cr Investment in Listco shares</td>
<td></td>
<td class="je_amt">${(ex11_A * ex11_S2).toFixed(2)}</td>
</tr>
<tr>
<td class="je_item">&nbsp;&nbsp;Cr Options</td>
<td></td>
<td class="je_amt">${(ex11_fv_1).toFixed(2)}</td>
</tr>
<tr>
<td class="je_item">&nbsp;&nbsp;Cr Gain on options</td>
<td></td>
<td class="je_amt">${ex11_gain_2.toFixed(2)}</td>
</tr>
<tr>
<td class="je_item"><i>Put option exercise</i></td>
<td></td>
<td></td>
</tr>
</table>
`;
}
else {
ex11_je_2 = `
<table>
<tr>
<td class="je_item">15-Jul-20x5</td>
<td></td>
<td></td>
</tr>
<tr>
<td class="je_item">Dr Cash</td>
<td class="je_amt">${(ex11_A * ex11_K).toFixed(2)}</td>
<td></td>
</tr>
<tr>
<td class="je_item">Dr Loss on options</td>
<td class="je_amt">${Math.abs(ex11_gain_2).toFixed(2)}</td>
<td></td>
</tr>
<tr>
<td class="je_item">&nbsp;&nbsp;Cr Investment in Listco shares</td>
<td></td>
<td class="je_amt">${(ex11_A * ex11_S2).toFixed(2)}</td>
</tr>
<tr>
<td class="je_item">&nbsp;&nbsp;Cr Options</td>
<td></td>
<td class="je_amt">${(ex11_fv_1).toFixed(2)}</td>
</tr>
<tr>
<td class="je_item"><i>Put option exercise</i></td>
<td></td>
<td></td>
</tr>
</table>
`;
}
sl_update("ex11_je_2", ex11_je_2);


/* EX15 DT ON CONV BOND*/

let ex15_proceeds = getRndInteger(93,98);
sl_update("ex15_proceeds", ex15_proceeds);
let ex15_debt = getRndInteger(85,90);
sl_update("ex15_debt", ex15_debt);
let ex15_equity = ex15_proceeds - ex15_debt;
sl_update("ex15_equity", ex15_equity);

let ex15_accint = 100 - ex15_debt;
sl_update("ex15_accint", ex15_accint);
let ex15_taxint = 100 - ex15_proceeds;
sl_update("ex15_taxint", ex15_taxint);

let ex15_dt = 0.17 * (ex15_equity);
sl_update("ex15_dt", ex15_dt.toFixed(2));
let ex15_equity_posttax = ex15_equity - ex15_dt;
sl_update("ex15_equity_posttax", ex15_equity_posttax.toFixed(2));

/* EX16 CB EXTENDED EXAMPLE*/

let ex16_gross = getRndInteger(100000,105000);
sl_update("ex16_gross", ex16_gross.toLocaleString());
let ex16_debt_gross = getRndInteger(98000,99000);
sl_update("ex16_debt_gross", ex16_debt_gross.toLocaleString());
let ex16_issue_total = getRndInteger(200,300);
sl_update("ex16_issue_total", ex16_issue_total.toLocaleString());

let ex16_equity_gross = ex16_gross - ex16_debt_gross;
sl_update("ex16_equity_gross", ex16_equity_gross.toLocaleString());

let ex16_issue_debt = ex16_debt_gross / ex16_gross * ex16_issue_total;
sl_update("ex16_issue_debt", ex16_issue_debt.toFixed(2).toLocaleString());
let ex16_issue_equity = ex16_equity_gross / ex16_gross * ex16_issue_total;
sl_update("ex16_issue_equity", ex16_issue_equity.toFixed(2).toLocaleString());

let ex16_net_debt = ex16_debt_gross - ex16_issue_debt;
sl_update("ex16_net_debt", ex16_net_debt.toFixed(2).toLocaleString());
let ex16_net_equity = ex16_equity_gross - ex16_issue_equity;
sl_update("ex16_net_equity", ex16_net_equity.toFixed(2).toLocaleString());
let ex16_net_total = ex16_gross - ex16_issue_total;
sl_update("ex16_net_total", ex16_net_total.toFixed(2).toLocaleString());

let ex16_dt = ex16_net_equity * 0.17;
sl_update("ex16_dt", ex16_dt.toFixed(2));

/** END OF MAIN SCRIPT **/

/*** SUPPORTING FUNCTIONS ***/

function sl_update(sl_item,sl_value) {
 let sl_list=document.querySelectorAll('.'+sl_item);
 for (let i of sl_list) {
  i.innerHTML=sl_value;
 }
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function toggle(obj) {
          var obj=document.getElementById(obj);
          if (obj.style.display == "block") obj.style.display = "none";
          else obj.style.display = "block";
}
