/*** SET INPUT NUMBERS ***/

/* random numbers to generate algorithmic variations */
let a1=getRndInteger(100,999);
let b1=getRndInteger(100,999);
let c1=getRndInteger(100,999);


let colist=['Chan', 'Cheong', 'Kwok', 'Azmi', 'Nazrul', 'Wang', 'Kim', 'Kamala', 'Ho','Jiang','Luo','Sankaraguruswamy','Rose','Zahalka','Nur','Shabanam','Kusnadi','Poh','Chng'];


// EX1

let ex1_coname = colist[getRndInteger(0,colist.length)] + " Co";
sl_update("ex1_coname", ex1_coname);
let ex1_ppe_cost = getRndInteger(1000,2000);
sl_update("ex1_ppe_cost", ex1_ppe_cost.toLocaleString());
let ex1_acq_yr=getRndInteger(2022,2024)
let ex1_acq_date = "1/1/"+ex1_acq_yr;
sl_update("ex1_acq_date", ex1_acq_date);
let ex1_bs_yr=getRndInteger(2024,2026);
let ex1_bs_date = "31/12/"+ex1_bs_yr;
sl_update("ex1_bs_date", ex1_bs_date);
let ex1_ppe_life_acc = getRndInteger(4,9);
sl_update("ex1_ppe_life_acc",ex1_ppe_life_acc);
let ex1_ppe_life_tax = getRndInteger(4,9);
sl_update("ex1_ppe_life_tax", ex1_ppe_life_tax);

let ex1_ca = ex1_ppe_cost - ( ex1_ppe_cost / ex1_ppe_life_acc * (ex1_bs_yr - ex1_acq_yr + 1) );
sl_update("ex1_ca",sl_fmt(ex1_ca));
let ex1_fta = ex1_ca;
sl_update("ex1_fta",sl_fmt(ex1_fta));
let ex1_fda = ex1_ppe_cost - (ex1_ppe_cost / ex1_ppe_life_tax * (ex1_bs_yr - ex1_acq_yr + 1));
sl_update("ex1_fda",sl_fmt(ex1_fda));
let ex1_tb = ex1_ca - ex1_fta + ex1_fda;
sl_update("ex1_tb",sl_fmt(ex1_tb));

if (ex1_ca >= ex1_tb) {
 let ex1_ttd = ex1_ca - ex1_tb;
 sl_update("ex1_ttd",sl_fmt(ex1_ttd));
 sl_update("ex1_dtd","--");
}
else {
 let ex1_dtd = ex1_tb - ex1_ca;
 sl_update("ex1_dtd",sl_fmt(ex1_dtd));
 sl_update("ex1_ttd","--");
}

// EX2 LOAN LOSS ALLOWANCE

let ex2_rec_gross = getRndInteger(1000,2000);
sl_update("ex2_rec_gross", sl_fmt(ex2_rec_gross));
let ex2_lla_9 = getRndInteger(100,200);
sl_update("ex2_lla_9", sl_fmt(ex2_lla_9));
let ex2_lla_mas = getRndInteger(100,200);
sl_update("ex2_lla_mas",sl_fmt(ex2_lla_mas));

let ex2_ca=ex2_rec_gross - ex2_lla_9 - ex2_lla_mas;
sl_update("ex2_ca", sl_fmt(ex2_ca));
let ex2_fta=0;
sl_update("ex2_fta", sl_fmt(ex2_fta));
let ex2_fda=ex2_lla_mas;
sl_update("ex2_fda", sl_fmt(ex2_fda));
let ex2_tb = ex2_ca - ex2_fta + ex2_fda;
sl_update("ex2_tb", sl_fmt(ex2_tb));

if (ex2_ca >= ex2_tb) {
 let ex2_ttd = ex2_ca - ex2_tb;
 sl_update("ex2_ttd",sl_fmt(ex2_ttd));
 sl_update("ex2_dtd","--");
}
else {
 let ex2_dtd = ex2_tb - ex2_ca;
 sl_update("ex2_dtd",sl_fmt(ex2_dtd));
 sl_update("ex2_ttd","--");
}

// EX3 

