/*** SET INPUT NUMBERS ***/

/* random numbers to generate algorithmic variations */
let a1=getRndInteger(100,999);
let b1=getRndInteger(100,999);
let c1=getRndInteger(100,999);


let colist=['Chan', 'Cheong', 'Kwok', 'Azmi', 'Nazrul', 'Wang', 'Kim', 'Kamala', 'Ho','Jiang','Luo','Sankaraguruswamy','Rose','Zahalka','Nur','Shabanam','Kusnadi','Poh','Chng','Chai','Yeung','Keung'];

// EX1 LEASING VS BUYING

let ex1_coname=colist[getRndInteger(0,colist.length)] + ' Co';
sl_update("ex1_coname", ex1_coname);

let ex1_lessee_rate = getRndInteger(3,6)/100;
let ex1_cost=getRndInteger(5000,5500);
sl_update("ex1_cost",sl_fmt(ex1_cost));
let ex1_rental=sl_pmt(ex1_cost,ex1_lessee_rate,10);
sl_update("ex1_rental", sl_fmt(ex1_rental));
let ex1_int_rate=getRndInteger(3,6)/100;
sl_update("ex1_int_rate",sl_fmt(ex1_int_rate*100));
let ex1_lessor_pmt = sl_pmt(ex1_cost,ex1_int_rate,10);
sl_update("ex1_lessor_pmt", sl_fmt(ex1_lessor_pmt));
let ex1_result;
if (ex1_lessor_pmt > ex1_rental) {
 ex1_result = "The annual mortgage payment is higher than the annual rent. Therefore renting is better.";
}
else if (ex1_lessor_pmt < ex1_rental) {
 ex1_result = "The annual rent is higher than the annual mortgage payment. Therefore buying is better.";
}
else if (ex1_lessor_pmt == ex1_rental) {
 ex1_result = "The annual rent is similar in amount to the annual mortgage payment. There is no clear advantage to leasing over buying.";
}

sl_update("ex1_result", ex1_result);

// EX2 FINANCIER LESSOR

let ex2_coname=colist[getRndInteger(0,colist.length)] + ' Co';
sl_update("ex2_coname", ex2_coname);
let ex2_lessor_pmt = getRndInteger(5000000,5100000);
sl_update("ex2_lessor_pmt",sl_fmt(ex2_lessor_pmt));
let ex2_lessor_rate = 0.03 + getRndInteger(12,27)/10000;
sl_update("ex2_lessor_rate", sl_fmt(ex2_lessor_rate*100));
let ex2_cost = sl_pva(ex2_lessor_pmt, ex2_lessor_rate, 10);
sl_update("ex2_cost", sl_fmt(ex2_cost));
let ex2_lessee_rate = 0.04 + getRndInteger(13,25)/10000;
sl_update("ex2_lessee_rate", sl_fmt(ex2_lessee_rate*100));
let ex2_lessee_pmt = sl_pmt(ex2_cost, ex2_lessee_rate, 10);
sl_update("ex2_lessee_pmt",sl_fmt(ex2_lessee_pmt));

//EX5 OPERATING LEASE

let ex5_coname=colist[getRndInteger(0,colist.length)] + ' Co';
sl_update("ex5_coname", ex5_coname);
let ex5_y1 = getRndInteger(200,300);
sl_update("ex5_y1",sl_fmt(ex5_y1));
let ex5_y2 = getRndInteger(100,200);
sl_update("ex5_y2",sl_fmt(ex5_y2));
let ex5_inc = (ex5_y1 + ex5_y2)/2;
sl_update("ex5_inc", sl_fmt(ex5_inc));
let ex5_ur = ex5_y1 - ex5_inc;
sl_update("ex5_ur", sl_fmt(ex5_ur));

//EX6 BPO

let ex6_coname=colist[getRndInteger(0,colist.length)] + ' Co';
sl_update("ex6_coname", ex6_coname);
let ex6_fv=getRndInteger(5000,6000);
sl_update("ex6_fv",sl_fmt(ex6_fv));
let ex6_pmt=getRndInteger(100,200);
sl_update("ex6_pmt",sl_fmt(ex6_pmt));
let ex6_bpo=( (Math.random() <= 0.5) ? getRndInteger(100,ex6_pmt) : getRndInteger(7000,8000));
sl_update("ex6_bpo", sl_fmt(ex6_bpo));
let ex6_result = ( (ex6_bpo < 6_000) ? "The purchase price is a bargain, as it is less than the remaining lease payment. Therefore, this lease is a finance lease." : "The purchase price under the purchase option is not clearly a bargain. We cannot determine if this is a finance lease.");
sl_update("ex6_result", ex6_result);


//EX7 MAJOR

