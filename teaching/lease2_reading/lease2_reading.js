/*** SET INPUT NUMBERS ***/

/* random numbers to generate algorithmic variations */
let a1=getRndInteger(100,999);
let b1=getRndInteger(100,999);
let c1=getRndInteger(100,999);


let colist=['Chan', 'Cheong', 'Kwok', 'Azmi', 'Nazrul', 'Wang', 'Kim', 'Kamala', 'Ho','Jiang','Luo','Sankaraguruswamy','Rose','Zahalka','Nur','Shabanam','Kusnadi','Poh','Chng','Chai','Yeung','Keung','Mahathir','Anwar'];

// EX3 LEASE INITIAL
{
let ex3_coname=colist[getRndInteger(0,colist.length)] + ' Co';
sl_update("ex3_coname",ex3_coname);
let ex3_fv=getRndInteger(75000,77000);
sl_update("ex3_fv",sl_fmt(ex3_fv));
let ex3_pmt=getRndInteger(5000,8000);
sl_update("ex3_pmt",sl_fmt(ex3_pmt));
let ex3_rv=getRndInteger(500,600);
sl_update("ex3_rv",sl_fmt(ex3_rv));
let ex3_eir=getRndInteger(3,5)/100;
sl_update("ex3_eir",sl_fmt(ex3_eir*100));
let ex3_idc=getRndInteger(100,200);
sl_update("ex3_idc",sl_fmt(ex3_idc));


let ex3_ll = ex3_pmt + ex3_pmt /(1 + ex3_eir) + ex3_rv/(1+ex3_eir)**2;
sl_update("ex3_ll",sl_fmt(ex3_ll));
let ex3_1plusr = 1+ex3_eir;
sl_update("ex3_1plusr",sl_fmt(ex3_1plusr));
let ex3_rou = ex3_ll + ex3_idc;
sl_update("ex3_rou",sl_fmt(ex3_rou));
}	

// EX4 LEASE PAYMENT SCHEDULE
{
let ex4_coname=colist[getRndInteger(0,colist.length)] + ' Co';
sl_update("ex4_coname",ex4_coname);
let ex4_fv=getRndInteger(75000,77000);
sl_update("ex4_fv",sl_fmt(ex4_fv));
let ex4_pmt=getRndInteger(5000,8000);
sl_update("ex4_pmt",sl_fmt(ex4_pmt));
let ex4_rv=getRndInteger(500,600);
sl_update("ex4_rv",sl_fmt(ex4_rv));
let ex4_eir=getRndInteger(3,5)/100;
sl_update("ex4_eir",sl_fmt(ex4_eir*100));
let ex4_idc=getRndInteger(100,200);
sl_update("ex4_idc",sl_fmt(ex4_idc));


let ex4_ll = ex4_pmt + ex4_pmt /(1 + ex4_eir) + ex4_rv/(1+ex4_eir)**2;
sl_update("ex4_ll",sl_fmt(ex4_ll));
let ex4_1plusr = 1+ex4_eir;
sl_update("ex4_1plusr",sl_fmt(ex4_1plusr));
let ex4_ca_1 = ex4_ll - ex4_pmt;
sl_update("ex4_ca_1",sl_fmt(ex4_ca_1));
	
let ex4_int_2 = ex4_ca_1 * ex4_eir;
sl_update("ex4_int_2",sl_fmt(ex4_int_2));
let ex4_rep_2 = ex4_pmt - ex4_int_2;
sl_update("ex4_rep_2",sl_fmt(ex4_rep_2));
let ex4_ca_2 = ex4_ca_1 - ex4_rep_2;
sl_update("ex4_ca_2", sl_fmt(ex4_ca_2));

let ex4_int_3 = ex4_ca_2 * ex4_eir;
sl_update("ex4_int_3", sl_fmt(ex4_int_3));
let ex4_rep_3 = ex4_rv - ex4_int_3;
sl_update("ex4_rep_3", sl_fmt(ex4_rep_3));
let ex4_ca_3 = ex4_ca_2 - ex4_rep_3;
sl_update("ex4_ca_3", sl_fmt(ex4_ca_3));
}	

// EX5 EXTENSION
{
let ex5_coname=colist[getRndInteger(0,colist.length)] + ' Co';
sl_update("ex5_coname",ex5_coname);
let ex5_fv=getRndInteger(75000,77000);
sl_update("ex5_fv",sl_fmt(ex5_fv));
let ex5_pmt=getRndInteger(5000,8000);
sl_update("ex5_pmt",sl_fmt(ex5_pmt));
let ex5_eir=getRndInteger(2,4)/100;
sl_update("ex5_eir",sl_fmt(ex5_eir*100));


let ex5_ll = ex5_pmt + ex5_pmt /(1 + ex5_eir);
sl_update("ex5_ll",sl_fmt(ex5_ll));
let ex5_1plusr = 1+ex5_eir;
sl_update("ex5_1plusr",sl_fmt(ex5_1plusr));
let ex5_ca_1 = ex5_ll - ex5_pmt;
sl_update("ex5_ca_1",sl_fmt(ex5_ca_1));
	
let ex5_int_2 = ex5_ca_1 * ex5_eir;
sl_update("ex5_int_2",sl_fmt(ex5_int_2));
let ex5_rep_2 = ex5_pmt - ex5_int_2;
sl_update("ex5_rep_2",sl_fmt(ex5_rep_2));
let ex5_ca_2 = ex5_ca_1 - ex5_rep_2;
sl_update("ex5_ca_2", sl_fmt(ex5_ca_2));

let ex5_eir2 = getRndInteger(5,7)/100;
sl_update("ex5_eir2",sl_fmt(ex5_eir2*100));
let ex5_1plusr2 = 1+ex5_eir2;
sl_update("ex5_1plusr2",sl_fmt(ex5_1plusr2));

let ex5_rll = ex5_pmt - ex5_int_2 + ex5_pmt / (1 + ex5_eir2);
sl_update("ex5_rll", sl_fmt(ex5_rll));
let ex5_rll_chg = ex5_rll - ex5_ca_1;
sl_update("ex5_rll_chg",sl_fmt(ex5_rll_chg));
let ex5_rrou = ex5_ll / 2 + ex5_rll_chg;
sl_update("ex5_rrou", sl_fmt(ex5_rrou));


let ex5_rca_2= ex5_rll - ex5_rep_2;
sl_update("ex5_rca_2", sl_fmt(ex5_rca_2));
let ex5_rint_3 = ex5_rca_2 * ex5_eir2;
sl_update("ex5_rint_3", sl_fmt(ex5_rint_3));
let ex5_rrep_3 = ex5_pmt - ex5_rint_3;
sl_update("ex5_rrep_3", sl_fmt(ex5_rrep_3));
let ex5_rca_3 = ex5_rca_2 - ex5_rrep_3;
sl_update("ex5_rca_3", sl_fmt(ex5_rca_3));
}	
	
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
