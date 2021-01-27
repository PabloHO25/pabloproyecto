
var productos=[];
var contador=0;
var nom="si";
function agregarProducto(nombreArchivo)
{
alert("PRODUCTO");

productos[contador]=this;
printWindow.document.write(this);
contador++;

}

for (var i = productos.length - 1; i >= 0; i--) {
	console.log(productos[i]);
}
function desplegar()
{
return productos[contador];
}


var Capturar = function(){
        let lstNumero = document.getElementsByClassName("A5"),
            arrayGuardar = [];         
        for (var i = 0; i < lstNumero.length; i++) {    
            arrayGuardar[i] = lstNumero[i].value;
            console.log (lstNumero[i].value);     
            }       
        }