let ex3_coname=colist[getRndInteger(0,colist.length)] + " Co";
sl_update("ex3_coname",ex3_coname);
let ex3_fv = getRndInteger(1000,1500);
sl_update("ex3_fv", sl_fmt(ex3_fv));
let ex3_cost=getRndInteger(800,999);
sl_update("ex3_cost", sl_fmt(ex3_cost));
let ex3_life=getRndInteger(6,8);
sl_update("ex3_life",sl_fmt(ex3_life));
let ex3_used=getRndInteger(2,5);
sl_update("ex3_used",sl_fmt(ex3_used));

let ex3_ca = ex3_fv;
sl_update("ex3_ca", sl_fmt(ex3_ca));
let ex3_fta = ex3_cost;
sl_update("ex3_fta",sl_fmt(ex3_fta));
let ex3_fda = ex3_cost / ex3_life * (ex3_life - ex3_used);
sl_update("ex3_fda", sl_fmt(ex3_fda));
let ex3_tb = ex3_ca - ex3_fta + ex3_fda;
sl_update("ex3_tb",sl_fmt(ex3_tb));

if (ex3_ca >= ex3_tb) {
 let ex3_ttd = ex3_ca - ex3_tb;
 sl_update("ex3_ttd",sl_fmt(ex3_ttd));
 sl_update("ex3_dtd","--");
}
else {
 let ex3_dtd = ex3_tb - ex3_ca;
 sl_update("ex3_dtd",sl_fmt(ex3_dtd));
 sl_update("ex3_ttd","--");
}


// EX4 PPE with RV

let ex4_cost=getRndInteger(1000,1500);
sl_update("ex4_cost", sl_fmt(ex4_cost));
let ex4_life_fr=getRndInteger(6,10);
sl_update("ex4_life_fr", sl_fmt(ex4_life_fr));
let ex4_used=getRndInteger(2,5);
sl_update("ex4_used",sl_fmt(ex4_used));
let ex4_life_tax=getRndInteger(6,10);
sl_update("ex4_life_tax",sl_fmt(ex4_life_tax));
let ex4_rv=getRndInteger(100,200);
sl_update("ex4_rv",sl_fmt(ex4_rv));

let ex4_d_ca=(ex4_cost - ex4_rv) - (ex4_cost - ex4_rv)/ex4_life_fr * ex4_used;
sl_update("ex4_d_ca",  sl_fmt(ex4_d_ca));
let ex4_d_fta=ex4_d_ca;
sl_update("ex4_d_fta", sl_fmt(ex4_d_fta));

let ex4_d_fda=0;
let ex4_rv_fda=0;

if (ex4_life_fr < ex4_life_tax) {
 ex4_d_fda = ex4_cost / ex4_life_tax * (ex4_life_fr-ex4_used);
 sl_update("ex4_d_fda", sl_fmt(ex4_d_fda));
 ex4_rv_fda=ex4_cost / ex4_life_tax * (ex4_life_tax - ex4_life_fr);
 sl_update("ex4_rv_fda", sl_fmt(ex4_rv_fda));
}
else { // accounting life > tax life
 ex4_d_fda = ex4_cost / ex4_life_tax * (ex4_life_tax - ex4_used);
 sl_update("ex4_d_fda", sl_fmt(ex4_d_fda));
 ex4_rv_fda = 0;
 sl_update("ex4_rv_fda",sl_fmt(ex4_rv_fda));
}

let ex4_rv_ca = ex4_rv;
sl_update("ex4_rv_ca",sl_fmt(ex4_rv_ca));
let ex4_rv_fta = ex4_rv_ca;
sl_update("ex4_rv_fta",sl_fmt(ex4_rv_fta));

let ex4_d_tb = ex4_d_ca - ex4_d_fta + ex4_d_fda;
sl_update("ex4_d_tb", sl_fmt(ex4_d_tb));
let ex4_rv_tb = ex4_rv_ca - ex4_rv_fta + ex4_rv_fda;
sl_update("ex4_rv_tb", sl_fmt(ex4_rv_tb));

if (ex4_d_ca >= ex4_d_tb) {
 let ex4_d_ttd = ex4_d_ca - ex4_d_tb;
 sl_update("ex4_d_ttd",sl_fmt(ex4_d_ttd));
 sl_update("ex4_d_dtd","--");
}
else {
 let ex4_d_dtd = ex4_d_tb - ex4_d_ca;
 sl_update("ex4_d_dtd",sl_fmt(ex4_d_dtd));
 sl_update("ex4_d_ttd","--");
}

