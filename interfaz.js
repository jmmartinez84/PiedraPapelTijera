$(document).ready(function(){
	$("canvas.usuario").hover(function(){
	if(location.href.indexOf("#btnsUsuario")==-1)
	{
		borrarCanvas(this);
		crearCirculoHover(this,true);
		if(this.id.indexOf("Piedra")> -1)
		 	crearPiedra(this,"silver","black");
		else if(this.id.indexOf("Papel")>-1)
		 	crearPapel(this,"silver","silver");
		else
			crearTijeras(this,"silver","#163f3d");
	}		
	},
	function(){
	if(location.href.indexOf("#btnsUsuario")==-1)
	{
		borrarCanvas(this);
		crearCirucloUsuario(this,true);
		if(this.id.indexOf("Piedra")> -1)
		 	crearPiedra(this,"silver","black");
		else if(this.id.indexOf("Papel")>-1)
		 	crearPapel(this,"silver","silver");
		else
			crearTijeras(this,"silver","#163f3d");
	}
	});
});
function presionaBoton(elemento)
{
    var thisCanvas = $(elemento).find("canvas")[0];
	borrarCanvas(thisCanvas);
	crearCirculoPresionado(thisCanvas);
	if(thisCanvas.id.indexOf("Piedra")> -1)
	{
		 crearPiedra(thisCanvas,"silver","black");
		 var canvasPapel = document.getElementById("canvasPapel");
		 borrarCanvas(canvasPapel);
		crearCirucloUsuario(canvasPapel);
		crearPapel(canvasPapel,"silver");
		
		var canvasTijeras = document.getElementById("canvasTijeras");
		borrarCanvas(canvasTijeras);
		crearCirucloUsuario(canvasTijeras);
		crearTijeras(canvasTijeras,"silver","#163f3d");
	}
	else if(thisCanvas.id.indexOf("Papel")>-1)
	{
		 crearPapel(thisCanvas,"silver","#163f3d");
		 var canvasPiedra = document.getElementById("canvasPiedra");
		 borrarCanvas(canvasPiedra);
		crearCirucloUsuario(canvasPiedra);
		crearPiedra(canvasPiedra,"silver","black");
		
		var canvasTijeras = document.getElementById("canvasTijeras");
		borrarCanvas(canvasTijeras);
		crearCirucloUsuario(canvasTijeras);
		crearTijeras(canvasTijeras,"silver","#163f3d");
	}
	else
	{
		crearTijeras(thisCanvas,"silver","#163f3d");
		 var canvasPapel = document.getElementById("canvasPapel");
		 borrarCanvas(canvasPapel);
		crearCirucloUsuario(canvasPapel);
		crearPapel(canvasPapel,"silver");
		
		 var canvasPiedra = document.getElementById("canvasPiedra");
		 borrarCanvas(canvasPiedra);
		crearCirucloUsuario(canvasPiedra);
		crearPiedra(canvasPiedra,"silver","black");
		
	}
}

