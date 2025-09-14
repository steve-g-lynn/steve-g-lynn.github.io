
/*** SET INPUT NUMBERS ***/

/* random numbers to generate algorithmic variations */
let a1=getRndInteger(100,999);
let b1=getRndInteger(100,999);
let c1=getRndInteger(100,999);

/** EX1 BPO **/
let ex1_pmt = getRndInteger(10000,20000);
sl_update("ex1_pmt", sl_fmt(ex1_pmt));
let ex1_lessor_idc = getRndInteger(100,200);
sl_update("ex1_lessor_idc", sl_fmt(ex1_lessor_idc));
let ex1_lessee_idc = getRndInteger(100,200);
sl_update("ex1_lessee_idc", sl_fmt(ex1_lessee_idc));
let ex1_rv = getRndInteger(9000,9999);
sl_update("ex1_rv", sl_fmt(ex1_rv));
let ex1_bpo_price = ex1_pmt - getRndInteger(1000,2000);
sl_update("ex1_bpo_price", sl_fmt(ex1_bpo_price));
let ex1_iir = getRndInteger(8,11)/100;
sl_update("ex1_iir_perc", sl_fmt(ex1_iir*100));
sl_update("ex1_iir_dec", sl_fmt(ex1_iir));
let ex1_fv = ex1_pmt + ex1_bpo_price / (1+ex1_iir) - ex1_lessor_idc;
sl_update("ex1_fv", sl_fmt(ex1_fv));

let ex1_iir_eqn = `
<math display="block">
  <mn>${ex1_fv.toFixed(2)}</mn>
  <mo>+</mo>
  <mn>${ex1_lessor_idc}</mn>
  <mo>=</mo>
  <mn>${ex1_pmt}</mn>
  <mo>+</mo>
  <mfrac>
      <mrow>
         <mn>${ex1_bpo_price}</mn>
       </mrow>
       <mrow>
          <mn>${1+ex1_iir}</mn> 
       </mrow>
  </mfrac>
  <mo>.</mo>
</math>
`.trim();
sl_update("ex1_iir_eqn", ex1_iir_eqn);

let ex1_ll = ex1_pmt + ex1_bpo_price / (1+ex1_iir);
sl_update("ex1_ll", sl_fmt(ex1_ll));
let ex1_rou = ex1_ll + ex1_lessee_idc;
sl_update("ex1_rou", sl_fmt(ex1_rou));
	  
let ex1_netll = ex1_ll - ex1_pmt;
sl_update("ex1_netll", sl_fmt(ex1_netll));
let ex1_intexp = ex1_netll * ex1_iir;
sl_update("ex1_intexp", sl_fmt(ex1_intexp));
let ex1_depn = ex1_rou/3;
sl_update("ex1_depn", sl_fmt(ex1_depn));
	  
/** EXAMPLE 2 SALE LEASEBACK NOT A SALE **/
	  
let ex2_age  = getRndInteger(2,4);
sl_update("ex2_age", sl_fmt(ex2_age));
let ex2_life = getRndInteger(6, 12);
let ex2_iir = getRndInteger(5,9)/100;

let ex2_remlife = ex2_life - ex2_age;
sl_update("ex2_remlife", sl_fmt(ex2_remlife));

let ex2_pmt = getRndInteger(1000,2000);
sl_update("ex2_pmt", sl_fmt(ex2_pmt));

let ex2_prc = ex2_pmt + sl_pva(ex2_pmt, ex2_iir, ex2_remlife - 1);
sl_update("ex2_prc", sl_fmt(ex2_prc));

let ex2_fv = ex2_prc + getRndInteger(-500,500);
sl_update("ex2_fv", sl_fmt(ex2_fv));

let ex2_cost = ex2_fv + getRndInteger(500,1000);
sl_update("ex2_cost", sl_fmt(ex2_cost));

let ex2_ca = ex2_remlife * (ex2_cost / ex2_life);
sl_update("ex2_ca", sl_fmt(ex2_ca));

/** EX3: SALE AT FAIR VALUE **/