let ex7_coname=colist[getRndInteger(0,colist.length)] + ' Co';
sl_update("ex7_coname", ex7_coname);
let ex7_term=getRndInteger(3,7);
sl_update("ex7_term",ex7_term);
let ex7_life=getRndInteger(ex7_term, 11);
sl_update("ex7_life",ex7_life);
let ex7_perc=ex7_term/ex7_life;
sl_update("ex7_perc",sl_fmt(ex7_perc*100));
let ex7_result=( (ex7_perc >= 0.75) ? "this is a finance lease" : "this cannot be determined to be a finance lease based on the lease term" );
sl_update("ex7_result", ex7_result);

//EX8 SUBSTANTIALLY ALL

let ex8_coname=colist[getRndInteger(0,colist.length)] + ' Co';
sl_update("ex8_coname", ex8_coname);
let ex8_term=getRndInteger(3,10);
sl_update("ex8_term",ex8_term);
let ex8_fv = getRndInteger(5000,6000);
sl_update("ex8_fv",sl_fmt(ex8_fv));
let ex8_pmt = Math.round( getRndInteger(ex8_fv, ex8_fv+50)/ex8_term );
sl_update("ex8_pmt", sl_fmt(ex8_pmt));
let ex8_eir = getRndInteger(31,101)/1000;
sl_update("ex8_eir",sl_fmt(ex8_eir*100));
let ex8_pv = ex8_pmt + sl_pva(ex8_pmt, ex8_eir, ex8_term - 1);
sl_update("ex8_pv",sl_fmt(ex8_pv));
let ex8_perc = ex8_pv / ex8_fv;
sl_update("ex8_perc",sl_fmt(ex8_perc*100));
let ex8_result=( (ex8_perc >= 0.90) ? "this is a finance lease" : "this cannot be determined to be a finance lease based on the PV of lease payments" );
sl_update("ex8_result", ex8_result);


//EX9 SPECIALIZED ASSET

let ex9_coname=colist[getRndInteger(0,colist.length)] + ' Co';
sl_update("ex9_coname", ex9_coname);
let ex9_is_fin = ( (Math.random() <= 0.5) ? 1 : 0);
let ex9_rider = ( (ex9_is_fin > 0) ? (ex9_coname+" has no use for the classrooms other than to lease them to the private school. ") : (ex9_coname+" has an education business and can adapt the classrooms for their own use in future. " ) );
sl_update("ex9_rider",ex9_rider);
let ex9_result = ( (ex9_is_fin > 0) ? ("Since "+ex9_coname+" has no use for the classrooms other than to lease them to the private school, and there is no other market for this asset, this is a finance lease. ") : ("Since "+ex9_coname+" has an education business and can adapt the classrooms for their own use in future, the asset has a potential alternative use, and therefore it is not determined to be a finance lease. " ) );
sl_update("ex9_result", ex9_result);

//EX10 implicit rate

let ex10_coname=colist[getRndInteger(0,colist.length)] + ' Co';
sl_update("ex10_coname", ex10_coname);
let ex10_iir=getRndInteger(31,101)/1000;
sl_update("ex10_iir",sl_fmt(ex10_iir*100));
let ex10_pmt=getRndInteger(300,500);
sl_update("ex10_pmt",sl_fmt(ex10_pmt));
let ex10_exec=getRndInteger(100,200);
sl_update("ex10_exec",sl_fmt(ex10_exec));
let ex10_rv=getRndInteger(100,200);
sl_update("ex10_rv",sl_fmt(ex10_rv));
let ex10_idc = getRndInteger(10,50);
sl_update("ex10_idc",sl_fmt(ex10_idc));
let ex10_pv = (ex10_pmt - ex10_exec) +(ex10_pmt - ex10_exec)/(1+ex10_iir)+ ex10_rv / (1+ex10_iir)**2;
sl_update("ex10_pv", sl_fmt(ex10_pv));
let ex10_fv = ex10_pv - ex10_idc;
sl_update("ex10_fv", sl_fmt(ex10_fv));

// EX11 LEASE RECEIVABLE

let ex11_coname=colist[getRndInteger(0,colist.length)] + ' Co';
sl_update("ex11_coname", ex11_coname);
let ex11_iir=getRndInteger(31,101)/1000;
sl_update("ex11_iir",sl_fmt(ex11_iir*100));
let ex11_pmt=getRndInteger(300,500);
sl_update("ex11_pmt",sl_fmt(ex11_pmt));
let ex11_rv=getRndInteger(100,200);
sl_update("ex11_rv",sl_fmt(ex11_rv));
let ex11_idc = getRndInteger(10,50);
sl_update("ex11_idc",sl_fmt(ex11_idc));
let ex11_pv = ex11_pmt +ex11_pmt/(1+ex11_iir)+ ex11_rv / (1+ex11_iir)**2;
sl_update("ex11_pv", sl_fmt(ex11_pv));
let ex11_fv = ex11_pv - ex11_idc;
sl_update("ex11_fv", sl_fmt(ex11_fv));

