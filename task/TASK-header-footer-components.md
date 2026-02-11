# 🎯 GÖREV: Alibaba Tarzı Header & Footer Bileşen Geliştirme

> **Proje:** TR TradeHub - B2B Marketplace  
> **Araç:** Claude Desktop + Flowbite MCP  
> **Teknoloji:** Vite 7 + TypeScript + Tailwind CSS v4 + Flowbite v4  
> **Tarih:** 2026-02-11  
> **Öncelik:** Header → Footer (sıralı)

---

## 📐 PROJE TEKNİK ALTYAPI

```json
{
  "type": "module",
  "dependencies": {
    "@tailwindcss/vite": "^4.1.18",
    "flowbite": "^4.0.1",
    "tailwindcss": "^4.1.18"
  },
  "devDependencies": {
    "typescript": "~5.9.3",
    "vite": "^7.3.1"
  }
}
```

**Kurallar:**
- ❌ `style.css` dosyasına DOKUNULMAZ — renkler ve tema zaten tanımlı
- Mevcut theme token'ları (bg-primary, text-primary vb.) doğrudan kullanılacak
- Tailwind CSS v4 utility-first yaklaşımı
- Flowbite v4 bileşenleri öncelikli kullanılacak
- Modüler dosya yapısı (her bileşen ayrı dosya)
- Responsive: Desktop-first (1440px container), tablet, mobil

---

## 🏗️ BÖLÜM 1: HEADER (Üst Bilgi)

Header 4 katmandan oluşur: **Top Bar → Sub Header → Search Area → Welcome Bar**

---

### 1.1 TOP BAR (En Üst Çubuk) — `h:72px`

| # | Bileşen | Açıklama | Flowbite MCP Komutu | Durum |
|---|---------|----------|---------------------|-------|
| 1 | **Logo** | Sol üst köşe, platform logosu (link → anasayfa) | — | ✏️ Özel |
| 2 | **Teslimat Ülkesi Seçici** | Bayrak ikonu + "TR" etiketi, dropdown ile ülke seçimi | `flowbite_get_component: dropdown` | 🔧 MCP |
| 3 | **Dil / Para Birimi Seçici** | "Türkçe - TRY" | `flowbite_get_component: dropdown` | 🔧 MCP |
| 4 | **Sepet İkonu** | Alışveriş sepeti + badge (ürün sayısı) | `flowbite_get_component: indicators` | 🔧 MCP |
| 5 | **Giriş Yap Butonu** | Kullanıcı ikonu + "Giriş Yap" text link | `flowbite_get_component: buttons` | 🔧 MCP |
| 6 | **Hesap Oluştur Butonu** | Kayıt butonu (CTA, turuncu vurgu) | `flowbite_get_component: buttons` | 🔧 MCP |

**Layout:** `flex justify-between items-center` — Sol: Logo + Teslimat, Sağ: Para/Sepet/Auth

**🔧 Flowbite MCP Prompt:**
```
flowbite_get_component: navbar
→ Alibaba tarzı top bar olarak uyarla: logo sol, auth butonları sağ
→ Dropdown: ülke seçici ve dil/para birimi seçici ekle
→ Badge: sepet ikonu üzerinde ürün sayısı göster
```

---

### 1.2 SUB HEADER (Alt Navigasyon Çubuğu)

| # | Bileşen | Açıklama | Flowbite MCP Komutu | Durum |
|---|---------|----------|---------------------|-------|
| 1 | **☰ Tüm Kategoriler** | Mega menü tetikleyici (hamburger ikon + metin) | `flowbite_get_component: mega-menu` | 🔧 MCP |
| 2 | **Öne Çıkanlar** | Kampanya/featured ürünler linki | `flowbite_get_component: navbar` | 🔧 MCP |
| 3 | **Sipariş Korumaları** | Trade Assurance badge/link | — | ✏️ Özel |
| 4 | **Alıcı Merkezi** | Buyer Central dropdown | `flowbite_get_component: dropdown` | 🔧 MCP |
| 5 | **Yardım Merkezi** | Help Center linki | — | Basit link |
| 6 | **Mobil Uygulama** | QR kod popup ile uygulama indirme | `flowbite_get_component: popover` | 🔧 MCP |
| 7 | **Tedarikçi Ol** | Sağ kenarda, satıcı kayıt CTA | `flowbite_get_component: buttons` | 🔧 MCP |

**Layout:** `flex items-center gap-6` — Sol: Kategoriler + Nav linkleri, Sağ: Yardım/Mobil/Tedarikçi