if (ex4_rv_ca >= ex4_rv_tb) {
 let ex4_rv_ttd = ex4_rv_ca - ex4_rv_tb;
 sl_update("ex4_rv_ttd",sl_fmt(ex4_rv_ttd));
 sl_update("ex4_rv_dtd","--");
}
else {
 let ex4_rv_dtd = ex4_rv_tb - ex4_rv_ca;
 sl_update("ex4_rv_dtd",sl_fmt(ex4_rv_dtd));
 sl_update("ex4_rv_ttd","--");
}

// EX5 REVALUED LAND

let ex5_coname = colist[getRndInteger(0,colist.length)] + " Co";
sl_update("ex5_coname", ex5_coname);
let ex5_cost = getRndInteger(1000,1300);
sl_update('ex5_cost',sl_fmt(ex5_cost));
let ex5_fv = getRndInteger(1500,1700);
sl_update('ex5_fv',sl_fmt(ex5_fv));

let ex5_ca = ex5_fv;
sl_update('ex5_ca', sl_fmt(ex5_ca));
let ex5_fta = ex5_ca;
sl_update('ex5_fta',sl_fmt(ex5_fta));
let ex5_fda = ex5_cost;
sl_update('ex5_fda',sl_fmt(ex5_fda));
let ex5_tb = ex5_ca - ex5_fta + ex5_fda;
sl_update('ex5_tb', sl_fmt(ex5_tb));

if (ex5_ca >= ex5_tb) {
 let ex5_ttd = ex5_ca - ex5_tb;
 sl_update("ex5_ttd",sl_fmt(ex5_ttd));
 sl_update("ex5_dtd","--");
}
else {
 let ex5_dtd = ex5_tb - ex5_ca;
 sl_update("ex5_dtd",sl_fmt(ex5_dtd));
 sl_update("ex5_ttd","--");
}


// EX6 INVESTMENT PROPERTY AT FAIR VALUE

let ex6_coname = colist[getRndInteger(0,colist.length)] + " Co";
sl_update("ex6_coname", ex6_coname);
let ex6_twdv = getRndInteger(799,988);
sl_update('ex6_twdv',sl_fmt(ex6_twdv));
let ex6_fv = getRndInteger(1000,1300);
sl_update('ex6_fv',sl_fmt(ex6_fv));

let ex6_ca = ex6_fv;
sl_update('ex6_ca', sl_fmt(ex6_ca));
let ex6_fta = ex6_ca;
sl_update('ex6_fta',sl_fmt(ex6_fta));
let ex6_fda = ex6_twdv;
sl_update('ex6_fda',sl_fmt(ex6_fda));
let ex6_tb = ex6_ca - ex6_fta + ex6_fda;
sl_update('ex6_tb', sl_fmt(ex6_tb));

if (ex6_ca >= ex6_tb) {
 let ex6_ttd = ex6_ca - ex6_tb;
 sl_update("ex6_ttd",sl_fmt(ex6_ttd));
 sl_update("ex6_dtd","--");
}
else {
 let ex6_dtd = ex6_tb - ex6_ca;
 sl_update("ex6_dtd",sl_fmt(ex6_dtd));
 sl_update("ex6_ttd","--");
}

// EX7 WARRANTY PROVISION

let ex7_coname = colist[getRndInteger(0,colist.length)] + " Co";
sl_update("ex7_coname", ex7_coname);
let ex7_ca = getRndInteger(100,200);
sl_update("ex7_ca", sl_fmt(ex7_ca));

let ex7_fta=0;
sl_update("ex7_fta",sl_fmt(ex7_fta));
let ex7_fda=ex7_ca;
sl_update("ex7_fda",sl_fmt(ex7_fda));
let ex7_tb=ex7_ca-ex7_fda+ex7_fta;
sl_update("ex7_tb", sl_fmt(ex7_tb));

if (ex7_ca >= ex7_tb) {
 let ex7_dtd = ex7_ca - ex7_tb;
 sl_update("ex7_dtd",sl_fmt(ex7_dtd));
 sl_update("ex7_ttd","--");
}
else {
 let ex7_ttd = ex7_tb - ex7_ca;
 sl_update("ex7_ttd",sl_fmt(ex7_ttd));
 sl_update("ex7_dtd","--");
}

// EX8 UNEARNED REVENUE

