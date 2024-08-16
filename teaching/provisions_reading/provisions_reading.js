/*** SET INPUT NUMBERS ***/

/* random numbers to generate algorithmic variations */
let a1=getRndInteger(100,999);
let b1=getRndInteger(100,999);
let c1=getRndInteger(100,999);

/*example 3  Lynn Co lawsuit*/
let ex3_prob = 0.3 + (a1 % 5) / 10;
sl_update("ex3_prob",(ex3_prob*100).toFixed(2));

let ex3_damages_ask=1000 + (b1 % 45);
sl_update("ex3_damages_ask",ex3_damages_ask.toLocaleString());

let ex3_damages_est = 900 - (c1 % 19);
sl_update("ex3_damages_est",ex3_damages_est.toLocaleString());

let ex3_reliable = (a1 % 2);
if (ex3_reliable > 0) {
  sl_update("ex3_reliable"," which is a reliable estimate. ");
}
else {
  sl_update("ex3_reliable"," which is a rough ballpark guess only. "	);
}

if (ex3_prob <= 0.5) {
 sl_update("ex3_prob_test", "The outflow is not more likely than not, therefore this is not a provision.");	
 sl_update("ex3_amount","");	
}
else if (ex3_reliable == 0) {
 sl_update("ex3_prob_test","The outflow is more likely than not, therefore a provision may exist.");
 sl_update("ex3_amount","But the amount of the loss cannot be reliably estimated, so we cannot recognize a provision.");
}
else {
 sl_update("ex3_prob_test","The outflow is more likely than not, therefore a provision may exist.");
 sl_update("ex3_amount","The amount of the loss can be reliably estimated, so we recognize a provision in the amount of $"  + ex3_damages_est.toLocaleString() +".");
}


/** ex7 Chua Co **/
let ex7_prob = 0.2 + (b1 % 6) / 10;
sl_update("ex7_prob",(ex7_prob*100).toFixed(2));

let ex7_damages_est = 1000 + (a1 % 19);
sl_update("ex7_damages_est",ex7_damages_est.toLocaleString());

let ex7_reliable = (a1 % 2);
if (ex7_reliable > 0) {
  sl_update("ex7_reliable"," which is a reliable estimate. ");
}
else {
  sl_update("ex7_reliable"," which is a rough ballpark guess only. "	);
}

if (ex7_prob <= 0.5) {
 sl_update("ex7_prob_test", "The outflow is not more likely than not, therefore this is not a provision. But an outflow is still possible, and our assessed probability is significantly high and not remote or negligible. We would record a contingent liability.");	
 sl_update("ex7_amount","");	
}
else if (ex3_reliable == 0) {
 sl_update("ex7_prob_test","The outflow is more likely than not, therefore a provision may exist.");
 sl_update("ex7_amount","But the amount of the loss cannot be reliably estimated, so we cannot recognize a provision. We would record a contingent liability.");
}
else {
 sl_update("ex7_prob_test","The outflow is more likely than not, therefore a provision may exist.");
 sl_update("ex7_amount","The amount of the loss can be reliably estimated, so we recognize a provision in the amount of $"  + ex3_damages_est.toLocaleString() +".");
}

// EX9: WARRANTY

let ex9_light_perc=0.01+((a1 % 96)/10000);
sl_update("ex9_light_perc", (ex9_light_perc*100).toFixed(2));
let ex9_major_perc=0.001+((b1 % 12)/10000);
sl_update("ex9_major_perc",(ex9_major_perc*1000).toFixed(2));
let ex9_light_cpu=1+((c1 % 89)/100);
sl_update("ex9_light_cpu",ex9_light_cpu.toFixed(2));
let ex9_major_cpu=200+(a1 % 22);
sl_update("ex9_major_cpu",ex9_major_cpu.toFixed(2));
let ex9_units_sold=242587 + (b1 % 9);
sl_update("ex9_units_sold",ex9_units_sold.toLocaleString());
let ex9_amt = ( (ex9_light_perc * ex9_light_cpu) + (ex9_major_perc * ex9_major_cpu) )*ex9_units_sold;
sl_update("ex9_amt",ex9_amt.toFixed(2));