**🔧 Flowbite MCP Prompt:**
```
flowbite_get_component: mega-menu
→ "Tüm Kategoriler" tetikleyicisi ile açılan mega menü
→ 39 kategori, çok sütunlu grid yapısı
→ Hover ile alt kategori gösterimi

flowbite_get_component: popover
→ "Mobil Uygulama" hover ile QR kod popup gösterimi
```

---

### 1.3 SEARCH AREA (Arama Bölümü) ⭐ En Kritik Bileşen

#### 1.3.1 Arama Sekmeleri (Search Tabs)

| # | Sekme | Hedef | Flowbite MCP Komutu | Durum |
|---|-------|-------|---------------------|-------|
| 1 | **AI Modu ✨** | AI destekli akıllı arama | `flowbite_get_component: tabs` | 🔧 MCP |
| 2 | **Ürünler** ● (aktif) | Varsayılan ürün araması | `flowbite_get_component: tabs` | 🔧 MCP |
| 3 | **Üreticiler** | Fabrika/üretici araması | `flowbite_get_component: tabs` | 🔧 MCP |
| 4 | **Ülkeye Göre** | Ülke bazlı tedarik araması | `flowbite_get_component: tabs` | 🔧 MCP |

**🔧 Flowbite MCP Prompt:**
```
flowbite_get_component: tabs
→ Underline tabs stili, 4 sekme
→ Aktif sekme: turuncu alt çizgi
→ AI Modu sekmesine sparkle (✨) ikonu ekle
```

#### 1.3.2 Arama Input Grubu

| # | Bileşen | Açıklama | Flowbite MCP Komutu | Durum |
|---|---------|----------|---------------------|-------|
| 1 | **Search Input** | Geniş arama kutusu, placeholder kayar yazı | `flowbite_get_component: search-input` | 🔧 MCP |
| 2 | **Kayan Placeholder** | "kadın giyim", "erkek ayakkabı", "elektrikli bisiklet" döngüsel | — | ✏️ Özel (JS animasyon) |
| 3 | **Deep Search Butonu** | "Deep Search" + "Free" etiketi | `flowbite_get_component: button-group` | 🔧 MCP |
| 4 | **Görselle Ara Butonu** | Kamera ikonu, görsel yükleme ile arama | `flowbite_get_component: button-group` | 🔧 MCP |
| 5 | **ARA Butonu** | Ana CTA, turuncu, büyük | `flowbite_get_component: buttons` | 🔧 MCP |

**Layout:** Input + sağ tarafında 3 buton grubu

**🔧 Flowbite MCP Prompt:**
```
flowbite_get_component: search-input
→ Büyük arama input (h:48px+), rounded-lg
→ Sağ tarafında button-group: [Deep Search | 📷 | 🔍 ARA]

flowbite_get_component: button-group
→ 3 buton yan yana: Deep Search (outlined), Kamera ikonu, ARA (filled turuncu)
```

#### 1.3.3 Özel Geliştirme: Kayan Placeholder Animasyonu

```typescript
// ✏️ ÖZEL GELİŞTİRME — Flowbite'da yok
// Arama input içinde dönen anahtar kelimeler
const trendKeywords: string[] = [
  "kadın giyim",
  "erkek ayakkabı",
  "elektrikli bisiklet",
  "kablosuz kulaklık",
  "güneş gözlüğü"
];

// Her 3 saniyede bir placeholder değişir (fade animasyonu ile)
// CSS: @keyframes fadeInUp + transition
```

---

### 1.4 WELCOME BAR (Hoş Geldiniz Çubuğu)

| # | Bileşen | Açıklama | Flowbite MCP Komutu | Durum |
|---|---------|----------|---------------------|-------|
| 1 | **Hoş Geldin Mesajı** | "TR TradeHub'a Hoş Geldiniz" | — | Basit metin |
| 2 | **RFQ Talebi Butonu** | "Fiyat Teklifi Al" CTA | `flowbite_get_component: buttons` | 🔧 MCP |
| 3 | **En Çok Tercih Linki** | Popüler ürünler sayfasına link | `flowbite_get_component: buttons` | 🔧 MCP |
| 4 | **Hızlı Özelleştir Linki** | Özelleştirme hizmeti sayfasına link | `flowbite_get_component: buttons` | 🔧 MCP |

**Layout:** `flex justify-between items-center` — Sol: mesaj, Sağ: 3 buton/link

