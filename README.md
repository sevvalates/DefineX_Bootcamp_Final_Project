# DefineX_Bootcamp_Final_Project
 
## 📋 Proje Tanımı
Andshop_vue, mikroservis mimarisiyle geliştirilmiş bir e-ticaret uygulamasının ön yüz arayüzüdür. ProductAPI ile entegre çalışarak ürün yönetimi ve kullanıcı etkileşimlerini sağlar. Uygulamanın ön yüzü Nuxt.js ile geliştirilmiş olup, arka uç tarafı ASP.NET Core Web App teknolojisiyle desteklenmektedir.

## 🚀 Hızlı Başlangıç

## Bağımlılıkları yükle
npm install

## Backend tarafını ayağı kaldır
## Geliştirme sunucusunu başlat
npm run dev          #Uygulama http://localhost:3000 adresinde başlatılacaktır

## İsterler doğrultusunda gerçekleştirilen işlemler :

- Microservis tarafına ApiGateway eklendi.

- Microservislere "https://localhost:44390/api/" den erişiliyor

Mikroservis Bağlantısı:

- API Gateway: https://localhost:44390/api/

- Varsayılan ProductAPI endpoint: https://localhost:44390/api/products

## Andshop_vue Projesi

- Andshop_vue projesi, product verilerini "https://localhost:44390/api/products" API'ından alır.

- Varsayılan olarak "http://localhost:3000/" portunda çalışır.

- Eğer farklı bir portta çalışıyorsa, mikroservis tarafında aşağıdaki değişiklik yapılmalıdır.

**DefineX.ApiGateway/Program.cs:**
![image](https://github.com/user-attachments/assets/7a7efc05-6f81-4dea-b091-001f377b7cd8)


## Projede, **ProductAPI** üzerinden çekilen verilere göre,

-   **Ana Sayfa:**  
    Ürünlerin listelendiği ana sayfa güncellenmiştir. Bu sayfa, kullanıcıların mevcut ürünleri görüntülemesine olanak tanır.
    
-   **Wishlist İşlevselliği:**  
    Kullanıcıların ürünleri **Wishlist**'lerine ekleyebilmesi, çıkarabilmesi ve mevcut wishlist öğelerini görüntüleyebilmesi sağlanmıştır. Bu işlev, kullanıcıların beğendikleri ürünleri kaydetmelerine yardımcı olur.
    
-   **Ürün Detay Sayfası:**  
    Her bir ürünün detaylarının görüntülenebileceği sayfa güncellenmiştir. Kullanıcılar, ürünlerin daha fazla bilgisine erişebilir ve satın alma kararlarını verebilirler.


![image](https://github.com/user-attachments/assets/76862611-3a26-4467-90b5-b746542cc2de)

![image](https://github.com/user-attachments/assets/6e6e78c0-cd20-44e3-bcfc-005938d88ee0)

![image](https://github.com/user-attachments/assets/72be8ab8-54f9-48ea-a463-b58ed13ad0a7)

![image](https://github.com/user-attachments/assets/a8a56544-34dc-4987-a71e-f444db39d7a1)


