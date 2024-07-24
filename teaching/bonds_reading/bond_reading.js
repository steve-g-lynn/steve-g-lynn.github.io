/*** SET INPUT NUMBERS ***/

/* random numbers to generate algorithmic variations */
let a1=getRndInteger(100,999);
let b1=getRndInteger(100,999);
let c1=getRndInteger(100,999);

// EX1 coupon rate

let ex1_coupon_rate = 0.02 + (a1 % 58)/10_000;
sl_update("ex1_coupon_rate", (ex1_coupon_rate*100).toFixed(4));
let ex1_face_value = (1 + (b1 % 8) ) * 1_000_000;
sl_update("ex1_face_value", ex1_face_value.toLocaleString());
let ex1_coupon_amt = ex1_face_value*ex1_coupon_rate*0.5;
sl_update("ex1_coupon_amt",ex1_coupon_amt.toLocaleString());

// EX2 proceeds with discount

let ex2_coupon_rate = 0.02 + (c1 % 72)/10_000;
sl_update("ex2_coupon_rate", (ex2_coupon_rate*100).toFixed(4));
let ex2_face_value = (1 + (a1 % 7) ) * 1_000_000;
sl_update("ex2_face_value", ex2_face_value.toLocaleString());
let ex2_coupon_amt = ex2_face_value*ex2_coupon_rate*0.5;
sl_update("ex2_coupon_amt",ex2_coupon_amt.toLocaleString());
let ex2_eir = ex2_coupon_rate + 0.001 + (b1 % 69)/10_000;
sl_update("ex2_eir",(ex2_eir*100).toFixed(4));

let ex2_proceeds  = 0;
for (let i of [1, 2, 3]) {
  ex2_proceeds = ex2_proceeds +
	ex2_coupon_amt / ( (1 + ex2_eir/2)**i);
}
ex2_proceeds = ex2_proceeds + ex2_face_value / ( (1 + ex2_eir/2)**3 );
sl_update("ex2_proceeds",ex2_proceeds.toLocaleString());



// EX3 proceeds with premium

let ex3_coupon_rate = 0.02 + (c1 % 72)/10_000;
sl_update("ex3_coupon_rate", (ex3_coupon_rate*100).toFixed(4));
let ex3_face_value = (1 + (a1 % 7) ) * 1_000_000;
sl_update("ex3_face_value", ex3_face_value.toLocaleString());
let ex3_coupon_amt = ex3_face_value*ex3_coupon_rate*0.5;
sl_update("ex3_coupon_amt",ex3_coupon_amt.toLocaleString());
let ex3_eir = ex3_coupon_rate - 0.001 - (b1 % 69)/10_000;
sl_update("ex3_eir",(ex3_eir*100).toFixed(4));

let ex3_proceeds  = 0;
for (let i of [1, 2, 3]) {
  ex3_proceeds = ex3_proceeds +
	ex3_coupon_amt / ( (1 + ex3_eir/2)**i);
}
ex3_proceeds = ex3_proceeds + ex3_face_value / ( (1 + ex3_eir/2)**3 );
sl_update("ex3_proceeds",ex3_proceeds.toLocaleString());

// EX4 YTM

let ex4_coupon_rate = getRndInteger(212,269)/10000;
sl_update("ex4_coupon_rate", (ex4_coupon_rate*100).toFixed(4));
let ex4_face_value = getRndInteger(1,8) * 1_000_000;
sl_update("ex4_face_value", ex4_face_value.toLocaleString());
let ex4_coupon_amt = ex4_face_value*ex4_coupon_rate*0.5;
sl_update("ex4_coupon_amt",ex4_coupon_amt.toLocaleString());
let ex4_eir = getRndInteger(212,269)/10000;
sl_update("ex4_eir",(ex4_eir*100).toFixed(4));

let ex4_proceeds  = 0;
for (let i of [1, 2, 3]) {
  ex4_proceeds = ex4_proceeds +
	ex4_coupon_amt / ( (1 + ex4_eir/2)**i);
}
ex4_proceeds = ex4_proceeds + ex4_face_value / ( (1 + ex4_eir/2)**3 );
sl_update("ex4_proceeds",ex4_proceeds.toLocaleString());

// EX5 EIR

let ex5_rs = getRndInteger(212,269)/10000;
sl_update("ex5_rs", (ex5_rs*100).toFixed(4));
let ex5_ra = ( ( 1 + (ex5_rs/2) ) ** 2 ) - 1;
sl_update("ex5_ra",(ex5_ra*100).toFixed(4));

// EX6 loan repayment schedule with discount