let ex3_age  = getRndInteger(2,4);
let ex3_life = getRndInteger(8, 12);
let ex3_iir = getRndInteger(5,9)/100;
sl_update("ex3_iir_perc", sl_fmt(ex3_iir*100));

let ex3_remlife = ex3_life - ex3_age;
sl_update("ex3_remlife", sl_fmt(ex3_remlife));

let ex3_pmt = getRndInteger(1000,2000);
sl_update("ex3_pmt", sl_fmt(ex3_pmt));

let ex3_prc = ex3_pmt + sl_pva(ex3_pmt, ex3_iir, ex3_remlife - 1);
sl_update("ex3_prc", sl_fmt(ex3_prc));

let ex3_fv = ex3_prc;
sl_update("ex3_fv", sl_fmt(ex3_fv));

let ex3_cost = ex3_fv + getRndInteger(500,1000);
sl_update("ex3_cost", sl_fmt(ex3_cost));

let ex3_ad = (ex3_cost / ex3_life) * ex3_age;
sl_update("ex3_ad", sl_fmt(ex3_ad));

let ex3_ca = ex3_remlife * (ex3_cost / ex3_life);
sl_update("ex3_ca", sl_fmt(ex3_ca));

let ex3_term = getRndInteger(2,4); // 2 or 3
sl_update("ex3_term", sl_fmt(ex3_term));

let ex3_gain1 = ex3_fv - ex3_ca;
sl_update("ex3_gain1", sl_fmt(ex3_gain1));

let ex3_ll = ex3_pmt + sl_pva(ex3_pmt, ex3_iir, ex3_term - 1);
sl_update("ex3_ll", sl_fmt(ex3_ll));

let ex3_rou = ex3_ll / ex3_fv * ex3_ca;
sl_update("ex3_rou", sl_fmt(ex3_rou));

let ex3_gain2 = ex3_ll - ex3_rou;
sl_update("ex3_gain2", sl_fmt(ex3_gain2));

if (ex3_term < 3) {
  var ex3_ll_eqn=`
<math display="block">
  <mtext>Lease liability</mtext>
  <mo>=</mo>
  <mn>${ex3_pmt}</mn>
  <mo>+</mo>
  <mfrac>
      <mrow>
         <mn>${ex3_pmt}</mn>
       </mrow>
       <mrow>
          <mn>${1+ex3_iir}</mn> 
       </mrow>
  </mfrac>
  <mo>=</mo>
  <mn>${ex3_ll.toFixed(2)}</mn>
  <mo>.</mo>
</math>
`.trim();
}
else {
  var ex3_ll_eqn=`
<math display="block">
  <mtext>Lease liability</mtext>
  <mo>=</mo>
  <mn>${ex3_pmt}</mn>
  <mo>+</mo>
  <mfrac>
      <mrow>
         <mn>${ex3_pmt}</mn>
       </mrow>
       <mrow>
          <mn>${1+ex3_iir}</mn> 
       </mrow>
  </mfrac>
  <mo>+</mo>
<mfrac>
      <mrow>
         <mn>${ex3_pmt}</mn>
       </mrow>
       <msup>
          <mn>${1+ex3_iir}</mn> 
	  <mn>2</mn>
       </msup>
  </mfrac>
  <mo>=</mo>
  <mn>${ex3_ll.toFixed(2)}</mn>
   <mo>.</mo>
</math>
`.trim();	
}
sl_update("ex3_ll_eqn", ex3_ll_eqn);

let ex3_rou_eqn = `
<math display="block">
  <mtext>ROU asset</mtext>
  <mo>=</mo>
   <mn>${ex3_ca.toFixed(2)}</mn>
   <mo>&times;</mo>
   <mfrac>
      <mn>${ex3_ll.toFixed(2)}</mn>
      <mn>${ex3_fv.toFixed(2)}</mn>
   </mfrac>
   <mo>=</mo>
   <mn>${ex3_rou.toFixed(2)}</mn>
   <mo>.</mo>
</math>
`.trim();
sl_update("ex3_rou_eqn", ex3_rou_eqn);
   
