<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kayıt Formu</title>
    <style>
        body { font-family: Arial, sans-serif; text-align: center; }
        .container { width: 50%; margin: auto; }
        input { display: block; width: 100%; padding: 10px; margin: 10px 0; }
        button { padding: 10px 15px; background: green; color: white; border: none; cursor: pointer; }
        ul { list-style: none; padding: 0; }
        li { background: #f3f3f3; margin: 5px 0; padding: 10px; }
    </style>
</head>
<body>
    <div class="container">
        <h2>Kayıt Formu</h2>
        <input type="text" id="ad" placeholder="Adınızı girin">
        <input type="text" id="soyad" placeholder="Soyadınızı girin">
        <input type="tel" id="telefon" placeholder="Telefon numaranızı girin">
        <button onclick="kaydet()">Kaydet</button>
        
        <h3>Kayıtlı Kullanıcılar</h3>
        <ul id="kullaniciListesi"></ul>
    </div>
    
    <script>
        function kaydet() {
            let ad = document.getElementById("ad").value;
            let soyad = document.getElementById("soyad").value;
            let telefon = document.getElementById("telefon").value;
            
            if(ad === "" || soyad === "" || telefon === "") {
                alert("Lütfen tüm alanları doldurun!");
                return;
            }
            
            let liste = document.getElementById("kullaniciListesi");
            let yeniKayit = document.createElement("li");
            yeniKayit.innerText = `${ad} ${soyad} - ${telefon}`;
            liste.appendChild(yeniKayit);
            
            document.getElementById("ad").value = "";
            document.getElementById("soyad").value = "";
            document.getElementById("telefon").value = "";
        }
    </script>
</body>
</html>
