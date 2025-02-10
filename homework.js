// Öğrenci listesi
let ogrenciler = [
    { Ad: "Mert Osman", Soyad: "Eribol", Telefon: "05399302409" },
    { Ad: "Ahmet", Soyad: "Selçuk", Telefon: "0548697568" },
    { Ad: "Türkay Efe", Soyad: "Yıldız", Telefon: "058865786" },
    { Ad: "Muhammer", Soyad: "Koç", Telefon: "05579632585" }
    { Ad: "Büşra",Soyad: "Koçak", Telefon: "05347852495", },
    { Ad: "Emirhan",Soyad: "Akbal", Telefon: "05479987853", },
    { Ad: "Helin",Soyad: "Yaman", Telefon: "05445866730", },
    { Ad: "İlke",Soyad: "Şahin", Telefon: "05247856324", },
    { Ad: "Ömer Faruk",Soyad: "Şenel", Telefon: "05489635472", },
    {   Ad: "Ahmet",Soyad: "Selçuk", Telefon: "05349632789", },
    {   Ad: "Veli Taha",Soyad: "Boyar", Telefon: "053698752569", },
    {   Ad: "Yunus",Soyad: "Karagöz", Telefon: "05363546824", },
    {   Ad: "Sude",Soyad: "Şentürk", Telefon: "05373456089", },
    {   Ad: "Nedra",Soyad: "Bahar", Telefon: "05465896358", },
    {   Ad: "Şeyma",Soyad: "Say", Telefon: "05375896589", },
    {   Ad: "Burak",Soyad: "Güler", Telefon: "05374586926", },
    {   Ad: "Rojar",Soyad: "Bel", Telefon: "05478542671", },
    {   Ad: "Kadir",Soyad: "Yücel", Telefon: "05378657858", },
    {   Ad: "Yunus",Soyad: "Karagöz", Telefon: "05378685078", },
    {   Ad: "Erol",Soyad: "Dönmez", Telefon: "053785686585", },                                                             
    {   Ad: "Emirhan",Soyad: "Okutan", Telefon: "05799641587", },
    {   Ad: "Seda Nur",Soyad: "Zurnacı", Telefon: "05479635891", },
    {   Ad: "Özkan",Soyad: "Ceyhan", Telefon: "05349632597", },
];

// Notları rastgele atayan fonksiyon
function rastgeleNot() {
    return Math.floor(Math.random() * 51) + 50; // 50 ile 100 arasında rastgele not
}

// Öğrencilere vize ve final notlarını ekleyelim
for (let i = 0; i < ogrenciler.length; i++) {
    ogrenciler[i].Vize1 = rastgeleNot();
    ogrenciler[i].Vize2 = rastgeleNot();
    ogrenciler[i].Final = rastgeleNot();
}

// 📌 Do-While ile ekrana yazdırma
console.log("\n--- DO-WHILE DÖNGÜSÜ ---");
let i = 0;
do {
    let ogr = ogrenciler[i];
    console.log(`${ogr.Ad} ${ogr.Soyad} | Tel: ${ogr.Telefon} | Vize1: ${ogr.Vize1}, Vize2: ${ogr.Vize2}, Final: ${ogr.Final}`);
    i++;
} while (i < ogrenciler.length);

// 📌 For döngüsü ile ekrana yazdırma
console.log("\n--- FOR DÖNGÜSÜ ---");
for (let i = 0; i < ogrenciler.length; i++) {
    let ogr = ogrenciler[i];
    console.log(`${ogr.Ad} ${ogr.Soyad} | Tel: ${ogr.Telefon} | Vize1: ${ogr.Vize1}, Vize2: ${ogr.Vize2}, Final: ${ogr.Final}`);
}

// 📌 For-in döngüsü ile ekrana yazdırma
console.log("\n--- FOR-IN DÖNGÜSÜ ---");
for (let index in ogrenciler) {
    let ogr = ogrenciler[index];
    console.log(`${ogr.Ad} ${ogr.Soyad} | Tel: ${ogr.Telefon} | Vize1: ${ogr.Vize1}, Vize2: ${ogr.Vize2}, Final: ${ogr.Final}`);
}
