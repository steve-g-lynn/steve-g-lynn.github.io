/*** SET INPUT NUMBERS ***/

/* random numbers to generate algorithmic variations */
let a1=getRndInteger(100,999);
let b1=getRndInteger(100,999);
let c1=getRndInteger(100,999);

/*-- company name */
let coname_list=["Cheong","Chan","Tan","Leong","Keung","Yeung","Ho"];
let coname=coname_list[(Math.floor(Math.random() * coname_list.length))];
sl_update('coname',coname+" Co");

/*-- net income 2020 */
let ni20= 698791+(a1+b1);
sl_update('ni20',ni20);

/*-- ordinary shares in issue at 1/1/2020 */
let ord_issued=getRndInteger(2,4);
sl_update('ord_issued',ord_issued);

/*-- treasury shares at 1/1/2020 */
let treas=1+getRndInteger(1,5)/10;
sl_update('treas',treas);

/*-- share price at 1/1/2020 */
let prc_1_1=getRndInteger(80,90)/100;
sl_update('prc_1_1',prc_1_1);

/** preference shares at 1/1/2020 **/
/* number */
let pref=1+getRndInteger(1,4)/10;
sl_update('pref',pref);

/*rate */
let pref_rate=getRndInteger(2,7);
sl_update('pref_rate',pref_rate);

/*pref_par nominal value per share*/
let pref_par=1+getRndInteger(1,5)/10;
sl_update('pref_par',pref_par);

/*pref_conv conversion ratio*/
let pref_conv=getRndInteger(1,3);
sl_update('pref_conv',pref_conv);

/**FEB **/
/*ts reissued */
let ts_1_2=61000+c1;
sl_update('ts_1_2',ts_1_2);

/*property value received in exchange */
let prop_val_1_2=54290+a1;
sl_update('prop_val_1_2',prop_val_1_2);

let prc_1_2=(prop_val_1_2/ts_1_2);
sl_update('prc_1_2',prc_1_2.toFixed(4));

/**MAR **/
/*ts reissued at 1/3*/
let ts_1_3=88908+(b1%83);
sl_update('ts_1_3',ts_1_3);

/* share price at 1/3*/
let prc_1_3=getRndInteger(86,90)/100;
sl_update('prc_1_3',prc_1_3);

/**APRIL **/
/* reverse split split_orig shares for split_new shares*/
let orig_choice=[5,10,20,40,100];
let split_orig=orig_choice[(Math.floor(Math.random() * orig_choice.length))]
sl_update('split_orig',split_orig);

let split_new=split_orig-getRndInteger(1,5); // no of new shares
sl_update('split_new',split_new);

/*price*/
let prc_1_4=getRndInteger(84,87)/100;
sl_update('prc_1_4',prc_1_4);

/** MAY **/
/* rights issue */
let prc_1_5=(getRndInteger(85,89)/100*split_orig/split_new).toFixed(2);
sl_update('prc_1_5',prc_1_5);

let rights_no=50000-c1;
sl_update('rights_no',rights_no);

let rights_strike=(prc_1_5-getRndInteger(1,10)/100).toFixed(2);
sl_update('rights_strike',rights_strike);

/** JUN **/
let ts_1_6=33000-a1;
sl_update('ts_1_6',ts_1_6);

let prc_1_6=(getRndInteger(83,92)/100*split_orig/split_new).toFixed(2)
sl_update('prc_1_6',prc_1_6);

/** DEC **/
let dps=getRndInteger(1,4)/100;
sl_update('dps',dps);

let scrip_no=136000-b1;
sl_update('scrip_no',scrip_no);

let prc_1_12=(getRndInteger(82,103)/100*split_orig/split_new).toFixed(2)
sl_update('prc_1_12',prc_1_12);

/** B/S DATE **/

let eso_no=getRndInteger(6,9);
sl_update('eso_no',eso_no);

let eso_strike=getRndInteger(5,11)/10;
sl_update('eso_strike',eso_strike);

let cb_face=getRndInteger(1,4);
sl_update('cb_face',cb_face);