/** EX4: SALE AT LESS THAN FAIR VALUE **/

let ex4_age  = getRndInteger(2,4);
let ex4_life = getRndInteger(8, 12);
let ex4_iir = getRndInteger(5,9)/100;
sl_update("ex4_iir_perc", sl_fmt(ex4_iir*100));

let ex4_remlife = ex4_life - ex4_age;
sl_update("ex4_remlife", sl_fmt(ex4_remlife));

let ex4_pmt = getRndInteger(1000,2000);
sl_update("ex4_pmt", sl_fmt(ex4_pmt));

let ex4_prc = ex4_pmt + sl_pva(ex4_pmt, ex4_iir, ex4_remlife - 1);
sl_update("ex4_prc", sl_fmt(ex4_prc));

let ex4_fv = ex4_prc + getRndInteger(100,300);
sl_update("ex4_fv", sl_fmt(ex4_fv));

let ex4_imputed = ex4_fv - ex4_prc;
sl_update("ex4_imputed", sl_fmt(ex4_imputed));

let ex4_cost = ex4_fv + getRndInteger(500,1000);
sl_update("ex4_cost", sl_fmt(ex4_cost));

let ex4_ad = (ex4_cost / ex4_life) * ex4_age;
sl_update("ex4_ad", sl_fmt(ex4_ad));

let ex4_ca = ex4_remlife * (ex4_cost / ex4_life);
sl_update("ex4_ca", sl_fmt(ex4_ca));

let ex4_term = getRndInteger(2,4); // 2 or 3
sl_update("ex4_term", sl_fmt(ex4_term));

let ex4_gain1 = ex4_fv - ex4_ca;
sl_update("ex4_gain1", sl_fmt(ex4_gain1));

let ex4_ll = ex4_imputed + ex4_pmt + sl_pva(ex4_pmt, ex4_iir, ex4_term - 1);
sl_update("ex4_ll", sl_fmt(ex4_ll));

let ex4_rou = ex4_ll / ex4_fv * ex4_ca;
sl_update("ex4_rou", sl_fmt(ex4_rou));

let ex4_gain2 = ex4_ll - ex4_rou;
sl_update("ex4_gain2", sl_fmt(ex4_gain2));

if (ex4_term < 3) {
  var ex4_ll_eqn=`
<math display="block">
  <mtext>Lease liability</mtext>
  <mo>=</mo>
  <mn>${ex4_imputed}</mn>
  <mo>+</mo>
  <mn>${ex4_pmt}</mn>
  <mo>+</mo>
  <mfrac>
      <mrow>
         <mn>${ex4_pmt}</mn>
       </mrow>
       <mrow>
          <mn>${1+ex4_iir}</mn> 
       </mrow>
  </mfrac>
  <mo>=</mo>
  <mn>${ex4_ll.toFixed(2)}</mn>
  <mo>.</mo>
</math>
`.trim();
}
else {
  var ex4_ll_eqn=`
<math display="block">
  <mtext>Lease liability</mtext>
  <mo>=</mo>
  <mn>${ex4_imputed}</mn>
  <mo>+</mo>
  <mn>${ex4_pmt}</mn>
  <mo>+</mo>
  <mfrac>
      <mrow>
         <mn>${ex4_pmt}</mn>
       </mrow>
       <mrow>
          <mn>${1+ex4_iir}</mn> 
       </mrow>
  </mfrac>
  <mo>+</mo>
<mfrac>
      <mrow>
         <mn>${ex4_pmt}</mn>
       </mrow>
       <msup>
          <mn>${1+ex4_iir}</mn> 
	  <mn>2</mn>
       </msup>
  </mfrac>
  <mo>=</mo>
  <mn>${ex4_ll.toFixed(2)}</mn>
   <mo>.</mo>
</math>
`.trim();	
}
sl_update("ex4_ll_eqn", ex4_ll_eqn);

