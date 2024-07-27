/*** SET INPUT NUMBERS ***/

/* random numbers to generate algorithmic variations */
let a1=getRndInteger(100,999);
let b1=getRndInteger(100,999);
let c1=getRndInteger(100,999);


let colist=['Chan', 'Cheong', 'Kwok', 'Azmi', 'Nazrul', 'Wang', 'Kim', 'Kamala', 'Ho','Jiang','Luo'];
let coname = colist[getRndInteger(0,colist.length)] + " Co";
sl_update("coname",coname);

// SET UP MAIN  INCOME STATEMENT EXAMPLE

let sales=98320 + (a1 % 71);
sl_update("sales",sl_fmt(sales));
let div_inc=618 + (b1 % 48);
sl_update("div_inc",sl_fmt(div_inc));
let ip_cost=42309 + (c1 % 55);
sl_update("ip_cost",sl_fmt(ip_cost));
let ip_life_acc = ( (Math.random() > 0.7) ? getRndInteger(4,6) : 6 ); 
sl_update("ip_life_acc",sl_fmt(ip_life_acc));
let ip_life_tax = ( (ip_life_acc < 6) ? 6 : getRndInteger(3,ip_life_acc) ); 
sl_update("ip_life_tax",sl_fmt(ip_life_tax));
let ip_amort = ip_cost / ip_life_acc;
sl_update("ip_amort",sl_fmt(ip_amort));
let ip_allow = ip_cost / ip_life_tax;
sl_update("ip_allow",sl_fmt(ip_allow));
let politics=564+(a1 % 69);
sl_update("politics",sl_fmt(politics));
let prov_exp=9259+(b1 % 19);
sl_update("prov_exp",sl_fmt(prov_exp));

let pbt=sales+div_inc-ip_amort-politics-prov_exp;
sl_update("pbt",sl_fmt(pbt));
let pbt_tax=sales - ip_allow;
sl_update("pbt_tax",sl_fmt(pbt_tax));
let taxrate=getRndInteger(15,20)/100;
sl_update("taxrate",(taxrate*100).toFixed(2));

let currtax=pbt_tax*taxrate;
sl_update("currtax",sl_fmt(currtax));
let etr = currtax / pbt;
sl_update("etr",etr.toFixed(4));

// IP ASSET CALCULATIONS

let ip_ca = Array(6); // CARRYING AMOUNT (CA)
let ip_tb = Array(6); // TAX BASIS (TB)
let ip_ttd = Array(6); // TAXABLE TEMPORARY DIFFERENCES (TTD)
let ip_dtd = Array(6); // DEDUCTIBLE TEMPORARY DIFFERENCES (DTD)
let ip_dtl = Array(6); // DEFERRED TAX LIABILITY (DTL)
let ip_dta = Array(6); // DEFERRED TAX ASSET (DTA)
let ip_ndtl = Array(6); // NET DEFERRED TAX LIABILITY 
let ip_dte = Array(6); // DEFERRED TAX EXPENSE

ip_ca[0] = ip_cost - ip_amort;
sl_update("ip_ca_1",sl_fmt(ip_ca[0]));
ip_tb[0] = ip_cost - ip_allow;
sl_update("ip_tb_1",sl_fmt(ip_tb[0]));

ip_ttd[0] = (ip_ca[0] > ip_tb[0]) ? (ip_ca[0]-ip_tb[0]) : 0;
sl_update("ip_ttd_1",sl_fmt(ip_ttd[0]));
ip_dtd[0] = (ip_tb[0] > ip_ca[0]) ? (ip_tb[0]-ip_ca[0]) : 0;
sl_update("ip_dtd_1",sl_fmt(ip_dtd[0]));
ip_dtl[0] = ip_ttd[0]*taxrate;
sl_update("ip_dtl_1",sl_fmt(ip_dtl[0]));
ip_dta[0] = ip_dtd[0]*taxrate;
sl_update("ip_dta_1",sl_fmt(ip_dta[0]));
ip_ndtl[0]=ip_dtl[0]-ip_dta[0];
ip_dte[0]=ip_ndtl[0];
sl_update("ip_dte_1",sl_fmt(ip_dte[0]));