let ex8_coname = colist[getRndInteger(0,colist.length)] + " Co";
sl_update("ex8_coname", ex8_coname);
let ex8_ca = getRndInteger(10,20);
sl_update("ex8_ca",sl_fmt(ex8_ca));

let ex8_taxrule;
let ex8_fta;
if (Math.random() < 0.5) { //already taxed
  ex8_taxrule = " The payment for executory services is taxed in the period when it is received. ";
  sl_update("ex8_taxrule", ex8_taxrule);
  ex8_fta = -ex8_ca;
  sl_update("ex8_fta",sl_fmt(ex8_fta));
}
else { // not yet taxed
  ex8_taxrule=" The income for executory services is taxed in the period when the services are performed. ";
  sl_update("ex8_taxrule", ex8_taxrule);
  ex8_fta=0;
  sl_update("ex8_fta", sl_fmt(ex8_fta));
}

let ex8_tb = ex8_ca + ex8_fta;
sl_update("ex8_tb",sl_fmt(ex8_tb));
let ex8_dtd = ex8_ca - ex8_tb;
sl_update("ex8_dtd",sl_fmt(ex8_dtd));

// EX 10 CAR WITH CAP

let ex10_coname = colist[getRndInteger(0,colist.length)] + " Co";
sl_update("ex10_coname", ex10_coname);
let ex10_cost = getRndInteger(50000,60000);
sl_update("ex10_cost",sl_fmt(ex10_cost));
let ex10_cap = getRndInteger(30000,40000);
sl_update("ex10_cap",sl_fmt(ex10_cap));
let ex10_life_fr=getRndInteger(5,8);
sl_update("ex10_life_fr",sl_fmt(ex10_life_fr));
let ex10_life_tax=getRndInteger(2,4);
sl_update("ex10_life_tax",sl_fmt(ex10_life_tax));

let ex10_nd_ca = ex10_cost - ex10_cap;
sl_update("ex10_nd_ca",sl_fmt(ex10_nd_ca));
let ex10_nd_fta = ex10_nd_ca;
sl_update("ex10_nd_fta", sl_fmt(ex10_nd_fta));
let ex10_nd_fda = 0;
sl_update("ex10_nd_fda", sl_fmt(ex10_nd_fda));
let ex10_nd_tb = ex10_nd_ca - ex10_nd_fta + ex10_nd_fda;
sl_update("ex10_nd_tb", sl_fmt(ex10_nd_tb));

if (ex10_nd_ca >= ex10_nd_tb) {
 let ex10_nd_ttd = ex10_nd_ca - ex10_nd_tb;
 sl_update("ex10_nd_ttd",sl_fmt(ex10_nd_ttd));
 sl_update("ex10_nd_dtd","--");
}
else {
 let ex10_nd_dtd = ex10_nd_tb - ex10_nd_ca;
 sl_update("ex10_nd_dtd",sl_fmt(ex10_nd_dtd));
 sl_update("ex10_nd_ttd","--");
}

let ex10_d_ca = ex10_cap;
sl_update("ex10_d_ca",sl_fmt(ex10_d_ca));
let ex10_d_fta = ex10_d_ca;
sl_update("ex10_d_fta", sl_fmt(ex10_d_fta));
let ex10_d_fda = ex10_cap;
sl_update("ex10_d_fda", sl_fmt(ex10_d_fda));
let ex10_d_tb = ex10_d_ca - ex10_d_fta + ex10_d_fda;
sl_update("ex10_d_tb", sl_fmt(ex10_d_tb));

if (ex10_d_ca >= ex10_d_tb) {
 let ex10_d_ttd = ex10_d_ca - ex10_d_tb;
 sl_update("ex10_d_ttd",sl_fmt(ex10_d_ttd));
 sl_update("ex10_d_dtd","--");
}
else {
 let ex10_d_dtd = ex10_d_tb - ex10_d_ca;
 sl_update("ex10_d_dtd",sl_fmt(ex10_d_dtd));
 sl_update("ex10_d_ttd","--");
}

