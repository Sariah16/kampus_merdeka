function hitung(operasi) {
    let a1 = document.kalkulator.a1;
    let a2 = document.kalkulator.a2;

    let hasil = document.kalkulator.hasil;
    if(isNaN(a1.value) || a1.value=="" || isNaN(a2.value) || a2.value==""){
        alert("Tidak Valid");
    } else {

    

    if(operasi == '+') {
        hasil.value = Number(a1.value) + Number(a2.value);
    } else if(operasi == '-') {
        hasil.value = Number(a1.value) - Number(a2.value);
    }  else if(operasi == '/') {
        hasil.value = Number(a1.value) / Number(a2.value);
    }  else if(operasi == '*') {
        hasil.value = Number(a1.value) * Number(a2.value);
    }  else if(operasi == '^') {
        hasil.value = Number(a1.value) ** Number(a2.value);
    }
    
}
}