for (i of [1,2,3,4,5]) {
 ip_ca[i] = ((ip_ca[i-1] > 0.01) ? (ip_ca[i-1] - ip_amort) : 0);
 sl_update("ip_ca_"+(i+1),sl_fmt(ip_ca[i]));
 ip_tb[i] = (ip_tb[i-1] > 0.01) ? (ip_tb[i-1] - ip_allow) : 0;
 sl_update("ip_tb_"+(i+1),sl_fmt(ip_tb[i]));
 ip_ttd[i] = (ip_ca[i] > ip_tb[i]) ? (ip_ca[i]-ip_tb[i]) : 0;
 sl_update("ip_ttd_"+(i+1),sl_fmt(ip_ttd[i]));
 ip_dtd[i] = (ip_tb[i] > ip_ca[i]) ? (ip_tb[i]-ip_ca[i]) : 0;
 sl_update("ip_dtd_"+(i+1),sl_fmt(ip_dtd[i]));
 ip_dtl[i] = ip_ttd[i]*taxrate;
 sl_update("ip_dtl_"+(i+1),sl_fmt(ip_dtl[i]));
 ip_dta[i] = ip_dtd[i]*taxrate;
 sl_update("ip_dta_"+(i+1),sl_fmt(ip_dta[i]));
 ip_ndtl[i]=ip_dtl[i]-ip_dta[i];
 ip_dte[i]=ip_ndtl[i]-ip_ndtl[i-1];
 sl_update("ip_dte_"+(i+1),sl_fmt(ip_dte[i]));
}


// PROV LIAB CALCULATIONS

let prov_ca = Array(3); // CARRYING AMOUNT (CA)
let prov_tb = Array(3); // TAX BASIS (TB)
let prov_dtd = Array(3); // DEDUCTIBLE TEMPORARY DIFFERENCES (DTD)
let prov_dta = Array(3); // DEFERRED TAX ASSET (DTA)
let prov_dti = Array(3); // DEFERRED TAX EXPENSE

for (let i of [0, 1]) {
 prov_ca[i]=prov_exp;
 sl_update("prov_ca_"+(i+1),sl_fmt(prov_ca[i]));
}
prov_ca[2]=0;
sl_update("prov_ca_3",sl_fmt(prov_ca[2]));

for (let i of [0,1,2]) {
 prov_tb[i]=0;	
 sl_update("prov_tb_"+(i+1),sl_fmt(prov_tb[i]));

 prov_dtd[i] = (prov_ca[i] > prov_tb[i]) ? (prov_ca[i]-prov_tb[i])	: 0;
 sl_update("prov_dtd_"+(i+1),sl_fmt(prov_dtd[i]));

 prov_dta[i] = (prov_dtd[i] * taxrate);
 sl_update("prov_dta_"+(i+1),sl_fmt(prov_dta[i]));

 prov_dti[i] = (i > 0) ? (prov_dta[i]-prov_dta[i-1]) : prov_dta[i];
 sl_update("prov_dti_"+(i+1), sl_fmt(prov_dti[i])); 
}

// TAX LOSS CARRYFORWARDS (OLC)

let olc_loss24 = 5314 + (a1 % 21);
sl_update("olc_loss24",sl_fmt(olc_loss24));
let olc_profit25 = 9730 + (b1 % 19);
sl_update("olc_profit25",sl_fmt(olc_profit25));
let olc_dta=[olc_loss24*taxrate, 0];
let olc_cte=[0, (olc_profit25-olc_loss24)*taxrate];
let olc_dte=[olc_dta[0], olc_dta[0]-olc_dta[1]];
let olc_ite = [olc_cte[0] + olc_dte[0],
    olc_cte[1] + olc_dte[1] ];

for (let i of [0, 1]) {
 for (let j of ["dta","cte","dte","ite"]) {
  sl_update("olc_"+j+"_"+(i+1), sl_fmt(eval( "olc_"+j + "[" + i +"]") ));
 }
}

// TAX LOSS CARRYBACKS 

let cb_loss24 = 6079 + (c1 % 76);
sl_update("cb_loss24", sl_fmt(cb_loss24));
let cb_profit23 = 7663 + (a1 % 24);
sl_update("cb_profit23", sl_fmt(cb_profit23));
let cb_refund = cb_loss24*taxrate;
sl_update("cb_refund", sl_fmt(cb_refund));

// CTW

let ctw_subtotal1=pbt + ip_amort + prov_exp + politics;
sl_update("ctw_subtotal1",sl_fmt(ctw_subtotal1));

/** END OF MAIN SCRIPT **/


/*** SUPPORTING FUNCTIONS ***/

function sl_fmt(sl_no) {
 return sl_no.toLocaleString("en-SG",{maximumFractionDigits:2});
}

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
 