let ex10_nd_ca_1yr = (ex10_cost - ex10_cap)*(1 - 1/ex10_life_fr);
sl_update("ex10_nd_ca_1yr",sl_fmt(ex10_nd_ca_1yr));
let ex10_nd_fta_1yr = ex10_nd_ca_1yr;
sl_update("ex10_nd_fta_1yr", sl_fmt(ex10_nd_fta_1yr));
let ex10_nd_fda_1yr = 0;
sl_update("ex10_nd_fda_1yr", sl_fmt(ex10_nd_fda_1yr));
let ex10_nd_tb_1yr = ex10_nd_ca_1yr - ex10_nd_fta_1yr + ex10_nd_fda_1yr;
sl_update("ex10_nd_tb_1yr", sl_fmt(ex10_nd_tb_1yr));

if (ex10_nd_ca_1yr >= ex10_nd_tb_1yr) {
 let ex10_nd_ttd_1yr = ex10_nd_ca_1yr - ex10_nd_tb_1yr;
 sl_update("ex10_nd_ttd_1yr",sl_fmt(ex10_nd_ttd_1yr));
 sl_update("ex10_nd_dtd_1yr","--");
}
else {
 let ex10_nd_dtd_1yr = ex10_nd_tb_1yr - ex10_nd_ca_1yr;
 sl_update("ex10_nd_dtd_1yr",sl_fmt(ex10_nd_dtd_1yr));
 sl_update("ex10_nd_ttd_1yr","--");
}

let ex10_d_ca_1yr = ex10_cap * (1 - 1/ex10_life_fr); 
sl_update("ex10_d_ca_1yr",sl_fmt(ex10_d_ca_1yr));
let ex10_d_fta_1yr = ex10_d_ca_1yr;
sl_update("ex10_d_fta_1yr", sl_fmt(ex10_d_fta_1yr));
let ex10_d_fda_1yr = ex10_cap * (1 - 1/ex10_life_tax);
sl_update("ex10_d_fda_1yr", sl_fmt(ex10_d_fda_1yr));
let ex10_d_tb_1yr = ex10_d_ca_1yr - ex10_d_fta_1yr + ex10_d_fda_1yr;
sl_update("ex10_d_tb_1yr", sl_fmt(ex10_d_tb_1yr));

if (ex10_d_ca_1yr >= ex10_d_tb_1yr) {
 let ex10_d_ttd_1yr = ex10_d_ca_1yr - ex10_d_tb_1yr;
 sl_update("ex10_d_ttd_1yr",sl_fmt(ex10_d_ttd_1yr));
 sl_update("ex10_d_dtd_1yr","--");
}
else {
 let ex10_d_dtd_1yr = ex10_d_tb_1yr - ex10_d_ca_1yr;
 sl_update("ex10_d_dtd_1yr",sl_fmt(ex10_d_dtd_1yr));
 sl_update("ex10_d_ttd_1yr","--");
}

// EX11 DTW

let ex11_coname = colist[getRndInteger(0,colist.length)] + " Co";
sl_update("ex11_coname", ex11_coname);
let ex11_land_ca = getRndInteger(1000,2000);
sl_update("ex11_land_ca",sl_fmt(ex11_land_ca));
let ex11_land_cost = getRndInteger(800,900)
sl_update("ex11_land_cost",sl_fmt(ex11_land_cost));
let ex11_taxrate = getRndInteger(16,21) / 100;
sl_update("ex11_taxrate", ex11_taxrate*100);
let ex11_land_dtreval = (ex11_land_ca - ex11_land_cost)*ex11_taxrate;
sl_update("ex11_land_dtreval", sl_fmt(ex11_land_dtreval));

let ex11_bldg_ca = getRndInteger(1000,2000);
sl_update("ex11_bldg_ca",sl_fmt(ex11_bldg_ca));
let ex11_warranty_ca = getRndInteger(100,200);
sl_update("ex11_warranty_ca", sl_fmt(ex11_warranty_ca));

let ex11_dtl_bb = getRndInteger(50,100);
sl_update("ex11_dtl_bb", ex11_dtl_bb);
let ex11_dta_bb = getRndInteger(10,20);
sl_update("ex11_dta_bb", ex11_dta_bb);

let ex11_land_fta = ex11_land_ca;
sl_update("ex11_land_fta",sl_fmt(ex11_land_fta));
let ex11_land_fda = ex11_land_cost;
sl_update("ex11_land_fda",sl_fmt(ex11_land_fda));
let ex11_land_tb = ex11_land_ca - ex11_land_fta + ex11_land_fda;
sl_update("ex11_land_tb", ex11_land_tb);

