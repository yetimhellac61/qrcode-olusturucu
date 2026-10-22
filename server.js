const express = require('express');
const path = require('path');
const QRCode = require('qrcode');

const app = express();
const PORT = process.env.PORT || 3000;

// JSON ve URL-encoded veri desteği
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Statik dosyaları sun (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// QR Kod oluşturma API rotası (Base64 data URL yanıt)
app.post('/api/generate', async (req, res) => {
  try {
    const {
      text,
      width = 512,
      margin = 4,
      dark = '#000000',
      light = '#ffffff',
      errorCorrectionLevel = 'H'
    } = req.body;

    if (!text || text.trim() === '') {
      return res.status(400).json({ success: false, message: 'Lütfen geçerli bir bağlantı veya metin girin.' });
    }

    const dataUrl = await QRCode.toDataURL(text.trim(), {
      width: Math.min(Math.max(parseInt(width) || 512, 128), 2048),
      margin: parseInt(margin) || 4,
      color: {
        dark: dark || '#000000',
        light: light || '#ffffff'
      },
      errorCorrectionLevel: ['L', 'M', 'Q', 'H'].includes(errorCorrectionLevel) ? errorCorrectionLevel : 'H'
    });

    res.json({ success: true, qr: dataUrl });
  } catch (error) {
    console.error('QR Kod oluşturma hatası:', error);
    res.status(500).json({ success: false, message: 'QR Kod oluşturulurken bir hata oluştu: ' + error.message });
  }
});

// Doğrudan PNG indirme API rotası (GET)
app.get('/api/download', async (req, res) => {
  try {
    const {
      text,
      width = 512,
      margin = 4,
      dark = '#000000',
      light = '#ffffff',
      errorCorrectionLevel = 'H',
      filename = 'qrcode.png'
    } = req.query;

    if (!text || text.trim() === '') {
      return res.status(400).send('Lütfen "text" parametresini belirtin.');
    }

    const buffer = await QRCode.toBuffer(text.trim(), {
      width: Math.min(Math.max(parseInt(width) || 512, 128), 2048),
      margin: parseInt(margin) || 4,
      color: {
        dark: dark || '#000000',
        light: light || '#ffffff'
      },
      errorCorrectionLevel: ['L', 'M', 'Q', 'H'].includes(errorCorrectionLevel) ? errorCorrectionLevel : 'H'
    });

    res.setHeader('Content-Type', 'image/png');
    res.setHeader('Content-Disposition', `attachment; filename="${encodeURIComponent(filename)}"`);
    res.send(buffer);
  } catch (error) {
    console.error('İndirme hatası:', error);
    res.status(500).send('Hata: ' + error.message);
  }
});

// Sunucuyu başlat
app.listen(PORT, () => {
  console.log(`===============================================`);
  console.log(` Basit QR Kod Sunucusu Başarıyla Başlatıldı! `);
  console.log(` Tarayıcınızdan açın: http://localhost:${PORT}`);
  console.log(`===============================================`);
});
