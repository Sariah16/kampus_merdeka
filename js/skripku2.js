function cetak() {
    //tangkap element2 form
    let frm = window.document.getElementById("transaksi");
    let nama = frm.nama.value;
    let produk = frm.produk.value;
    let jumlah = frm.jumlah.value;
    let harga = 0;
    
 
    
        switch(produk){
            
            case 'televisi' : harga = 2000000; break;
            case 'Ac' : harga = 3000000; break;
            case 'kulkas' : harga = 1000000; break;
            default : 'Tidak Valid';

        }

        let hargaKotor = harga * jumlah;
        if (produk == "televisi" && jumlah >= 3){
            diskon = hargaKotor * 0.3;
        }
        else if(produk == "Ac" && jumlah >= 3){
            diskon =  hargaKotor * 0.2;
        }
        else {
            diskon = hargaKotor * 0.1;
        }

       
 
        let ppn = hargaKotor * 0.1 - diskon;
        let Hargabayar = hargaKotor - diskon + ppn

    
    //cetak di alerting
    alert("Nama: " + nama  + " \nproduk: " + produk + " \njumlah : " + jumlah + "\nharga: " + harga + "\nHarga kotor : " + hargaKotor + "\nDiskon: " + diskon + "\nTotal Bayar : " + Hargabayar);

}