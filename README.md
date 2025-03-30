# DefineX_Bootcamp_Final_Project
 
## 📋 Proje Tanımı
Andshop_vue, mikroservis mimarisiyle geliştirilmiş bir e-ticaret uygulamasının ön yüz arayüzüdür. ProductAPI ile entegre çalışarak ürün yönetimi ve kullanıcı etkileşimleri sağlar.
## 🚀 Hızlı Başlangıç

# Bağımlılıkları yükle
npm install
# Geliştirme sunucusunu başlat
npm run dev #Uygulama http://localhost:3000 adresinde başlatılacaktır

# İsterler doğrultusunda gerçekleştirilen işlemler :

## Microservise tarafına ApiGateway eklendi. Microservislere "https://localhost:44390/api/" den erişiliyor
Mikroservis Bağlantısı:
API Gateway: https://localhost:44390/api/
Varsayılan ProductAPI endpoint: https://localhost:44390/api/products

## Andshop_vue Projesi

Andshop_vue projesi, product verilerini "https://localhost:44390/api/products" API'ından alır.

Varsayılan olarak "http://localhost:3000/" portunda çalışır.

Eğer farklı bir portta çalışıyorsa, mikroservis tarafında aşağıdaki değişiklik yapılmalıdır.

DefineX.ApiGateway/Program.cs:
![image](https://github.com/user-attachments/assets/85a9d54e-9cc0-4aeb-96e5-49d35d8ed1dd)




