var RoomPrice = () =>{
    var room_type = document.getElementById("typeroom").value;
    var precio;
    switch(room_type){
        case "juniorsuit": {
            precio = 120;
        break;
        }
        case "suite": {
            precio = 150;
        break;
        }
        default:
            precio = 100;
        break;
    }
    return precio;
}

var GetSPA = () =>{
    if(document.getElementById("spa").checked){
        return 20;
    }else{
        return 0;
    }
}

var GetOcupation = () =>{
    var ocupation_type = document.getElementById("ocupacion").value;
    var precioOcu;
    switch(ocupation_type){
        case "individual": {
            precioOcu = 0.75;
        break;
        }
        case "triple": {
            precioOcu = 1.25;
        break;
        }
        default:
            precioOcu = 1;
        break;
    }
    return precioOcu;
}

var GetNights = () =>{
    var salida_noches = document.getElementById("noches").value;
    if(salida_noches == ""){
        return 0;
    }
    return salida_noches;
}

var GetParking = () =>{
    var salida_parking = document.getElementById("parking").value;
    if(salida_parking == ""){
        return 0;
    }
    return salida_parking;
}




var showtotal = () =>{

    var total= 0;
    var room_price = RoomPrice();
    var spa = GetSPA();
    var type_ocu = GetOcupation();
    var noches = GetNights();
    var parking = GetParking() * 10;

//primero vemos si tiene spa reservado y calculamos el precio
//de una noche dependiendo del tipo de habitacion
    total= room_price + spa;
//le aplicamos descuento o suplemento dependiendo de la ocupacion
total= total * type_ocu;
//calculamos el precio del total de noches
    total= total * noches;
//le sumamos el parking
    total= total + parking;

//mostramos el resultado de la reserva
    document.getElementById("total").innerHTML = "El coste total de su estancia será: " + total + " €";
}

document.getElementById("typeroom").addEventListener("change",showtotal);
document.getElementById("ocupacion").addEventListener("change",showtotal);
document.getElementById("spa").addEventListener("change",showtotal);
document.getElementById("noches").addEventListener("keyup",showtotal);
document.getElementById("parking").addEventListener("keyup",showtotal);