**🔧 Flowbite MCP Prompt:**
```
flowbite_get_component: banner
→ Tam genişlik, ince bar (h:48px)
→ Sol: hoş geldin mesajı, Sağ: 3 adet pill/badge stili buton
→ Arka plan: açık gri veya gradient
```

---

## 🏗️ BÖLÜM 2: FOOTER (Alt Bilgi)

Footer 5 katmandan oluşur: **Link Sütunları → Grup Şirketleri → Politikalar → Sosyal Medya → Copyright**

---

### 2.1 FOOTER ANA LINK SÜTUNLARI (5 Sütun Grid)

| # | Sütun Başlığı | İçerik Linkleri | Flowbite MCP | Durum |
|---|---------------|-----------------|--------------|-------|
| 1 | **Destek Alın** | Yardım Merkezi, Canlı Destek, Sipariş Durumu, Para İadeleri, Şikayet Bildir | `flowbite_get_component: footer` | 🔧 MCP |
| 2 | **Ödeme & Korumalar** | Güvenli Ödeme, İade Politikası, Zamanında Gönderim, Satış Sonrası, Ürün Takip | `flowbite_get_component: footer` | 🔧 MCP |
| 3 | **Tedarik Edin** | RFQ Talebi, Üyelik Programı, KDV Bilgileri, Platform Reads | `flowbite_get_component: footer` | 🔧 MCP |
| 4 | **Satın** | Satışa Başla, Satıcı Merkezi, Verified Satıcı, Ortaklıklar, Tedarikçi Uygulaması | `flowbite_get_component: footer` | 🔧 MCP |
| 5 | **Bizi Tanıyın** | Hakkımızda, Sorumluluk, Haber Merkezi, Kariyer | `flowbite_get_component: footer` | 🔧 MCP |

**🔧 Flowbite MCP Prompt:**
```
flowbite_get_component: footer
→ "Sitemap links" varyantı, 5 sütunlu grid
→ Her sütunda başlık (bold) + altında 4-5 link listesi
→ Responsive: mobilde accordion/collapse yapısı
```

---

### 2.2 GRUP ŞİRKETLERİ BANDI

| # | Bileşen | Açıklama | Flowbite MCP | Durum |
|---|---------|----------|--------------|-------|
| 1 | **Grup Logoları/Linkleri** | AliExpress, 1688, Tmall, Alipay, Lazada, Taobao, Trendyol, Europages | — | ✏️ Özel |

**Layout:** `flex flex-wrap justify-center gap-4` — Tek satırda separator (|) ile ayrılmış linkler

---

### 2.3 POLİTİKA ve KURALLAR BANDI

| # | Bileşen | Açıklama | Flowbite MCP | Durum |
|---|---------|----------|--------------|-------|
| 1 | **Yasal Uyarı** | Hukuki bilgilendirme sayfası | — | Basit link |
| 2 | **Listeleme Politikası** | Ürün listeleme kuralları | — | Basit link |
| 3 | **Fikri Mülkiyet Koruması** | IP hakları sayfası | — | Basit link |
| 4 | **Gizlilik Politikası** | Privacy policy | — | Basit link |
| 5 | **Kullanım Koşulları** | Terms of Service | — | Basit link |
| 6 | **Dürüstlük Uyumu** | Compliance sayfası | — | Basit link |

**Layout:** Tek satır, `|` separator, center aligned, küçük font

---

### 2.4 SOSYAL MEDYA & BAĞLI KALIN

| # | Bileşen | Açıklama | Flowbite MCP | Durum |
|---|---------|----------|--------------|-------|
| 1 | **Sosyal Medya İkonları** | Facebook, LinkedIn, Twitter/X, YouTube, Instagram | `flowbite_get_component: footer` (social links varyantı) | 🔧 MCP |
| 2 | **Uygulama İndir** | App Store + Google Play badge'leri | — | ✏️ Özel (resim) |

---

### 2.5 COPYRIGHT BANDI

```
© 2026 TR TradeHub. Tüm Hakları Saklıdır.
```

**Layout:** `text-center text-sm text-gray-500 py-4`

---

## 🏗️ BÖLÜM 3: FLOATING ELEMANLAR (Sabit Panel)

| # | Bileşen | Açıklama | Flowbite MCP Komutu | Durum |
|---|---------|----------|---------------------|-------|
| 1 | **Mesajlarım** | Chat baloncuğu + bildirim sayısı (9+) | `flowbite_get_component: speed-dial` | 🔧 MCP |
| 2 | **Görsel Arama (Lens)** | Kamera ikonu, görsel yükleme | — | ✏️ Özel |
| 3 | **En Üste Çık** | Scroll-to-top butonu | `flowbite_get_component: buttons` | 🔧 MCP |

