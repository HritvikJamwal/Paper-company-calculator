var pop_up = document.getElementById('pop-up');
var calculator = document.getElementById('calculator');
var tick = document.getElementsByClassName('tick-selector');
var sheet1 = document.getElementById('sheet-tick1')
var sheet2 = document.getElementById('sheet-tick2')
var sheet_image_box1 = document.getElementById('sheet-image-box1');
var sheet_image_box2 = document.getElementById('sheet-image-box2');
var A4_sheet = document.getElementById('A4-sheet');
var letter_sheet =  document.getElementById('letter-sheet');
var amt_tick1 =document.getElementById('amt-tick1');
var amt_tick2 =document.getElementById('amt-tick2');
var amt_tick3 =document.getElementById('amt-tick3');
var amt_tick4 =document.getElementById('amt-tick4');
var amt_tick5 =document.getElementById('amt-tick5');
var amt_tick6 =document.getElementById('amt-tick6');
var amt_tick7 =document.getElementById('amt-tick7');
var amt_tick8 =document.getElementById('amt-tick8');
var amt_tick9 =document.getElementById('amt-tick9');
var rs1 = document.getElementById('rs1');
var rs2 = document.getElementById('rs2');
var rs3 = document.getElementById('rs3');
var rs4 = document.getElementById('rs4');
var rs5 = document.getElementById('rs5');
var rs6 = document.getElementById('rs6');
var rs7 = document.getElementById('rs7');
var rs8 = document.getElementById('rs8');
var rs9 = document.getElementById('rs9');
var ok_sign = document.createElement('img');
var ok_sign2 = document.createElement('img');
var ok_sign3 = document.createElement('img');
var ok_sign4 = document.createElement('img');
var ok_sign5 = document.createElement('img');

var shipping_img1 = document.createElement('img');
var custom_img = document.createElement('img');
var larr = document.getElementById('left-arrow');
var rarr = document.getElementById('right-arrow');
var amt_form = document.getElementById('amount-form');
var paper_tick1 = document.getElementById('paper-tick1');
var paper_tick2 = document.getElementById('paper-tick2');
var paper_tick3 = document.getElementById('paper-tick3');
var paper_tick4 = document.getElementById('paper-tick4');
var paper_image_box1 = document.getElementById('paper-image-box1');
var paper_image_box2 = document.getElementById('paper-image-box2');
var paper_image_box3 = document.getElementById('paper-image-box3');
var paper_image_box4 = document.getElementById('paper-image-box4');
var paper1 = document.getElementById('paper1');
var paper2 = document.getElementById('paper2');
var paper3 = document.getElementById('paper3');
var paper4 = document.getElementById('paper4');
var binding_tick1 = document.getElementById('binding-tick1');
var binding_tick2 = document.getElementById('binding-tick2');
var binding_image_box1 = document.getElementById('binding-image-box1');
var binding_image_box2 = document.getElementById('binding-image-box2');
var binding1 = document.getElementById('binding1');
var binding2 = document.getElementById('binding2');
var padbinding = document.getElementById('padbinding');
var production= document.getElementById('production');
var shipping_div_tag = document.getElementById('shipping');
var sub_total =document.getElementById('sub-total');
var select_form = document.getElementById('select-form');
var yes = document.getElementById('yes');
var no = document.getElementById('no');
var production_speed = 0;
var custom_design_div = document.getElementById('custom-design-div');
var country = document.getElementById('country');
var shipping_form = document.getElementById('shipping-form');
var total = document.getElementById('total');
ok_sign.src = "ok-24.ico";
ok_sign2.src = "ok-24.ico";
ok_sign3.src = "ok-24.ico";
ok_sign4.src = "ok-24.ico";
ok_sign5.src = "ok-24.ico";

