# 📱 Basit QR Kod Oluşturucu

<p align="center">
  <strong>Bağlantılarınızı anında modern QR kodlara dönüştürün, özelleştirin ve yüksek kalitede indirin.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT">
  <img src="https://img.shields.io/badge/Node.js-%3E%3D18.0.0-green.svg" alt="Node.js">
  <img src="https://img.shields.io/badge/Express-5.x-lightgrey.svg" alt="Express">
  <img src="https://img.shields.io/badge/Ordu%20%C3%9Cniversitesi-Teknofest%20Kul%C3%BCb%C3%BC-red.svg" alt="Ordu Üniversitesi Teknofest Kulübü">
</p>

---

> 🎓 **Bu yazılım Ordu Üniversitesi Teknofest Kulübü tarafından hazırlanmıştır.**

Kullanıcıların diledikleri web sitesi bağlantısını (URL) veya metni saniyeler içinde QR koda dönüştürebileceği, kişiselleştirebileceği ve tek tıkla `.PNG` olarak indirebileceği açık kaynaklı, hafif ve modern bir web uygulamasıdır.

---

## ✨ Özellikler

- ⚡ **Canlı Önizleme:** Bağlantı veya metin yazıldığı/yapıştırıldığı anda QR kod otomatik olarak üretilir.
- 💾 **Tek Tıkla İndirme:** Yüksek çözünürlüklü `.PNG` formatında doğrudan cihaza indirir.
- 📋 **Panoya Kopyalama:** İndirmeden önce görseli doğrudan panoya kopyalayıp WhatsApp, Word, Photoshop vb. uygulamalara yapıştırma kolaylığı.
- 🖼️ **Merkeze Logo Ekleme (İsteğe Bağlı):** QR kodun ortasına kişisel veya kurumsal logo (PNG/JPG/SVG) yerleştirilebilir. Okunabilirliği korumak için yüksek hata düzeltme seviyesi (Level H) uygulanır.
- 🎨 **Renk & Tema Özelleştirme:** QR rengi ve arka plan rengi serbestçe değiştirilebilir veya hazır temalardan (Klasik, Okyanus, Zümrüt, Viyole) seçilebilir.
- 📐 **Çözünürlük Seçenekleri:** 256px (Web/Hafif), 512px (Önerilen HD) veya 1024px (Ultra HD Baskı).
- 🔒 **Güvenli ve Gizlilik Dostu:** Tüm QR kod oluşturma ve logo birleştirme işlemleri kullanıcının tarayıcısında gerçekleşir, verileriniz üçüncü şahıslara veya sunuculara iletilmez.

---

## 🚀 Kurulum ve Çalıştırma

Projeyi çalıştırmak için iki pratik yöntem bulunmaktadır:

### 1. Yöntem: Doğrudan Tarayıcıda Açma (Kurulum Gerektirmez)
Hiçbir terminal komutuna veya Node.js kurulumuna ihtiyaç duymadan:
1. `public/index.html` dosyasına çift tıklayın.
2. Web sitesi doğrudan varsayılan tarayıcınızda açılacaktır!

### 2. Yöntem: Node.js Express Sunucusu ile Çalıştırma
Projeyi bir yerel sunucu üzerinden çalıştırmak için:

```bash
# 1. Projeyi klonlayın
git clone https://github.com/kullanici-adiniz/basit-qrcode.git

# 2. Proje dizinine gidin
cd basit-qrcode

# 3. Bağımlılıkları yükleyin
npm install

# 4. Sunucuyu başlatın
npm start
```

Sunucu başladıktan sonra tarayıcınızdan aşağıdaki adrese gidin:
👉 **http://localhost:3000**

---

## 📂 Proje Yapısı

```
basit-qrcode/
├── public/
│   ├── index.html        # Arayüz ve yapı
│   ├── style.css         # Modern, responsive CSS tasarımı
│   ├── app.js            # QR motoru, logo yerleştirme ve indirme mantığı
│   └── qrcode.min.js     # Bağımsız, çevrimdışı QR kütüphanesi
├── server.js             # Express.js sunucusu ve REST API uç noktaları
├── package.json          # Proje bağımlılıkları ve npm betikleri
├── .gitignore            # Git tarafından takip edilmeyecek dosyalar
├── LICENSE               # MIT Açık Kaynak Lisansı
└── README.md             # Dokümantasyon
```

---

## 🛠️ Teknolojiler

- **Frontend:** HTML5, CSS3 (Modern Flexbox & Grid, CSS Variables), Vanilla JavaScript (Canvas API)
- **Backend:** Node.js, Express.js
- **QR Motoru:** `qrcodejs` (İstemci tarafı), `qrcode` (Sunucu tarafı)

---

## 📄 Lisans

Bu proje [MIT Lisansı](LICENSE) kapsamında lisanslanmıştır. Dilediğiniz gibi kullanabilir, geliştirebilir ve paylaşabilirsiniz.