let ex11_ca1 = ex11_pv - ex11_pmt;
sl_update("ex11_ca1",sl_fmt(ex11_ca1));
let ex11_int2 = ex11_ca1*ex11_iir;
sl_update("ex11_int2",sl_fmt(ex11_int2));
let ex11_red2 = ex11_pmt-ex11_int2;
sl_update("ex11_red2",sl_fmt(ex11_red2));
let ex11_ca2 = ex11_ca1 - ex11_red2;
sl_update("ex11_ca2",sl_fmt(ex11_ca2));

let ex11_int3=ex11_ca2*ex11_iir;
sl_update("ex11_int3",sl_fmt(ex11_int3));
let ex11_red3=ex11_rv - ex11_int3;
sl_update("ex11_red3",sl_fmt(ex11_red3));
let ex11_ca3=ex11_ca2 - ex11_red3;
sl_update("ex11_ca3",sl_fmt(ex11_ca3));

// EX12 MFR-DEALER IIR

let ex12_coname=colist[getRndInteger(0,colist.length)] + ' Co';
sl_update("ex12_coname", ex12_coname);
let ex12_iir=getRndInteger(31,101)/1000;
sl_update("ex12_iir",sl_fmt(ex12_iir*100));
let ex12_pmt=getRndInteger(300,500);
sl_update("ex12_pmt",sl_fmt(ex12_pmt));
let ex12_exec=getRndInteger(100,200);
sl_update("ex12_exec",sl_fmt(ex12_exec));
let ex12_rv=getRndInteger(100,200);
sl_update("ex12_rv",sl_fmt(ex12_rv));
let ex12_idc = getRndInteger(10,50);
sl_update("ex12_idc",sl_fmt(ex12_idc));
let ex12_pv = (ex12_pmt - ex12_exec) +(ex12_pmt - ex12_exec)/(1+ex12_iir)+ ex12_rv / (1+ex12_iir)**2;
sl_update("ex12_pv", sl_fmt(ex12_pv));
let ex12_fv = ex12_pv;
sl_update("ex12_fv", sl_fmt(ex12_fv));

//EX13 MFR-DEALER PROMOTION

let ex13_coname=colist[getRndInteger(0,colist.length)] + ' Co';
sl_update("ex13_coname", ex13_coname);
let ex13_fv = getRndInteger(600,700);
sl_update("ex13_fv", sl_fmt(ex13_fv));
let ex13_rv=getRndInteger(100,200);
sl_update("ex13_rv",sl_fmt(ex13_rv));
let ex13_pmt=(ex13_fv-ex13_rv)/2;
sl_update("ex13_pmt",sl_fmt(ex13_pmt));
let ex13_iir=getRndInteger(31,101)/1000;
sl_update("ex13_iir",sl_fmt(ex13_iir*100));

let ex13_idc = getRndInteger(10,50);
sl_update("ex13_idc",sl_fmt(ex13_idc));
let ex13_pv = ex13_pmt +ex13_pmt/(1+ex13_iir)+ ex13_rv / (1+ex13_iir)**2;
sl_update("ex13_pv", sl_fmt(ex13_pv));

//EX14 SALES AND COGS

let ex14_coname=colist[getRndInteger(0,colist.length)] + ' Co';
sl_update("ex14_coname", ex14_coname);
let ex14_fv = getRndInteger(600,700);
sl_update("ex14_fv", sl_fmt(ex14_fv));
let ex14_inv=getRndInteger(200,300);
sl_update("ex14_inv",sl_fmt(ex14_inv));
let ex14_rv=getRndInteger(100,200);
sl_update("ex14_rv",sl_fmt(ex14_rv));
let ex14_pmt=(ex14_fv-ex14_rv)/2;
sl_update("ex14_pmt",sl_fmt(ex14_pmt));
let ex14_iir=getRndInteger(31,101)/1000;
sl_update("ex14_iir",sl_fmt(ex14_iir*100));

let ex14_idc = getRndInteger(10,50);
sl_update("ex14_idc",sl_fmt(ex14_idc));
let ex14_pv = ex14_pmt +ex14_pmt/(1+ex14_iir)+ ex14_rv / (1+ex14_iir)**2;
sl_update("ex14_pv", sl_fmt(ex14_pv));

let ex14_sales=ex14_pmt +ex14_pmt/(1+ex14_iir);
sl_update("ex14_sales",sl_fmt(ex14_sales));

let ex14_cogs = ex14_inv - ex14_rv / (1+ex14_iir)**2;
sl_update("ex14_cogs",sl_fmt(ex14_cogs));


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
 
function sl_pva(pmt, rate, years) {
 return pmt*1/rate * (1 - 1/(1+rate)**years);
}

function sl_pmt(pva, rate, years) {
  return pva / (1/rate * (1 - 1/(1+rate)**years));
}