function crearPiedra(canvas,colorFondo,colorBorde)
{
	var x =canvas.width/146;
	var context = canvas.getContext("2d");
	context.beginPath();
	
	context.moveTo(63.4639*x,70.0742*x);
	context.bezierCurveTo(66.0499*x,69.7192*x,78.4599*x,65.8882*x,78.4599*x,65.8882*x);
	context.lineTo(64.1549*x,72.4162*x);
	context.lineTo(57.4369*x,78.7662*x);
	context.bezierCurveTo(57.4369*x,78.7662*x,60.8779*x,70.4292*x,63.4639*x,70.0742*x);
	context.closePath();
	
	context.moveTo(98.1099*x,74.8392*x);
	context.bezierCurveTo(98.1099*x,74.8392*x,99.9519*x,77.9412*x,97.0809*x,80.1722*x);
	context.bezierCurveTo(94.2099*x,82.4002*x,87.5319*x,87.9382*x,87.5319*x,87.9382*x);
	context.bezierCurveTo(87.5319*x,87.9382*x,98.1709*x,78.4742*x,98.1099*x,74.8392*x);
	context.closePath();
	
	context.moveTo(42.5439*x,83.7132*x);
	context.bezierCurveTo(46.9119*x,87.9842*x,59.0319*x,100.6572*x,66.6589*x,101.1652*x);
	context.bezierCurveTo(74.2849*x,101.6722*x,81.5209*x,99.2082*x,86.9369*x,95.9922*x);
	context.bezierCurveTo(92.3509*x,92.7752*x,105.0409*x,81.2132*x,105.0409*x,81.2132*x);
	context.bezierCurveTo(108.3729*x,76.0292*x,97.9549*x,58.1542*x,93.5969*x,51.5862*x);
	context.bezierCurveTo(89.2389*x,45.0172*x,65.8749*x,46.1302*x,60.9579*x,47.6022*x);
	context.bezierCurveTo(50.2729*x,50.8032*x,38.1739*x,79.4382*x,42.5439*x,83.7132*x);
	context.closePath();
	
	context.fillStyle =colorFondo;
	context.fill();
	context.strokeStyle = colorBorde;
	context.lineWidth = 1;
	context.shadowBlur = 0;
	context.stroke();
}
function crearPapel(canvas,colorFondo, colorBorde)
{
		var x =canvas.width/146;
		var context = canvas.getContext("2d");
				context.lineWidth = 0;
		context.beginPath();
		context.moveTo(77.4834*x,103.502*x);
		context.bezierCurveTo(77.5224*x,103.471*x,81.2574*x,100.423*x,81.3614*x,96.396*x);
		context.bezierCurveTo(81.5174*x,90.318*x,80.7904*x,86.926*x,80.7834*x,86.895*x);
		context.lineTo(80.1264*x,84.074*x);
		context.lineTo(82.7674*x,85.264*x);
		context.bezierCurveTo(82.9274*x,85.32*x,85.0084*x,86.022*x,90.4194*x,86.022*x);
		context.bezierCurveTo(95.6914*x,86.022*x,98.2764*x,82.813*x,98.4124*x,82.648*x);
		context.lineTo(99.5004*x,81.099*x);
		context.lineTo(100.5004*x,38.5*x);
		context.lineTo(51.5004*x,38.5*x);
		context.lineTo(51.5004*x,105.508*x);
		context.lineTo(75.9884*x,104.508*x);
		context.lineTo(77.4834*x,103.502*x);

		context.moveTo(80.2504*x,104.508*x);
		context.bezierCurveTo(80.2504*x,104.508*x,83.7074*x,102.328*x,83.8304*x,97.556*x)
		context.bezierCurveTo(83.9934*x,91.189*x,83.2174*x,87.642*x,83.2174*x,87.642*x);
		context.bezierCurveTo(83.2174*x,87.642*x,85.2984*x,88.499*x,91.4194*x,88.499*x);
		context.bezierCurveTo(97.5384*x,88.499*x,99.5004*x,84.758*x,99.5004*x,84.758*x);
		context.bezierCurveTo(99.5004*x,84.758*x,97.9964*x,97.653*x,80.2504*x,104.508*x);
		
		context.closePath();
		//context.strokeStyle = colorBorde;
		context.fillStyle = colorFondo;
		context.fill();		
		context.shadowBlur =0;
		//context.stroke();
}
function crearTijeras(canvas,colorFondo,colorBorde)
{
	var x= canvas.width/146;
	var context = canvas.getContext("2d");
	context.beginPath();
	
	context.moveTo(94.4262*x,104.7856*x);
	context.bezierCurveTo(94.6312*x,107.9066*x,93.1682*x,112.2076*x,89.6672*x,112.4036*x);
	context.bezierCurveTo(86.1662*x,112.5976*x,83.4242*x,108.4986*x,83.2192*x,105.3786*x);
	context.bezierCurveTo(83.0132*x,102.2566*x,84.5702*x,98.0716*x,88.0722*x,97.8756*x);
	context.bezierCurveTo(91.5732*x,97.6806*x,94.2212*x,101.6636*x,94.4262*x,104.7856*x);
	
	context.moveTo(50.6172*x,104.1396*x);
	context.bezierCurveTo(50.2452*x,107.2436*x,51.4772*x,111.6186*x,54.9632*x,111.9966*x);
	context.bezierCurveTo(58.4492*x,112.3776*x,61.4062*x,108.4316*x,61.7792*x,105.3256*x);
	context.bezierCurveTo(62.1502*x,102.2196*x,60.8182*x,97.9576*x,57.3322*x,97.5766*x);
	context.bezierCurveTo(53.8462*x,97.1976*x,50.9882*x,101.0336*x,50.6172*x,104.1396*x);
	
	context.moveTo(73.9452*x,79.5856*x);
	context.bezierCurveTo(73.5842*x,80.1546*x,72.8672*x,80.4166*x,72.2072*x,80.1806*x);
	context.bezierCurveTo(71.5472*x,79.9436*x,71.1612*x,79.2856*x,71.2442*x,78.6176*x);
	
	context.moveTo(73.2012*x,77.4106*x);
	context.bezierCurveTo(73.8612*x,77.6476*x,74.2472*x,78.3066*x,74.1662*x,78.9746*x);
	context.lineTo(71.4632*x,78.0046*x);
	context.bezierCurveTo(71.8242*x,77.4376*x,72.5412*x,77.1736*x,73.2012*x,77.4106*x);
	
	
	
	context.moveTo(76.6512*x,77.4686*x);
	context.lineTo(86.6702*x,46.3426*x);
	context.bezierCurveTo(87.7482*x,42.9896*x,88.4102*x,38.4436*x,87.6292*x,33.8966*x);
	context.lineTo(87.1152*x,30.8996*x);
	context.bezierCurveTo(84.1022*x,38.1526*x,77.4982*x,58.4216*x,72.6992*x,72.5446*x);
	context.bezierCurveTo(68.5842*x,58.6516*x,62.0122*x,37.6626*x,58.9332*x,30.7116*x);
	context.lineTo(58.4742*x,34.0596*x);
	context.bezierCurveTo(57.9982*x,37.5356*x,58.2962*x,40.6576*x,58.9372*x,42.9266*x);
	context.lineTo(68.6712*x,77.4246*x);
	context.lineTo(69.1892*x,79.2446*x);
	context.lineTo(67.9032*x,83.4516*x);
	context.bezierCurveTo(66.2872*x,90.1046*x,65.8082*x,85.3686*x,62.3122*x,97.6166*x);
	context.bezierCurveTo(62.1062*x,98.3386*x,62.0342*x,98.6056*x,61.8402*x,98.6886*x);
	context.bezierCurveTo(61.6462*x,98.7726*x,61.4652*x,98.6296*x,61.2872*x,98.4466*x);
	context.bezierCurveTo(61.2632*x,98.4206*x,61.2402*x,98.3946*x,61.2162*x,98.3686*x);
	context.lineTo(61.2092*x,98.3626*x);
	context.bezierCurveTo(59.7602*x,96.8206*x,58.3002*x,95.9306*x,56.0052*x,96.1876*x);
	context.bezierCurveTo(51.4412*x,96.6996*x,48.3572*x,101.6326*x,48.6332*x,105.7886*x);
	context.bezierCurveTo(48.9102*x,109.9866*x,52.0942*x,114.3466*x,56.6582*x,113.8346*x);
	context.bezierCurveTo(57.9712*x,113.6886*x,59.3622*x,113.1716*x,60.3672*x,112.3916*x);
	context.lineTo(60.3592*x,112.4066*x);
	context.bezierCurveTo(60.3592*x,112.4066*x,62.7932*x,111.1976*x,62.8862*x,110.9256*x);
	context.lineTo(63.1212*x,110.2346*x);
	context.bezierCurveTo(63.1522*x,110.1416*x,63.0042*x,109.7356*x,62.9952*x,109.5986*x);
	context.bezierCurveTo(62.9662*x,109.1506*x,63.3592*x,108.4206*x,63.4632*x,107.8216*x);
	context.bezierCurveTo(63.9612*x,104.9316*x,62.9382*x,102.5606*x,63.8302*x,99.8046*x);
	context.bezierCurveTo(66.4972*x,91.5636*x,69.9952*x,89.0486*x,72.6382*x,86.8976*x);
	context.bezierCurveTo(74.1072*x,88.0226*x,75.8622*x,89.2416*x,77.3942*x,91.4016*x);
	context.bezierCurveTo(78.4412*x,92.8766*x,79.1892*x,94.3466*x,79.8872*x,95.9966*x);
	context.bezierCurveTo(80.3782*x,97.1616*x,80.8522*x,98.4806*x,81.3032*x,99.9856*x);
	context.bezierCurveTo(82.1322*x,102.7596*x,81.0562*x,105.1086*x,81.4902*x,108.0086*x);
	context.bezierCurveTo(81.5792*x,108.6106*x,81.9312*x,109.3166*x,81.8922*x,109.7646*x);
	context.bezierCurveTo(81.8812*x,109.9006*x,81.7602*x,110.2806*x,81.7842*x,110.3746*x);
	context.lineTo(81.9632*x,111.0846*x);
	context.bezierCurveTo(82.0332*x,111.3646*x,84.4892*x,112.6616*x,84.4892*x,112.6616*x);
	context.lineTo(84.4802*x,112.6476*x);
	context.bezierCurveTo(85.4672*x,113.4506*x,86.8602*x,114.0536*x,88.1692*x,114.2306*x);
	context.bezierCurveTo(92.7212*x,114.8446*x,96.0492*x,110.5056*x,96.3612*x,106.3116*x);
	context.bezierCurveTo(96.6682*x,102.2096*x,94.0732*x,97.1606*x,89.5212*x,96.5456*x);
	context.bezierCurveTo(87.2322*x,96.2376*x,85.4382*x,97.0946*x,83.9552*x,98.6026*x);
	context.lineTo(83.9492*x,98.6096*x);
	context.bezierCurveTo(83.9242*x,98.6336*x,83.8992*x,98.6596*x,83.8752*x,98.6856*x);
	context.bezierCurveTo(83.6932*x,98.8646*x,83.5102*x,99.0016*x,83.3162*x,98.9146*x);
	context.bezierCurveTo(83.1252*x,98.8266*x,83.0582*x,98.5586*x,82.8682*x,97.8296*x);
	context.bezierCurveTo(82.5152*x,96.4836*x,82.1952*x,95.3396*x,81.9022*x,94.3636*x);
	context.bezierCurveTo(81.5192*x,93.0876*x,81.1192*x,91.8896*x,80.6212*x,90.6536*x);
	context.bezierCurveTo(78.9212*x,86.4416*x,78.0252*x,86.8356*x,76.9082*x,81.9636*x);
	context.lineTo(76.1342*x,79.1966*x);
	context.closePath();
	context.fillStyle = colorFondo;
	context.shadowBlur = 0;
	context.strokeStyle= colorBorde;
	context.fill();	
	context.lineWidth = 1;
	context.shadowBlur = 0;
	context.stroke();
}
function crearCirucloCPU(canvas)
{
	var context = canvas.getContext("2d");
	var	centerX = canvas.width/2;
	var	centerY = canvas.height/2;
	var radio =60*canvas.width/146;
	var grd = context.createRadialGradient(centerX, centerY, 0, centerX, centerY, radio);
	grd.addColorStop(0, "#191d1d"); 
    grd.addColorStop(1, "#1c2120");
    var colorBorde = "#d4d4d4";
	crearCirculo(canvas,grd,radio,colorBorde,centerX,centerY,true);
}
function crearCirucloUsuario(canvas,shadow)
{
	var context = canvas.getContext("2d");
	var	centerX = canvas.width/2;
	var	centerY = canvas.height/2;
	var radio =60*canvas.width/146;
	var grd = context.createRadialGradient(centerX, centerY, 0, centerX, centerY, 60*canvas.width/146);
    grd.addColorStop(0, "#163f3d"); 
    grd.addColorStop(1, "#103432");
    var colorBorde = "#d4d4d4";
    crearCirculo(canvas,grd,radio,colorBorde,centerX,centerY,true,1);
    
}
function crearCirculoHover(canvas,entrada)
{
	var context = canvas.getContext("2d");
	var	centerX = canvas.width/2;
	var	centerY = canvas.height/2;
	var radio =60*canvas.width/146;
	var grd = context.createRadialGradient(centerX, centerY, 0, centerX, centerY, 60*canvas.width/146);
    grd.addColorStop(0, "#163f3d"); 
    grd.addColorStop(1, "#103432");
    if(entrada)
    {
    	var colorBorde = "#a5af31";
    	var lineWidth = 5*canvas.width/146;
    }
    else
    {
    	var colorBorde = "#d4d4d4";
    	var lineWidth = 1;
    }
	crearCirculo(canvas,grd,radio,colorBorde,centerX,centerY,false,lineWidth);
}
function crearCirculoPresionado(canvas)
{
	var context = canvas.getContext("2d");
	var	centerX = canvas.width/2;
	var	centerY = canvas.height/2;
	var radio =60*canvas.width/146;
	var grd = context.createRadialGradient(centerX, centerY, 0, centerX, centerY, 60*canvas.width/146);
    grd.addColorStop(0, "#dfd000"); 
    grd.addColorStop(1, "#c5b603");
    var colorBorde = "#d4d4d4";
	crearCirculo(canvas,grd,radio,colorBorde,centerX,centerY,true,1);
}
function crearCirculo(canvas,gradiente,radio,colorBorde,centerX,centerY,shadow,lineWidth)
{
	var context = canvas.getContext("2d");
	context.beginPath();
	context.arc(centerX,centerY,radio,0,2*Math.PI,false);
    context.fillStyle = gradiente;
    if(shadow)
    {
    	context.shadowColor = "black";
    	context.shadowBlur = 8*canvas.width/146;
    }
    context.strokeStyle = colorBorde;
    if(lineWidth)
    	context.lineWidth = lineWidth;
    else
    	context.lineWidth = 1;
    context.fill();
    context.stroke();
    context.closePath();
    context.shadowColor="transparent";
    context.shadowBlur = 0;
    context.lineWidth = 0;
}
function crearCountDownbg(canvas)
{
var context = canvas.getContext("2d");
	var	centerX = canvas.width/2;
	var	centerY = canvas.height/2;
	var radio =120*canvas.width/265;
	var grd = context.createRadialGradient(centerX, centerY, 0, centerX, centerY, 120*canvas.width/289);
 	grd.addColorStop(0, "#ffffff");
    grd.addColorStop(0.4,	"#f4f4f4");
  	grd.addColorStop(1, "#b8b9b9");
    var colorBorde = "#ffffff";
    crearCirculo(canvas,grd,radio,colorBorde,centerX,centerY,true,5*canvas.width/289);
}
function crearInfoBG(canvas)
{
	var context = canvas.getContext("2d");
	var	centerX = canvas.width/2;
	var	centerY = canvas.height/2;
	var radio =40*canvas.width/95;
	var colorFondo= "#E6E6E6";
	var colorBorde= "#fff";
	crearCirculo(canvas,colorFondo,radio,colorBorde,centerX,centerY,true,1);
	
}
function crearBotonInfo(canvas)
{	
		ctx = canvas.getContext('2d');
 		ctx.fillStyle = '#2C363A';
    	ctx.font = 70*canvas.width/94+'px "Grover-Slab-Bold"';
     	ctx.fillText('i', 0.29*canvas.width, 0.75*canvas.height);
}
function crearBotonStats(canvas)
{
	var x = canvas.width/95
	var context = canvas.getContext("2d");
	context.beginPath();
	context.moveTo(22.893*x,65.422*x);
	context.lineTo(71*x,65.42*x);
	context.lineWidth=2;
	context.strokeStyle="#33393D";
	context.stroke();
	context.lineWidth=0;
	context.rect(28*x, 39.91*x, 10.91*x, 23.104*x);
	context.rect(41.935*x,27.9*x,10.176*x,35.114*x);
	context.rect(55.962*x,34.042*x,9.993*x,28.971*x);
	context.fillStyle ="#33393D";
	context.fill();
}
function borrarCanvas(canvas)
{
	var context = canvas.getContext("2d");
	
	context.clearRect(0,0,canvas.width,canvas.height);
}