shipping_img1.src = "https://www.printstop.co.in/images/product_icon/3-days11.png";
var binding_charge = 0;
var amt_cost = 0;
var binding_charge_selected =0;
var paper_charge_selected =0;
var custom_design_charge = 0;
var shipping_price = 5000;
function normalize(){
    rs1.style.backgroundColor = "grey";
    rs1.style.transform = "scale(0.838)";
    rs2.style.backgroundColor = "grey";
    rs2.style.transform = "scale(0.838)";
    rs3.style.backgroundColor = "grey";
    rs3.style.transform = "scale(0.838)";
    rs4.style.backgroundColor = "grey";
    rs4.style.transform = "scale(0.838)";
    rs5.style.backgroundColor = "grey";
    rs5.style.transform = "scale(0.838)";
    rs6.style.backgroundColor = "grey";
    rs6.style.transform = "scale(0.838)";
    rs7.style.backgroundColor = "grey";
    rs7.style.transform = "scale(0.838)";
    rs8.style.backgroundColor = "grey";
    rs8.style.transform = "scale(0.838)";
    rs9.style.backgroundColor = "grey";
    rs9.style.transform = "scale(0.838)";
    console.log('normalize');
}

function getTotal(cost1, cost2, cost3, cost4){
    return cost1 + cost2+ cost3 +cost4;
}

sheet1.addEventListener('click', function(){
    
    sheet_image_box1.appendChild(ok_sign);
    ok_sign.style.position = "absolute";
    A4_sheet.style.position = "relative";
    ok_sign.style.left = "72px";
    ok_sign.style.top = "85px";
    larr.style.visibility = "visible";
    rarr.style.visibility = "visible";
    
    
    

});

sheet2.addEventListener('click', function(){
   
    sheet_image_box2.appendChild(ok_sign);
    ok_sign.style.position = "absolute";
    letter_sheet.style.position = "relative";
    ok_sign.style.left = "72px";
    ok_sign.style.top = "85px";
    larr.style.visibility = "hidden";
    rarr.style.visibility = "hidden";
    amt_form.scrollBy(-500, 0);
    

});