let ex6_coupon_rate = 0.02 + (c1 % 19)/10_000;
sl_update("ex6_coupon_rate", (ex6_coupon_rate*100).toFixed(4));
let ex6_face_value = (1 + (a1 % 5) ) * 1_000_000;
sl_update("ex6_face_value", ex6_face_value.toLocaleString());
let ex6_coupon_amt = ex6_face_value*ex6_coupon_rate*0.5;
sl_update("ex6_coupon_amt",ex6_coupon_amt.toLocaleString());
let ex6_eir = ex6_coupon_rate + 0.001 + (b1 % 45)/10_000;
sl_update("ex6_eir",(ex6_eir*100).toFixed(4));

let ex6_proceeds  = 0;
for (let i of [1, 2, 3]) {
  ex6_proceeds = ex6_proceeds +
	ex6_coupon_amt / ( (1 + ex6_eir/2)**i);
}
ex6_proceeds = ex6_proceeds + ex6_face_value / ( (1 + ex6_eir/2)**3 );
sl_update("ex6_proceeds",ex6_proceeds.toLocaleString());

let ex6 = new Array(4);
for (let i of [0, 1, 2, 3]) {
  ex6[i]=new Array(5);	
}
ex6[0][0] = ex6_proceeds;
sl_update("ex6_1_1",(ex6[0][0]).toLocaleString());

ex6[0][1]=0;
sl_update("ex6_1_2",(ex6[0][1]).toLocaleString());

for (let i of [1,2]){
 ex6[i][1] = ex6_coupon_amt;
 sl_update("ex6_"+(i+1)+"_2",(ex6[i][1]).toLocaleString());
}

ex6[3][1] = ex6_face_value + ex6_coupon_amt;
sl_update("ex6_4_2",(ex6[3][1]).toLocaleString());

for (let i of [0, 1, 2]) {


 ex6[i][2] = ex6[i][0]-ex6[i][1];
 sl_update("ex6_"+(i+1)+"_3",(ex6[i][2]).toLocaleString());

 ex6[i][3] = ex6[i][2] * ex6_eir * 0.5;
 sl_update("ex6_"+(i+1)+"_4",(ex6[i][3]).toLocaleString());

 ex6[i][4] = ex6[i][2] + ex6[i][3];
 sl_update("ex6_"+(i+1)+"_5",(ex6[i][4]).toLocaleString());

 ex6[i+1][0] = ex6[i][4];
 sl_update("ex6_"+(i+2)+"_1",(ex6[i+1][0]).toLocaleString());
}


// EX7 loan repayment schedule with premium

let ex7_coupon_rate = 0.02 + (c1 % 19)/10_000;
sl_update("ex7_coupon_rate", (ex7_coupon_rate*100).toFixed(4));
let ex7_face_value = (1 + (a1 % 5) ) * 1_000_000;
sl_update("ex7_face_value", ex7_face_value.toLocaleString());
let ex7_coupon_amt = ex7_face_value*ex7_coupon_rate*0.5;
sl_update("ex7_coupon_amt",ex7_coupon_amt.toLocaleString());
let ex7_eir = ex7_coupon_rate - 0.001 - (b1 % 45)/10_000;
sl_update("ex7_eir",(ex7_eir*100).toFixed(4));

let ex7_proceeds  = 0;
for (let i of [1, 2, 3]) {
  ex7_proceeds = ex7_proceeds +
	ex7_coupon_amt / ( (1 + ex7_eir/2)**i);
}
ex7_proceeds = ex7_proceeds + ex7_face_value / ( (1 + ex7_eir/2)**3 );
sl_update("ex7_proceeds",ex7_proceeds.toLocaleString());

let ex7 = new Array(4);
for (let i of [0, 1, 2, 3]) {
  ex7[i]=new Array(5);	
}
ex7[0][0] = ex7_proceeds;
sl_update("ex7_1_1",(ex7[0][0]).toLocaleString());

ex7[0][1]=0;
sl_update("ex7_1_2",(ex7[0][1]).toLocaleString());

for (let i of [1,2]){
 ex7[i][1] = ex7_coupon_amt;
 sl_update("ex7_"+(i+1)+"_2",(ex7[i][1]).toLocaleString());
}

ex7[3][1] = ex7_face_value + ex7_coupon_amt;
sl_update("ex7_4_2",(ex7[3][1]).toLocaleString());

for (let i of [0, 1, 2]) {


 ex7[i][2] = ex7[i][0]-ex7[i][1];
 sl_update("ex7_"+(i+1)+"_3",(ex7[i][2]).toLocaleString());

 ex7[i][3] = ex7[i][2] * ex7_eir * 0.5;
 sl_update("ex7_"+(i+1)+"_4",(ex7[i][3]).toLocaleString());

 ex7[i][4] = ex7[i][2] + ex7[i][3];
 sl_update("ex7_"+(i+1)+"_5",(ex7[i][4]).toLocaleString());

 ex7[i+1][0] = ex7[i][4];
 sl_update("ex7_"+(i+2)+"_1",(ex7[i+1][0]).toLocaleString());
}

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
 