let ex4_rou_eqn = `
<math display="block">
  <mtext>ROU asset</mtext>
  <mo>=</mo>
   <mn>${ex4_ca.toFixed(2)}</mn>
   <mo>&times;</mo>
   <mfrac>
      <mn>${ex4_ll.toFixed(2)}</mn>
      <mn>${ex4_fv.toFixed(2)}</mn>
   </mfrac>
   <mo>=</mo>
   <mn>${ex4_rou.toFixed(2)}</mn>
   <mo>.</mo>
</math>
`.trim();
sl_update("ex4_rou_eqn", ex4_rou_eqn);
   
   
/** EX5: SALE AT MORE THAN FAIR VALUE **/

let ex5_age  = getRndInteger(2,4);
let ex5_life = getRndInteger(8, 12);
let ex5_iir = getRndInteger(5,9)/100;
sl_update("ex5_iir_perc", sl_fmt(ex5_iir*100));

let ex5_remlife = ex5_life - ex5_age;
sl_update("ex5_remlife", sl_fmt(ex5_remlife));

let ex5_pmt = getRndInteger(1000,2000);
sl_update("ex5_pmt", sl_fmt(ex5_pmt));

let ex5_prc = ex5_pmt + sl_pva(ex5_pmt, ex5_iir, ex5_remlife - 1);
sl_update("ex5_prc", sl_fmt(ex5_prc));

let ex5_fv = ex5_prc - getRndInteger(100,300);
sl_update("ex5_fv", sl_fmt(ex5_fv));

let ex5_loan = ex5_prc - ex5_fv;
sl_update("ex5_loan", sl_fmt(ex5_loan));

let ex5_cost = ex5_fv + getRndInteger(500,1000);
sl_update("ex5_cost", sl_fmt(ex5_cost));

let ex5_ad = (ex5_cost / ex5_life) * ex5_age;
sl_update("ex5_ad", sl_fmt(ex5_ad));

let ex5_ca = ex5_remlife * (ex5_cost / ex5_life);
sl_update("ex5_ca", sl_fmt(ex5_ca));

let ex5_term = getRndInteger(2,4); // 2 or 3
sl_update("ex5_term", sl_fmt(ex5_term));

let ex5_gain1 = ex5_fv - ex5_ca;
sl_update("ex5_gain1", sl_fmt(ex5_gain1));

let ex5_ll = ex5_pmt + sl_pva(ex5_pmt, ex5_iir, ex5_term - 1) - ex5_loan;
sl_update("ex5_ll", sl_fmt(ex5_ll));

let ex5_rou = ex5_ll / ex5_fv * ex5_ca;
sl_update("ex5_rou", sl_fmt(ex5_rou));

let ex5_gain2 = ex5_ll - ex5_rou;
sl_update("ex5_gain2", sl_fmt(ex5_gain2));

let ex5_pmt_lease = ex5_ll / (ex5_ll + ex5_loan) * ex5_pmt;
sl_update("ex5_pmt_lease", sl_fmt(ex5_pmt_lease));

let ex5_pmt_loan = ex5_loan / (ex5_ll + ex5_loan) * ex5_pmt;
sl_update("ex5_pmt_loan", sl_fmt(ex5_pmt_loan));

let ex5_loan_eqn = `
<math display="block">
<mtext>Loan liability</mtext>
<mo>=</mo>
<mn>${ex5_prc.toFixed(2)}</mn>
<mo>&minus;</mo>
<mn>${ex5_fv.toFixed(2)}</mn>
<mo>=</mo>
<mn>${ex5_loan}</mn>
<mo>.</mo>
</math>
`.trim();
sl_update("ex5_loan_eqn", ex5_loan_eqn);

