	function factorial(n) {
		var resultado = 1;
		for (var i = 2; i <= n; i++) {
			resultado *= i;
		}
		
	return resultado;
	}

	function factorialrec(n) {
		if(n==1 || n==0){
			return 1;
		}
		else{
			return factorialrec(n-1)*n;
		}
	} 
	function calcular(n){
	
	var text = document.getElementById('Factorial'); 
	text.value = factorial(n);
	
	var text2 = document.getElementById('Factorialrecursivo'); 
	text2.value = factorialrec(n);
	}
	function validate(){
	
		var patt=/^[1-9][0-9]*/;
		var st=document.getElementById('numero');
		var str=st.value;
		
		if(str.match(patt)){
		
			calcular(str.match(patt));
		}else{
		if(str=="0"){
			var text = document.getElementById('Factorial'); 
	text.value = "1";
	
	var text2 = document.getElementById('Factorialrecursivo'); 
	text2.value ="1";
		}else{
			alert("numero incorrecto");
			var text = document.getElementById('Factorial'); 
	text.value = "0";
	
	var text2 = document.getElementById('Factorialrecursivo'); 
	text2.value = "0";
	var text3 = document.getElementById('numero'); 
	text3.value = "0";
	}
		}
	}
	curvyCorners.addEvent(window, 'load', initCorners);

  function initCorners() {
    var settings = {
      tl: { radius: 5 },
      tr: { radius: 15 },
      bl: { radius: 5 },
      br: { radius: 15 },
      antiAlias: true
    }

    /*
    Usage:

    curvyCorners(settingsObj, selectorStr);
    curvyCorners(settingsObj, Obj1[, Obj2[, Obj3[, . . . [, ObjN]]]]);

    selectorStr ::= complexSelector [, complexSelector]...
    complexSelector ::= singleSelector[ singleSelector]
    singleSelector ::= idType | classType
    idType ::= #id
    classType ::= [tagName].className
    tagName ::= div|p|form|blockquote|frameset // others may work
    className : .name
    selector examples:
      #mydiv p.rounded
      #mypara
      .rounded
    */
    curvyCorners(settings, "#myBox");
  }