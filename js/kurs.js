function kosong1() {
    let frm = document.getElementById("formulir");
    frm.harga.value = "";
}

function kosongdua() {
    let frm = document.getElementById("formulir");
    frm.jumlah.value = "";
}

function kosongA11() {
    let frm = document.getElementById("formulir");
    frm.harga.value = "";
    frm.jumlah.value = "";
    frm.valas.value = "";
    frm.hasil.value = "";
}

    function totalharga() {
        let frm = document.getElementById("formulir");
        let harga = frm.harga.value;
        let jumlah = frm.jumlah.value;
        let valas = frm.valas.value;
       //jika inputan salah
       if (isNaN(harga) || jumlah == '') {
           alert("Data jumlah salah");
       } else {
           //jika inputan benar
            let total = harga * jumlah * valas;
        frm.hasil.value = total;
    }
}