// EX10 (most likely outcome

let ex10_prob = 0.5 + ((c1 % 24)/100);
sl_update("ex10_prob",(ex10_prob*100).toFixed(2));
let ex10_low = 546 + (a1 % 17);
sl_update("ex10_low",ex10_low.toLocaleString());
let ex10_high = ex10_low + 338 + (b1 % 52);
sl_update("ex10_high",ex10_high.toLocaleString());
let ex10_mid = (ex10_low + ex10_high)/2.0;
sl_update("ex10_mid",ex10_mid.toFixed(2));


// EX11: PRESENT VALUE

let ex11_amt25 = 749+(c1 % 35);
sl_update("ex11_amt25",ex11_amt25.toFixed(2));
let ex11_amt26 = 1576+(a1 % 50);
sl_update("ex11_amt26",ex11_amt26.toFixed(2));
let ex11_rate = 0.01 + ((b1 % 9)/10000);
sl_update("ex11_rate",(ex11_rate*100).toFixed(2));
let ex11_noncurr = ex11_amt26 / ( (1 + ex11_rate)**1.5);
sl_update("ex11_noncurr", ex11_noncurr.toFixed(2));

// EX12: UNWINDING OF DISCOUNT

let ex12_noncurr_bb = 437 +(a1 % 15);
sl_update("ex12_noncurr_bb",ex12_noncurr_bb.toLocaleString());
let ex12_rate = 0.02 + ((b1 % 27)/10000);
sl_update("ex12_rate", (ex12_rate*100).toLocaleString());
 
 /* EX12 interest calculation */
let ex12_int = ex12_noncurr_bb * ex12_rate * 1.5;
sl_update("ex12_int",ex12_int.toFixed(2));

 /* EX12 noncurrent provision updated balance */
let ex12_noncurr_eb = ex12_noncurr_bb + ex12_int;
sl_update("ex12_noncurr_eb",ex12_noncurr_eb.toFixed(2));

// EX13 RISK-FREE AND RISK-ADJUSTED RATES

let ex13_low = 550 + (c1 % 57);
sl_update("ex13_low",ex13_low.toLocaleString());
let ex13_high = 727 + (a1 % 98);
sl_update("ex13_high",ex13_high.toLocaleString());
let ex13_mid = (ex13_low+ex13_high)/2;
sl_update("ex13_mid",ex13_mid.toLocaleString());
let ex13_ce = ex13_mid + 21 + (b1 % 21);
sl_update("ex13_ce", ex13_ce.toLocaleString());
let ex13_rf = 0.01 + (c1 % 87)/10000;
sl_update("ex13_rf",ex13_rf.toFixed(4));
let ex13_prov = ex13_ce / ( (1 + ex13_rf)**3 );
sl_update("ex13_prov",ex13_prov.toLocaleString());
let ex13_ra = ((ex13_mid / ex13_prov)**(1.0/3.0))-1;
sl_update("ex13_ra",ex13_ra.toFixed(4));

// EX14 UPDATE WARRANTY

let ex14_curr_bb_units = 317 + (a1 % 44);
sl_update("ex14_curr_bb_units",ex14_curr_bb_units.toLocaleString());
let ex14_curr_bb_cpu = 80 + (b1 % 9);
sl_update("ex14_curr_bb_cpu",ex14_curr_bb_cpu.toLocaleString());
let ex14_curr_bb = ex14_curr_bb_cpu * ex14_curr_bb_units;
sl_update("ex14_curr_bb",ex14_curr_bb.toLocaleString());

let ex14_noncurr_bb_units = 409 + (c1 % 52);
sl_update("ex14_noncurr_bb_units",ex14_noncurr_bb_units.toLocaleString());
let ex14_noncurr_bb_cpu = 82 + (a1 % 9);
sl_update("ex14_noncurr_bb_cpu",ex14_noncurr_bb_cpu.toLocaleString());
let ex14_noncurr_bb = ex14_noncurr_bb_cpu * ex14_noncurr_bb_units;
sl_update("ex14_noncurr_bb",ex14_noncurr_bb.toLocaleString());