if (ex5_term < 3) {
  var ex5_ll_eqn=`
<math display="block">
  <mtext>Lease liability</mtext>
  <mo>=</mo>
  <mn>${ex5_pmt}</mn>
  <mo>+</mo>
  <mfrac>
      <mrow>
         <mn>${ex5_pmt}</mn>
       </mrow>
       <mrow>
          <mn>${1+ex5_iir}</mn> 
       </mrow>
  </mfrac>
  <mo>&minus;</mo>
  <mn>${ex5_loan}</mn>
  <mo>=</mo>
  <mn>${ex5_ll.toFixed(2)}</mn>
  <mo>.</mo>
</math>
`.trim();
}
else {
  var ex5_ll_eqn=`
<math display="block">
  <mtext>Lease liability</mtext>
  <mo>=</mo>
  <mn>${ex5_pmt}</mn>
  <mo>+</mo>
  <mfrac>
      <mrow>
         <mn>${ex5_pmt}</mn>
       </mrow>
       <mrow>
          <mn>${1+ex5_iir}</mn> 
       </mrow>
  </mfrac>
  <mo>+</mo>
<mfrac>
      <mrow>
         <mn>${ex5_pmt}</mn>
       </mrow>
       <msup>
          <mn>${1+ex5_iir}</mn> 
	  <mn>2</mn>
       </msup>
  </mfrac>
  <mo>&minus;</mo>
  <mn>${ex5_loan}</mn>
  <mo>=</mo>
  <mn>${ex5_ll.toFixed(2)}</mn>
   <mo>.</mo>
</math>
`.trim();	
}
sl_update("ex5_ll_eqn", ex5_ll_eqn);

let ex5_rou_eqn = `
<math display="block">
  <mtext>ROU asset</mtext>
  <mo>=</mo>
   <mn>${ex5_ca.toFixed(2)}</mn>
   <mo>&times;</mo>
   <mfrac>
      <mn>${ex5_ll.toFixed(2)}</mn>
      <mn>${ex5_fv.toFixed(2)}</mn>
   </mfrac>
   <mo>=</mo>
   <mn>${ex5_rou.toFixed(2)}</mn>
   <mo>.</mo>
</math>
`.trim();
sl_update("ex5_rou_eqn", ex5_rou_eqn);
   
let ex5_lease_pmt_eqn=`
<math display="block">
   <mtext>Lease payment</mtext>
   <mo>=</mo>
   <mfrac>
       <mn>${ex5_ll.toFixed(2)}</mn>
       <mrow>
          <mn>${ex5_ll.toFixed(2)}</mn>
	  <mo>+</mo>
	  <mn>${ex5_loan.toFixed(2)}</mn>
       </mrow>
   </mfrac>
   <mo>&times;</mo>
   <mn>${ex5_pmt}</mn>
   <mo>=</mo>
   <mn>${ex5_pmt_lease.toFixed(2)}</mn>
   <mn>.</mn>
</math>   
`.trim();
sl_update("ex5_lease_pmt_eqn",ex5_lease_pmt_eqn);
   
let ex5_loan_pmt_eqn=`
<math display="block">
   <mtext>Loan payment</mtext>
   <mo>=</mo>
   <mfrac>
       <mn>${ex5_loan.toFixed(2)}</mn>
       <mrow>
          <mn>${ex5_ll.toFixed(2)}</mn>
	  <mo>+</mo>
	  <mn>${ex5_loan.toFixed(2)}</mn>
       </mrow>
   </mfrac>
   <mo>&times;</mo>
   <mn>${ex5_pmt}</mn>
   <mo>=</mo>
   <mn>${ex5_pmt_loan.toFixed(2)}</mn>
   <mn>.</mn>
</math>   
`.trim();
sl_update("ex5_loan_pmt_eqn",ex5_loan_pmt_eqn);

/** END OF MAIN SCRIPT **/

/*** SUPPORTING FUNCTIONS ***/

function sl_update(sl_item,sl_value) {
 let sl_list=document.querySelectorAll("."+sl_item);
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

function sl_fmt(sl_no) {
 return sl_no.toLocaleString("en-SG",{maximumFractionDigits:2});
}

function sl_pva(pmt, rate, years) {
 return pmt*1/rate * (1 - 1/(1+rate)**years);
}

function sl_pmt(pva, rate, years) {
  return pva / (1/rate * (1 - 1/(1+rate)**years));
}