amt_tick1.addEventListener('click', function(){
    normalize();
    rs1.style.backgroundColor = "#DA251D";
    rs1.style.transform = "scale(1.2)";
    rs1.appendChild(ok_sign2);
    ok_sign2.style.position = "absolute";
    ok_sign2.style.top = "50px";
    padbinding.innerHTML ="₹50.00"
    binding_charge = 50;
    if(production_speed != 1){
        production_speed =1;
        production.innerHTML = "Production speed: " + production_speed;
    }
    amt_cost = 300;
    sub_total.innerHTML = getTotal(amt_cost, binding_charge_selected, paper_charge_selected, custom_design_charge);

    
});
amt_tick2.addEventListener('click', function(){
    normalize();
    rs2.style.backgroundColor = "#DA251D";
    rs2.style.transform = "scale(1.2)";
    rs2.appendChild(ok_sign2);
    ok_sign2.style.position = "absolute";
    ok_sign2.style.top = "50px";
    padbinding.innerHTML ="₹100.00"
    binding_charge = 100;
    if(production_speed != 1){
        production_speed =1;
        production.innerHTML = "Production speed: " + production_speed;
    }
    amt_cost = 500;
     sub_total.innerHTML = getTotal(amt_cost, binding_charge_selected, paper_charge_selected, custom_design_charge);

});
amt_tick3.addEventListener('click', function(){
    normalize();
    rs3.style.backgroundColor = "#DA251D";
    rs3.style.transform = "scale(1.2)";
    rs3.appendChild(ok_sign2);
    ok_sign2.style.position = "absolute";
    ok_sign2.style.top = "50px";
    padbinding.innerHTML ="₹150.00"
    binding_charge = 150;
    if(production_speed != 1){
        production_speed =1;
        production.innerHTML = "Production speed: " + production_speed;
    }
    amt_cost = 950;
     sub_total.innerHTML = getTotal(amt_cost, binding_charge_selected, paper_charge_selected, custom_design_charge);
    
});
amt_tick4.addEventListener('click', function(){
    normalize();
    rs4.style.backgroundColor = "#DA251D";
    rs4.style.transform = "scale(1.2)";
    rs4.appendChild(ok_sign2);
    ok_sign2.style.position = "absolute";
    ok_sign2.style.top = "50px";
    padbinding.innerHTML ="₹200.00"
    binding_charge = 200;
    if(production_speed != 1){
        production_speed =1;
        production.innerHTML = "Production speed: " + production_speed;
    }
    amt_cost = 1750;
     sub_total.innerHTML = getTotal(amt_cost, binding_charge_selected, paper_charge_selected, custom_design_charge);

    
});
amt_tick5.addEventListener('click', function(){
    normalize();
    rs5.style.backgroundColor = "#DA251D";
    rs5.style.transform = "scale(1.2)";
    rs5.appendChild(ok_sign2);
    ok_sign2.style.position = "absolute";
    ok_sign2.style.top = "50px";
    padbinding.innerHTML ="₹300.00"
    binding_charge = 300;
    if(production_speed != 2){
        production_speed =2;
        production.innerHTML = "Production speed: " + production_speed;
    }
    amt_cost = 3800;
     sub_total.innerHTML = getTotal(amt_cost, binding_charge_selected, paper_charge_selected, custom_design_charge);

    
});
amt_tick6.addEventListener('click', function(){
    normalize();
    rs6.style.backgroundColor = "#DA251D";
    rs6.style.transform = "scale(1.2)";
    rs6.appendChild(ok_sign2);
    ok_sign2.style.position = "absolute";
    ok_sign2.style.top = "50px";
    padbinding.innerHTML ="₹450.00"
    binding_charge = 450;
    if(production_speed != 2){
        production_speed =2;
        production.innerHTML = "Production speed: " + production_speed;
    }
    amt_cost = 7500;
     sub_total.innerHTML = getTotal(amt_cost, binding_charge_selected, paper_charge_selected, custom_design_charge);
    
    
});
amt_tick7.addEventListener('click', function(){
    normalize();
    rs7.style.backgroundColor = "#DA251D";
    rs7.style.transform = "scale(1.2)";
    rs7.appendChild(ok_sign2);
    ok_sign2.style.position = "absolute";
    ok_sign2.style.top = "50px";
    padbinding.innerHTML ="₹800.00"
    binding_charge = 800;
    if(production_speed != 2){
        production_speed =2;
        production.innerHTML = "Production speed: " + production_speed;
    }
    amt_cost = 10000;
     sub_total.innerHTML = getTotal(amt_cost, binding_charge_selected, paper_charge_selected, custom_design_charge);
    
    
});
amt_tick8.addEventListener('click', function(){
    normalize();
    rs8.style.backgroundColor = "#DA251D";
    rs8.style.transform = "scale(1.2)";
    rs8.appendChild(ok_sign2);
    ok_sign2.style.position = "absolute";
    ok_sign2.style.top = "50px";
    padbinding.innerHTML ="₹1200.00"
    binding_charge = 1200;
    if(production_speed != 2){
        production_speed =2;
        production.innerHTML = "Production speed: " + production_speed;
    }
    amt_cost = 12000;
     sub_total.innerHTML = getTotal(amt_cost, binding_charge_selected, paper_charge_selected, custom_design_charge);
    
    
});
amt_tick9.addEventListener('click', function(){
    normalize();
    rs9.style.backgroundColor = "#DA251D";
    rs9.style.transform = "scale(1.2)";
    rs9.appendChild(ok_sign2);
    ok_sign2.style.position = "absolute";
    ok_sign2.style.top = "50px";
    padbinding.innerHTML ="₹2000.00"
    binding_charge = 2000;
    if(production_speed != 2){
        production_speed =2;
        production.innerHTML = "Production speed: " + production_speed;
    }
    amt_cost = 15000;
     sub_total.innerHTML = getTotal(amt_cost, binding_charge_selected, paper_charge_selected, custom_design_charge);
    
    
});

larr.addEventListener('click', function(){
    amt_form.scrollBy(-92, 0);
});

rarr.addEventListener('click', function(){
    amt_form.scrollBy(92, 0);
});

