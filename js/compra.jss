const ticket=200;
var dtoE=(ticket-(ticket*0.80));
var dtoT=(ticket-(ticket*0.50));
var dtoJ=(ticket-(ticket*0.15));


function resumenCompra()
{
var cant=document.getElementById("cant").value;
var select=document.getElementById("cat");
var select_activa=select.options[select.selectedIndex].value;
var aPagar=0;

switch(select_activa=parseInt(select_activa))
{
    case 1:
         aPagar=cant*dtoE;
          break;
    case 2:
        aPagar=cant*dtoT;
          break;
    case 3:
        aPagar=cant*dtoJ;
        break;
    case 4:
        aPagar=cant*ticket;
        break;
}
document.getElementById("aPagar").innerHTML="Total a Pagar $ "+aPagar;
}


function borrarDatos()
{
  document.getElementById("nombre").value="";
  document.getElementById("apellido").value="";
  document.getElementById("mail").value="";
  document.getElementById("cant").value="";
  document.getElementById("cat").value="1";
  document.getElementById("aPagar").innerHTML="Total a Pagar $ ";
}
