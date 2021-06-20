var ingrediente1
var ingrediente2
var ingrediente3
var Bebida

alert("¿qué comiste hoy en el desayuno?");


ingrediente1=(prompt("Primer ingrediente: \n1.Tortillas \n2.Pan \n3.hojaldres"));
if(ingrediente1=="1"){
      var ingrediente1= alert ("¡buena elección!")

} else if (ingrediente1=="2"){
    var ingrediente1= alert ("escogería lo mismo <3")

} else if (ingrediente1=="3"){
      var ingrediente1= alert ("Tal vez otra opción seria mejor para mí...")
}

ingrediente2=(prompt("Segundo ingrediente: \n1.Queso amarillo \n2.Queso blanco \n3.Jamón"));
if(ingrediente2=="1"){
    var ingrediente2= alert ("Es la mejor opción :b")

} else if (ingrediente2=="2"){
  var ingrediente2= alert ("¡Excelente! es uno de mis favoritos")

} else if (ingrediente2=="3"){
    var ingrediente2= alert ("Me pareció que estaba muy delicioso y fresco B)")
}

ingrediente3=(prompt("tercer ingrediente: \n1.Pollo \n2.Carne \n3.Salchichas"));
if(ingrediente3=="1"){
    var ingrediente3= alert ("Es de lo mejor de por aquí y su salsita es deliciosa ;)")

} else if (ingrediente3=="2"){
  var ingrediente3= alert ("Ok... 8/")

} else if (ingrediente3=="3"){
    var ingrediente3= alert ("Hacen unas mejores en El Chorrillo")
}

Bebida=(prompt("Bebidas: \n1.Jugo de naranja \n2.Café \n3.Chicha de piña"));
if(Bebida=="1"){
    var Bebida= alert ("Tienen un gran sabor!")

} else if (Bebida=="2"){
  var Bebida= alert ("Está muy amargo para mi gusto, no es de mis preferidos")

} else if (Bebida=="3"){
    var Bebida= alert ("La probé y estuvo 10/10")
}

document.write ("hoy usted comió: " +"<br>"+"Un desayuno muy saludable y delicioso, siga comiendo igual.");