let ex14_claims = ex14_curr_bb - 388 - (b1 % 63);
sl_update("ex14_claims",ex14_claims.toLocaleString());

let ex14_noncurr_eb_units = 489 + (c1 % 49);
sl_update("ex14_noncurr_eb_units",ex14_noncurr_eb_units.toLocaleString());
let ex14_noncurr_eb_cpu = 97 + (a1 % 7);
sl_update("ex14_noncurr_eb_cpu",ex14_noncurr_eb_cpu.toLocaleString());
let ex14_noncurr_eb = ex14_noncurr_eb_cpu * ex14_noncurr_eb_units;
sl_update("ex14_noncurr_eb", ex14_noncurr_eb.toLocaleString());

let ex14_curr_eb_units = 491 + (b1 % 48);
sl_update("ex14_curr_eb_units",ex14_curr_eb_units.toLocaleString());
let ex14_curr_eb_cpu = 89 + (c1 % 8);
sl_update("ex14_curr_eb_cpu",ex14_curr_eb_cpu.toLocaleString());
let ex14_curr_eb = ex14_curr_eb_cpu * ex14_curr_eb_units;
sl_update("ex14_curr_eb",ex14_curr_eb.toLocaleString());

let ex14_noncurr_bb_up = (ex14_noncurr_bb / ex14_noncurr_bb_cpu * ex14_curr_eb_cpu) - ex14_noncurr_bb;
sl_update( "ex14_noncurr_bb_up",ex14_noncurr_bb_up.toLocaleString());

let ex14_curr_bb_exp = ex14_curr_bb - ex14_claims;
sl_update("ex14_curr_bb_exp", ex14_curr_bb_exp.toLocaleString());

// EX15 ONEROUS CONTRACT

let ex15_sal = 67763 + (a1 % 81);
sl_update("ex15_sal",ex15_sal.toLocaleString());
let ex15_rate = 0.01 + (b1 % 81)/10000;
sl_update("ex15_rate",ex15_rate.toFixed(4));
let ex15_prov = 0;
for (const t of [1,2,3]) {
  ex15_prov = ex15_prov + ex15_sal / (( 1 + ex15_rate)**t ); 
}
sl_update("ex15_prov",ex15_prov.toLocaleString());


// EX16 LEVY ON REVENUES

let ex16_levy_rate = 0.07 + (c1 % 76)/10_000;
sl_update("ex16_levy_rate",(ex16_levy_rate*100).toFixed(2));
let ex16_rev_y0 = 2416 + (a1 % 11);
sl_update("ex16_rev_y0",ex16_rev_y0.toLocaleString());
let ex16_rev_y1 = 5301 + (b1 % 71);
sl_update("ex16_rev_y1",ex16_rev_y1.toLocaleString());
let ex16_rate = 0.01 + ((c1 % 11)/10_000);
sl_update("ex16_rate",ex16_rate.toFixed(4));
let ex16_prov = ex16_rev_y0 * ex16_levy_rate;
sl_update("ex16_prov",ex16_prov.toFixed(2));

// EX17 MANPOWER LEVY

let ex17_num_curr = 75 + (a1 % 4);
sl_update("ex17_num_curr",ex17_num_curr.toLocaleString());
let ex17_levy_pm = 507 + (b1 % 19);
sl_update("ex17_levy_pm",ex17_levy_pm);
let ex17_levy_pd = Math.round((ex17_levy_pm * 12) / 365 * 100) / 100;
sl_update("ex17_levy_pd",ex17_levy_pd.toFixed(2));
let ex17_num_new=15+(c1 % 7);
sl_update("ex17_num_new",ex17_num_new.toLocaleString());
let ex17_num_new_joined=ex17_num_new  - 5 - (a1 % 3);
sl_update("ex17_num_new_joined",ex17_num_new_joined.toLocaleString());
let ex17_date_joined=getRndInteger(5,23);
sl_update("ex17_date_joined",ex17_date_joined.toLocaleString());
let ex17_prov=ex17_num_curr*ex17_levy_pm + ex17_num_new_joined*(31 - ex17_date_joined + 1);
sl_update("ex17_prov",ex17_prov.toFixed(2));