**Layout:** `fixed right-6 bottom-6` — Dikey yığılmış 3 ikon buton

**🔧 Flowbite MCP Prompt:**
```
flowbite_get_component: speed-dial
→ Sağ alt köşe, dikey stack
→ 3 buton: Chat (badge ile), Lens, Yukarı Ok
→ Scroll pozisyonuna göre "En Üste Çık" göster/gizle
```

---

## 📋 ÖZET: BİLEŞEN HARİTASI

### Flowbite MCP ile Alınacaklar (🔧)

| Flowbite Bileşeni | Kullanım Yeri | MCP Komutu |
|-------------------|---------------|------------|
| `navbar` | Top Bar, Sub Header | `flowbite_get_component: navbar` |
| `mega-menu` | Tüm Kategoriler | `flowbite_get_component: mega-menu` |
| `dropdown` | Ülke seçici, Para birimi, Alıcı Merkezi | `flowbite_get_component: dropdown` |
| `tabs` | Arama sekmeleri (4 tab) | `flowbite_get_component: tabs` |
| `search-input` | Ana arama kutusu | `flowbite_get_component: search-input` |
| `button-group` | Deep Search + Kamera + ARA | `flowbite_get_component: button-group` |
| `buttons` | CTA butonları (Giriş, Kayıt, ARA, RFQ) | `flowbite_get_component: buttons` |
| `indicators` / `badge` | Sepet sayısı, bildirim | `flowbite_get_component: indicators` |
| `popover` | Mobil uygulama QR popup | `flowbite_get_component: popover` |
| `banner` | Welcome bar | `flowbite_get_component: banner` |
| `footer` | 5 sütunlu footer + sosyal medya | `flowbite_get_component: footer` |
| `speed-dial` | Floating sağ alt panel | `flowbite_get_component: speed-dial` |

### Özel Geliştirilecekler (✏️)

| Bileşen | Neden Özel? | Karmaşıklık |
|---------|-------------|-------------|
| **Kayan Placeholder** | Flowbite'da mevcut değil, JS animasyon gerekli | 🟡 Orta |
| **Mega Menü İçeriği** | 39 kategori, çok katmanlı hover menü özelleştirmesi | 🔴 Yüksek |
| **Sipariş Korumaları Badge** | Trade Assurance özel tasarım | 🟢 Düşük |
| **Grup Şirketleri Bandı** | Logo grid + link bandı | 🟢 Düşük |
| **Uygulama İndirme Badge'leri** | App Store / Google Play görselleri | 🟢 Düşük |
| **Görsel Arama (Lens)** | Dosya yükleme + arama entegrasyonu | 🔴 Yüksek |

---

## 🎨 RENK & STİL KURALI

> ⚠️ **KRİTİK:** `style.css` dosyasına DOKUNULMAYACAKTIR.  
> Tüm renkler, tema değişkenleri ve custom stiller zaten mevcut `style.css` içinde tanımlıdır.  
> Bileşenler geliştirilirken mevcut Tailwind CSS v4 theme token'ları (`bg-primary`, `text-primary` vb.) kullanılacak.  
> Yeni renk eklenmeyecek, mevcut yapı korunacaktır.

---

## 📂 DOSYA YAPISI (Modüler)

```
src/
├── components/
│   ├── header/
│   │   ├── TopBar.ts           ← Logo + Auth + Sepet + Ülke/Dil
│   │   ├── SubHeader.ts        ← Navigasyon + Mega Menü tetikleyici
│   │   ├── SearchArea.ts       ← Tabs + Input + Butonlar
│   │   ├── WelcomeBar.ts       ← Hoş geldin + CTA butonları
│   │   └── MegaMenu.ts         ← Kategori mega menüsü (39 kat.)
│   ├── footer/
│   │   ├── FooterLinks.ts      ← 5 sütunlu link grid
│   │   ├── FooterGroup.ts      ← Grup şirketleri bandı
│   │   ├── FooterPolicy.ts     ← Politika linkleri
│   │   ├── FooterSocial.ts     ← Sosyal medya + uygulama
│   │   └── FooterCopyright.ts  ← Copyright satırı
│   └── floating/
│       └── FloatingPanel.ts    ← Chat + Lens + Scroll-top
├── styles/
│   └── style.css               ← MEVCUT — DEĞİŞTİRİLMEZ (renkler+tema burada)
└── main.ts                     ← Bileşen birleştirme
```

