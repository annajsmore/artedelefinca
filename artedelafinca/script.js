
// HONEY
$('#honeybtn').click(function(){ 
  $('#honey').show();
$('#allBar').hide();	
  $('#rice').hide();
  $('#coffee').hide();
  $('#veggies').hide();
  $('#fruit').hide();
 $('#spices_legumes').hide();
	$('#honeyBar').show();
  $('#riceBar').hide();
  $('#coffeeBar').hide();
  $('#vegBar').hide();
  $('#fruitBar').hide();
 $('#spiceBar').hide();
  
});

// RICE
$('#ricebtn').click(function(){ 
	$('#allBar').hide();	
  $('#honey').hide();
  $('#coffee').hide();
  $('#veggies').hide();
  $('#fruit').hide();
 $('#spices_legumes').hide();
  $('#rice').show();
	$('#honeyBar').hide();
  $('#coffeeBar').hide();
  $('#vegBar').hide();
  $('#fruitBar').hide();
 $('#spiceBar').hide();
  $('#riceBar').show();
  
});

// VEGGIES
$('#vegbtn').click(function(){ 
	$('#allBar').hide();	
  $('#honey').hide();
  $('#coffee').hide(); 
  $('#rice').hide();
  $('#fruit').hide();
 $('#spices_legumes').hide();
  $('#veggies').show(); 
	$('#honeyBar').hide();
  $('#coffeeBar').hide(); 
  $('#riceBar').hide();
  $('#fruitBar').hide();
 $('#spiceBar').hide();
  $('#vegBar').show(); 
});

// COFFEE
$('#coffeebtn').click(function(){
	$('#allBar').hide();	
  $('#honey').hide();
  $('#rice').hide();
  $('#veggies').hide(); 
  $('#fruit').hide();
 $('#spices_legumes').hide();
  $('#coffee').show();
	 $('#honeyBar').hide();
  $('#riceBar').hide();
  $('#vegBar').hide(); 
  $('#fruitBar').hide();
 $('#spiceBar').hide();
  $('#coffeeBar').show();
});

// FRUIT
$('#fruitbtn').click(function(){ 
	$('#allBar').hide();	
  $('#honey').hide();
  $('#coffee').hide();
  $('#veggies').hide();
  $('#rice').hide();
 $('#spices_legumes').hide();
  $('#fruit').show();
	$('#honeyBar').hide();
  $('#coffeeBar').hide();
  $('#vegBar').hide();
  $('#riceBar').hide();
 $('#spiceBar').hide();
  $('#fruitBar').show();
});

// SPICE/LEGUMES
$('#spicebtn').click(function(){ 
	$('#allBar').hide();	
  $('#honey').hide();
  $('#coffee').hide();
  $('#veggies').hide();
  $('#fruit').hide();
 $('#rice').hide();
  $('#spices_legumes').show();
	$('#honeyBar').hide();
  $('#coffeeBar').hide();
  $('#vegBar').hide();
  $('#fruitBar').hide();
 $('#riceBar').hide();
  $('#spiceBar').show();
});