let ex11_land_ttd=0;
let ex11_land_dtd=0;
if (ex11_land_ca >= ex11_land_tb) {
 ex11_land_ttd = ex11_land_ca - ex11_land_tb;
 sl_update("ex11_land_ttd",sl_fmt(ex11_land_ttd));
 sl_update("ex11_land_dtd","--");
}
else {
 ex11_land_dtd = ex11_land_tb - ex11_land_ca;
 sl_update("ex11_land_dtd",sl_fmt(ex11_land_dtd));
 sl_update("ex11_land_ttd","--");
}


let ex11_bldg_fta = ex11_bldg_ca;
sl_update("ex11_bldg_fta",sl_fmt(ex11_bldg_fta));
let ex11_bldg_fda = 0;
sl_update("ex11_bldg_fda",sl_fmt(ex11_bldg_fda));
let ex11_bldg_tb = ex11_bldg_ca - ex11_bldg_fta + ex11_bldg_fda;
sl_update("ex11_bldg_tb", ex11_bldg_tb);


let ex11_bldg_ttd=0;
let ex11_bldg_dtd=0;
if (ex11_bldg_ca >= ex11_bldg_tb) {
 ex11_bldg_ttd = ex11_bldg_ca - ex11_bldg_tb;
 sl_update("ex11_bldg_ttd",sl_fmt(ex11_bldg_ttd));
 sl_update("ex11_bldg_dtd","--");
}
else {
 ex11_bldg_dtd = ex11_bldg_tb - ex11_bldg_ca;
 sl_update("ex11_bldg_dtd",sl_fmt(ex11_bldg_dtd));
 sl_update("ex11_bldg_ttd","--");
}


let ex11_warranty_fda = ex11_warranty_ca;
sl_update("ex11_warranty_fda", sl_fmt(ex11_warranty_fda));
let ex11_warranty_tb = ex11_warranty_ca - ex11_warranty_fda;
sl_update("ex11_warranty_tb", sl_fmt(ex11_warranty_tb));

let ex11_warranty_ttd=0;
let ex11_warranty_dtd=0;
if (ex11_warranty_ca >= ex11_warranty_tb) {
 ex11_warranty_dtd = ex11_warranty_ca - ex11_warranty_tb;
 sl_update("ex11_warranty_dtd",sl_fmt(ex11_warranty_dtd));
 sl_update("ex11_warranty_ttd","--");
}
else {
 ex11_warranty_ttd = ex11_warranty_tb - ex11_warranty_ca;
 sl_update("ex11_warranty_ttd",sl_fmt(ex11_warranty_ttd));
 sl_update("ex11_warranty_dtd","--");
}

let ex11_ttd_tot = ex11_land_ttd + ex11_bldg_ttd + ex11_warranty_ttd;
sl_update("ex11_ttd_tot", sl_fmt(ex11_ttd_tot));
let ex11_dtd_tot = ex11_land_dtd + ex11_bldg_dtd + ex11_warranty_dtd;
sl_update("ex11_dtd_tot", sl_fmt(ex11_dtd_tot));

let ex11_ttd_excl = ex11_bldg_ttd;
sl_update("ex11_ttd_excl",sl_fmt(ex11_ttd_excl));
let ex11_dtd_excl = ex11_bldg_dtd;
sl_update("ex11_dtd_excl",sl_fmt(ex11_dtd_excl));

let ex11_ttd_adj = ex11_ttd_tot - ex11_ttd_excl;
sl_update("ex11_ttd_adj", sl_fmt(ex11_ttd_adj));
let ex11_dtd_adj = ex11_dtd_tot - ex11_dtd_excl;
sl_update("ex11_dtd_adj", sl_fmt(ex11_dtd_adj));

let ex11_dtl = ex11_ttd_adj * ex11_taxrate;
sl_update("ex11_dtl", sl_fmt(ex11_dtl));

let ex11_dta = ex11_dtd_adj * ex11_taxrate;
sl_update("ex11_dta",sl_fmt(ex11_dta));

let ex11_dtl_chg = ex11_dtl - (ex11_dtl_bb + ex11_land_dtreval);
sl_update("ex11_dtl_chg",sl_fmt(ex11_dtl_chg));

let ex11_dta_chg = ex11_dta - ex11_dta_bb;
sl_update("ex11_dta_chg",sl_fmt(ex11_dta_chg));

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
 