let cb_shares=getRndInteger(1,3);
sl_update('cb_shares',cb_shares);

let cb_ca=cb_face*1000000-c1-a1;
sl_update('cb_ca',cb_ca);

let cb_eir=3+getRndInteger(1,4)/10;
sl_update('cb_eir',cb_eir);

let taxrates=[16.5,17,26];
let taxrate=taxrates[(Math.floor(Math.random() * taxrates.length))]
sl_update('taxrate',taxrate);

/** WORKINGS **/

/* bonus factor for reverse split */

let split_factor = (split_new/split_orig);
sl_update('split_factor',split_factor.toFixed(4));

/** rights issue **/

/* theoretical ex-rights price */

let num_shares_1_5=((ord_issued*1000000-treas*1000000+ts_1_2+ts_1_3)*split_factor);
sl_update('num_shares_1_5',num_shares_1_5);

let ex_rights_price=((num_shares_1_5*prc_1_5+rights_no*rights_strike)/(num_shares_1_5+rights_no));
sl_update('ex_rights_price',ex_rights_price.toFixed(4));

/* rights bonus factor */

let rights_bonus_factor=(prc_1_5/ex_rights_price);
sl_update("rights_bonus_factor",rights_bonus_factor.toFixed(4));

/* equivalent number of shares issued at full price */

let equiv_no=(rights_no*rights_strike/ex_rights_price);
sl_update("equiv_no",Math.round(equiv_no));

/** Average share price **/

let avg_price=(
    (prc_1_1+Number(prc_1_2)+prc_1_3+prc_1_4)
    /split_factor
    /rights_bonus_factor
    +Number(ex_rights_price)
    +Number(prc_1_6)*6
    +Number(prc_1_12)
    ) / 12 ;
sl_update("avg_price",avg_price);

/** BASIC EPS NUMERATOR **/

let num_basic =
    ni20 - pref*1000000*pref_rate/100*pref_par;
sl_update('num_basic',Math.round(num_basic));

/** BASIC EPS DENOMINATOR **/

let den_basic =
   (ord_issued - treas )*1000000;
den_basic += ts_1_2 * 11/12;
den_basic += ts_1_3 * 10/12;
den_basic *= split_factor;
den_basic *= rights_bonus_factor;
//
den_basic += equiv_no * 8/12;
den_basic += ts_1_6 * 7/12;
den_basic += ( (dps * scrip_no) / prc_1_12 * 1/12 ); 
//
sl_update('den_basic',Math.round(den_basic));     
    
/** BASIC EPS **/

let basic_eps =
 num_basic / den_basic;
sl_update('basic_eps',basic_eps.toFixed(4));

/*** DILUTED EPS ***/

/* EPIS */

let cb_incr_den=cb_shares*cb_face*1000000;
let cb_incr_num=(cb_eir/100*cb_ca)*(1-taxrate/100);
let cb_epis=cb_incr_num / cb_incr_den;
sl_update("cb_epis",cb_epis.toFixed(6));

let pref_incr_den=pref*1000000*pref_conv;
let pref_incr_num=pref*1000000*pref_par*pref_rate/100;
let pref_epis=pref_incr_num / pref_incr_den;
sl_update("pref_epis",pref_epis.toFixed(6));

let eso_proceeds=eso_no*eso_strike*1000000;
sl_update("eso_proceeds",eso_proceeds);

let eso_ts=eso_proceeds / avg_price;
sl_update("eso_ts",eso_ts);

let eso_incr_den=eso_no*1000000-eso_ts;
sl_update("eso_incr_den",eso_incr_den);

/* BUILD DILUTED EPS TABLE */

if (avg_price >= eso_strike) {
 item_1='ESO';
 if (cb_epis < pref_epis){
  item_2='CB';
  item_3='CPS';
 }
 else {
  item_2='CPS';
  item_3='CB';
 }
}
else {
 item_3='ESO';
 if (cb_epis < pref_epis){
  item_1='CB';
  item_2='CPS';
 }
 else {
  item_1='CPS';
  item_2='CB';
 }
}
sl_update('item_1',item_1);
sl_update('item_2',item_2);
sl_update('item_3',item_3);

