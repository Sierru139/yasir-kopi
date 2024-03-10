
function navrespons() {
    var navres = document.getElementById('navres');
    if (navres.style.display === "none") {
        navres.style.display = "flex";
    } else {
        navres.style.display = "none";
    }
}

const navbar = document.querySelector('nav');
window.onscroll = () => {
    if (window.scrollY > 50) {
        navbar.classList.remove('dotgone');
        navbar.classList.add('dot');
    } else {
        navbar.classList.remove('dot');
        navbar.classList.add('dotgone');
    }
}

function showMenu(menuNumber) {
    // Menentukan elemen-elemen yang akan diubah
    let descNone = document.getElementById("descNone");
    let detNone = document.getElementById("detNone");
    let menuDesc = document.querySelector(".menuDesc.desc" + menuNumber + "coff");
    
    // Menyembunyikan semua menu descriptions
    document.querySelectorAll('.menuDesc').forEach(desc => {
        desc.classList.add("hidden");
    });

    // Menyembunyikan semua menu details

    
    // Menampilkan menu description dan menu detail yang dipilih
    descNone.classList.add("hidden");
    menuDesc.classList.remove("hidden");
}

// Fungsi untuk menampilkan Menu Detail sesuai dengan nomor yang dipilih
function showDet(menuNumber) {
    // Menggunakan metode getElementById untuk mengakses elemen-elemen Menu Detail
    var menuDet1 = document.querySelector('.menuDet1');
    var menuDet2 = document.querySelector('.menuDet2');
    var menuDet3 = document.querySelector('.menuDet3');
    var menuDet4 = document.querySelector('.menuDet4');
    var menuDet5 = document.querySelector('.menuDet5');
    var detNone = document.getElementById('detNone');

    // Menggunakan switch case untuk menampilkan Menu Detail yang sesuai dengan nomor yang dipilih
    switch (menuNumber) {
        case 1:
            // Menampilkan Menu Detail 1 dan menyembunyikan yang lainnya
            detNone.classList.add("hidden")
            menuDet1.classList.remove('hidden');
            menuDet2.classList.add('hidden');
            menuDet3.classList.add('hidden');
            menuDet4.classList.add('hidden');
            menuDet5.classList.add('hidden');
            break;
        case 2:
            // Menampilkan Menu Detail 2 dan menyembunyikan yang lainnya
            detNone.classList.add("hidden")
            menuDet1.classList.add('hidden');
            menuDet2.classList.remove('hidden');
            menuDet3.classList.add('hidden');
            menuDet4.classList.add('hidden');
            menuDet5.classList.add('hidden');
            break;
        case 3:
            // Menampilkan Menu Detail 3 dan menyembunyikan yang lainnya
            detNone.classList.add("hidden")
            menuDet1.classList.add('hidden');
            menuDet2.classList.add('hidden');
            menuDet3.classList.remove('hidden');
            menuDet4.classList.add('hidden');
            menuDet5.classList.add('hidden');
            break;
        case 4:
            // Menampilkan Menu Detail 4 dan menyembunyikan yang lainnya
            detNone.classList.add("hidden")
            menuDet1.classList.add('hidden');
            menuDet2.classList.add('hidden');
            menuDet3.classList.add('hidden');
            menuDet4.classList.remove('hidden');
            menuDet5.classList.add('hidden');
            break;
        case 5:
            // Menampilkan Menu Detail 5 dan menyembunyikan yang lainnya
            detNone.classList.add("hidden")
            menuDet1.classList.add('hidden');
            menuDet2.classList.add('hidden');
            menuDet3.classList.add('hidden');
            menuDet4.classList.add('hidden');
            menuDet5.classList.remove('hidden');
            break;
        default:
            // Default case jika nomor menu tidak sesuai
            console.log('Menu tidak ditemukan.');
            break;
    }
}