paper_tick1.addEventListener('click', function(){
    
    paper_image_box1.appendChild(ok_sign3);
    ok_sign3.style.position = "absolute";
    paper1.style.position = "relative";
    ok_sign3.style.left = "56px";
    ok_sign3.style.top = "38px";
    paper_charge_selected = 0;
     sub_total.innerHTML = getTotal(amt_cost, binding_charge_selected, paper_charge_selected, custom_design_charge);
    

});

paper_tick2.addEventListener('click', function(){
    
    paper_image_box2.appendChild(ok_sign3);
    ok_sign3.style.position = "absolute";
    paper2.style.position = "relative";
    ok_sign3.style.left = "56px";
    ok_sign3.style.top = "38px";
    paper_charge_selected = 150;
     sub_total.innerHTML = getTotal(amt_cost, binding_charge_selected, paper_charge_selected, custom_design_charge);
    
    
    

});

paper_tick3.addEventListener('click', function(){
    
    paper_image_box3.appendChild(ok_sign3);
    ok_sign3.style.position = "absolute";
    paper3.style.position = "relative";
    ok_sign3.style.left = "56px";
    ok_sign3.style.top = "38px";
    paper_charge_selected = 150;
     sub_total.innerHTML = getTotal(amt_cost, binding_charge_selected, paper_charge_selected, custom_design_charge);
    
    
    

});

paper_tick4.addEventListener('click', function(){
    
    paper_image_box4.appendChild(ok_sign3);
    ok_sign3.style.position = "absolute";
    paper4.style.position = "relative";
    ok_sign3.style.left = "56px";
    ok_sign3.style.top = "38px";
    paper_charge_selected = 100;
     sub_total.innerHTML = getTotal(amt_cost, binding_charge_selected, paper_charge_selected, custom_design_charge);
    
    
    
    

});

binding_tick1.addEventListener('click', function(){
    
    binding_image_box1.appendChild(ok_sign4);
    ok_sign4.style.position = "absolute";
    binding1.style.position = "relative";
    ok_sign4.style.left = "60px";
    ok_sign4.style.top = "40px";
    binding_charge_selected = 0;
     sub_total.innerHTML = getTotal(amt_cost, binding_charge_selected, paper_charge_selected, custom_design_charge);
    

});

binding_tick2.addEventListener('click', function(){
    
    binding_image_box2.appendChild(ok_sign4);
    ok_sign4.style.position = "absolute";
    binding2.style.position = "relative";
    ok_sign4.style.left = "60px";
    ok_sign4.style.top = "40px";
    binding_charge_selected = binding_charge;
     sub_total.innerHTML = getTotal(amt_cost, binding_charge_selected, paper_charge_selected, custom_design_charge);
    

});

select_form.addEventListener('change', function(){
    if(select_form.value == 1){
        custom_design_charge = 900;
        sub_total.innerHTML = getTotal(amt_cost, binding_charge_selected, paper_charge_selected, custom_design_charge);
        custom_design_div.style.visibility = "visible";
        custom_design_div.style.transform = "scale(1)";
        custom_design_div.style.height = "fit-content";

        
    }
    else if(select_form.value == 0){
        custom_design_charge = 0;
         sub_total.innerHTML = getTotal(amt_cost, binding_charge_selected, paper_charge_selected, custom_design_charge);
         custom_design_div.style.visibility = "hidden";
         custom_design_div.style.transform= "scale(0.3)";
         custom_design_div.style.height = "40px";
        }
});

shipping_form.addEventListener('change', function(){
    if(shipping_form.value == 1){
    total.innerHTML = 5000+ getTotal(amt_cost, binding_charge_selected, paper_charge_selected, custom_design_charge);
    }
    else if(shipping_form.value ==2){
    total.innerHTML = 10000+ getTotal(amt_cost, binding_charge_selected, paper_charge_selected, custom_design_charge);

    }
});

pop_up.addEventListener('click', function(){

    pop_up.style.visibility = "hidden";
    calculator.style.visibility = "visible";
})