/* ITEM 1 */

switch( item_1 ) {
 case 'ESO':
  item_1_incr_num=0;
  item_1_incr_den=eso_incr_den;
  break;
 case 'CB':
  item_1_incr_num=cb_incr_num;
  item_1_incr_den=cb_incr_den;
  break;
 case 'CPS':
  item_1_incr_num=pref_incr_num;
  item_1_incr_den=pref_incr_den;
  break;
 default:
}

sl_update('item_1_incr_num',Math.round(item_1_incr_num));
sl_update('item_1_incr_den',Math.round(item_1_incr_den));

let num_total_1 = num_basic + item_1_incr_num;
let den_total_1 = den_basic + item_1_incr_den;
let ratio_1 = num_total_1 / den_total_1;
let dilutive_1=(
 (ratio_1 < basic_eps) ?
 "dilutive" :
 "antidilutive"
);

let diluted_eps=(
 (ratio_1 < basic_eps) ?
 ratio_1 :
 basic_eps
);

sl_update('num_total_1',Math.round(num_total_1));
sl_update('den_total_1',Math.round(den_total_1));
sl_update('ratio_1',ratio_1.toFixed(4));
sl_update('dilutive_1',dilutive_1);


/* ITEM 2 */

switch( item_2 ) {
 case 'CB':
  item_2_incr_num=cb_incr_num;
  item_2_incr_den=cb_incr_den;
  break;
 case 'CPS':
  item_2_incr_num=pref_incr_num;
  item_2_incr_den=pref_incr_den;
  break;
 default:
}

sl_update('item_2_incr_num',Math.round(item_2_incr_num));
sl_update('item_2_incr_den',Math.round(item_2_incr_den));

let num_total_2 = num_total_1 + item_2_incr_num;
let den_total_2 = den_total_1 + item_2_incr_den;
let ratio_2 = num_total_2 / den_total_2;
let dilutive_2=(
 (ratio_2 < diluted_eps) ?
 "dilutive" :
 "antidilutive"
);

diluted_eps=(
 (ratio_2 < diluted_eps) ?
 ratio_2 :
 diluted_eps
);

sl_update('num_total_2',Math.round(num_total_2));
sl_update('den_total_2',Math.round(den_total_2));
sl_update('ratio_2',ratio_2.toFixed(4));
sl_update('dilutive_2',dilutive_2);

/* ITEM 3 */

switch( item_3 ) {
 case 'CB':
  item_3_incr_num=cb_incr_num;
  item_3_incr_den=cb_incr_den;
  break;
 case 'CPS':
  item_3_incr_num=pref_incr_num;
  item_3_incr_den=pref_incr_den;
  break;
 case 'ESO':
  item_3_incr_num=0;
  item_3_incr_den=eso_incr_den;
  break;
 default:
}

sl_update('item_3_incr_num',Math.round(item_3_incr_num));
sl_update('item_3_incr_den',Math.round(item_3_incr_den));

let num_total_3 = num_total_2 + item_3_incr_num;
let den_total_3 = den_total_2 + item_3_incr_den;
let ratio_3 = num_total_3 / den_total_3;
let dilutive_3=(
 (ratio_3 < diluted_eps) ?
 "dilutive" :
 "antidilutive"
);

diluted_eps=(
 (ratio_3 < diluted_eps) ?
 ratio_3 :
 diluted_eps
);

sl_update('num_total_3',Math.round(num_total_3));
sl_update('den_total_3',Math.round(den_total_3));
sl_update('ratio_3',ratio_3.toFixed(4));
sl_update('dilutive_3',dilutive_3);
sl_update('diluted_eps',diluted_eps.toFixed(4));


/** END OF MAIN SCRIPT **/

/*** SUPPORTING FUNCTIONS ***/

function sl_update(sl_item,sl_value) {
 let sl_list=document.querySelectorAll('span.'+sl_item);
 for (let i of sl_list) {
  i.innerText=sl_value.toLocaleString();
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
 