---

## ⚡ GELİŞTİRME SIRASI (Sprint Planı)

### Sprint 1: Header
```
Adım 1 → TopBar.ts         (MCP: navbar, dropdown, buttons, indicators)
Adım 2 → SubHeader.ts      (MCP: mega-menu, popover, navbar)
Adım 3 → SearchArea.ts     (MCP: tabs, search-input, button-group) + Özel: Kayan Placeholder
Adım 4 → WelcomeBar.ts     (MCP: banner, buttons)
Adım 5 → MegaMenu.ts       (MCP: mega-menu) + Özel: 39 kategori veri yapısı
Adım 6 → Responsive test   (mobil hamburger menü, arama collapse)
```

### Sprint 2: Footer
```
Adım 7 → FooterLinks.ts    (MCP: footer — sitemap varyantı)
Adım 8 → FooterGroup.ts    (Özel: logo bandı)
Adım 9 → FooterPolicy.ts   (Basit link satırı)
Adım 10 → FooterSocial.ts  (MCP: footer — social varyantı)
Adım 11 → FooterCopyright.ts (Basit metin)
Adım 12 → Responsive test
```

### Sprint 3: Floating + Entegrasyon
```
Adım 13 → FloatingPanel.ts (MCP: speed-dial + özel)
Adım 14 → Tüm bileşenleri main.ts'de birleştir
Adım 15 → Cross-browser & responsive final test
```

---

## 🤖 CLAUDE DESKTOP KULLANIM PROMPTU

Aşağıdaki prompt, Claude Desktop'ta Flowbite MCP ile adım adım kullanılacaktır:

---

### Prompt Şablonu (Her Adım İçin):

```markdown
## Görev: [Bileşen Adı] Geliştirme

**Proje:** TR TradeHub B2B Marketplace
**Dosya:** src/components/header/[DosyaAdi].ts
**Tech Stack:** Vite 7 + TypeScript + Tailwind CSS v4 + Flowbite v4

### Adım 1: Flowbite bileşenlerini al
Aşağıdaki Flowbite bileşenlerini MCP ile çek:
- `flowbite_get_component: [bileşen-1]`
- `flowbite_get_component: [bileşen-2]`

### Adım 2: Alibaba referansına göre uyarla
Alibaba.com'daki [bölüm adı] yapısını referans alarak:
- [Özellik 1]
- [Özellik 2]
- [Özellik 3]

### Adım 3: Özel geliştirme (varsa)
- [Özel bileşen açıklaması]

### Adım 4: Responsive kontrol
- Desktop (1440px+): [davranış]
- Tablet (768px): [davranış]
- Mobil (< 640px): [davranış]

### Kısıtlamalar:
- ❌ style.css'e DOKUNMA — renkler ve tema zaten tanımlı, mevcut token'ları kullan
- Tailwind CSS v4 utility class kullanılacak
- TypeScript strict mode
- Modüler, tekrar kullanılabilir yapı
```

---

### 🚀 İlk Adım İçin Hazır Prompt:

```markdown
## Görev: TopBar Bileşeni Geliştirme

**Dosya:** src/components/header/TopBar.ts

### Flowbite MCP Çağrıları:
1. `flowbite_get_component: navbar` → Top bar iskelet yapısı
2. `flowbite_get_component: dropdown` → Ülke seçici + Para birimi seçici
3. `flowbite_get_component: buttons` → Giriş Yap + Hesap Oluştur
4. `flowbite_get_component: indicators` → Sepet badge (ürün sayısı)

### Yapı:
Alibaba.com Top Bar referansı ile:
- Sol: Logo (link → "/") + Teslimat ülkesi dropdown (bayrak ikonu + "TR")
- Sağ: Dil/Para birimi ("TRY") + Sepet (badge) + Giriş Yap + Hesap Oluştur
- Yükseklik: 72px, arka plan beyaz, alt kenarlık ince gri

### Responsive:
- Desktop: Tüm elemanlar görünür, yatay düzen
- Tablet: Logo + Sepet + Hamburger menü
- Mobil: Logo + Sepet, diğerleri drawer menüde

### Stil:
- Mevcut style.css'teki theme token'ları kullanılacak (bg-primary, text-primary vb.)
- Yeni renk tanımı YAPILMAYACAK, style.css'e DOKUNULMAYACAK
```