//EX18 DECOMMISSIONING

let ex18_cost=8_000_163 + (b1 % 92);
sl_update("ex18_cost",ex18_cost.toLocaleString());
let ex18_life=getRndInteger(7,13);
sl_update("ex18_life",ex18_life.toLocaleString());
let ex18_low=getRndInteger(899_494,994_945);
sl_update("ex18_low",ex18_low.toLocaleString());
let ex18_high=getRndInteger(1_324_877,1_487_870);
sl_update("ex18_high",ex18_high.toLocaleString());
let ex18_rate = 0.01 + ((c1 % 95)/10_000);
sl_update("ex18_rate",ex18_rate.toFixed(4));
let ex18_low_new=getRndInteger(899_494,994_945);
sl_update("ex18_low_new",ex18_low_new.toLocaleString());
let ex18_high_new=getRndInteger(1_324_877,1_487_870);
sl_update("ex18_high_new",ex18_high_new.toLocaleString());
let ex18_rate_new = 0.01 + ((a1 % 11)/10_000);
sl_update("ex18_rate_new",ex18_rate_new.toFixed(4));

let ex18_prov = ((ex18_low + ex18_high)/2)/(1+ex18_rate*ex18_life);
sl_update("ex18_prov",ex18_prov.toFixed(2));
let ex18_ppe = ex18_cost + ex18_prov;
sl_update("ex18_ppe",ex18_ppe.toFixed(2));


let ex18_depn24 = (ex18_cost + ex18_prov) / ex18_life;
sl_update("ex18_depn24",ex18_depn24.toFixed(2));
let ex18_int24 = ex18_prov * ex18_rate;
sl_update("ex18_int24",ex18_int24.toFixed(2));

let ex18_prov_new = ((ex18_low_new + ex18_high_new)/2)/(1+ex18_rate_new*(ex18_life-1));
sl_update("ex18_prov_new",ex18_prov_new.toFixed(2));
let ex18_prov_chg = ex18_prov_new - (ex18_prov + ex18_int24);
sl_update("ex18_prov_chg",ex18_prov_chg.toFixed(2));
sl_update("ex18_prov_chg1",Math.abs(ex18_prov_chg).toFixed(2));

if (ex18_prov_new >= (ex18_prov + ex18_int24)) {
  sl_update("ex18_dr","Dr PPE");
  sl_update("ex18_cr","&nbsp; &nbsp; Cr provision for cleanup");
}
else {
  sl_update("ex18_dr","Dr provision for cleanup");
  sl_update("ex18_cr", "&nbsp; &nbsp; Cr PPE");
}


let ex18_depn25 = (ex18_cost + ex18_prov + ex18_prov_chg - ex18_depn24) / (ex18_life-1);
sl_update("ex18_depn25",ex18_depn25.toFixed(2));
let ex18_int25 = ex18_prov_new * ex18_rate_new;
sl_update("ex18_int25",ex18_int25.toFixed(2));

// EX19 RESTRUCTURING

let ex19_lease=getRndInteger(20788,75304);
sl_update("ex19_lease",ex19_lease.toLocaleString());
let ex19_golden=getRndInteger(59142,74467);
sl_update("ex19_golden",ex19_golden.toLocaleString());
let ex19_retraining=getRndInteger(35015,58324);
sl_update("ex19_retraining",ex19_retraining.toLocaleString());
let ex19_relocation=getRndInteger(50654,96372);
sl_update("ex19_relocation",ex19_relocation.toLocaleString());
let ex19_marketing=getRndInteger(39338,60672);
sl_update("ex19_marketing",ex19_marketing.toLocaleString());
let ex19_prov = ex19_lease + ex19_golden;
sl_update("ex19_prov",ex19_prov.toLocaleString());

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
 
