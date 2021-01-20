# Alışveriş Uygulaması

Kullanıcıların ürün satın alabildiği bir uygulamaya ihtiyaç bulunmaktadır.<br />

Kullanıcılar uygulamanın açılış sayfasında sistemde bulunan tüm ürünleri toplu olarak görebilecek, isterse kategorilere göre ürün filtreleme işlemi yapabilecektir. Ürünler kategoriye göre dinamik olarak filtrelenecek ve ana sayfadaki listede güncellencektir. Kategoriler sistemden direkt olarak alınabilir.

Kullanıcı herhangi bir ürünün detayına giderse ürünü sepete ekleyebilecek ya da favoriye alabilecektir, favoriden kaldırabilecektir.

Sepete eklenen ürünler "Sepetim" ekranına gidildiğinde toplu olarak görüntülenecek, kullanıcı ürünleri satın alabilecektir. Kullanıcı herhangi bir ürünü sepetten kaldırabilecektir. Satın alma işleminde ürünler sepetten kaldırılacak, kullanıcıya bir geri bildirimde bulunulacak ve satın alma işlemi telefonun belleğine kaydedilecektir. Yine "Sepetim" ekranında kullanıcı sipariş geçmişini görüntüleyebilecektir. Bu işlem, ekranda bulunan "Geçmişi Görüntüle" gibi bir buton ile Modal penceresi açılarak gerçekleştirilebilir. Sipariş geçmişinde alınan ürünler ve toplam ödenen tutarın görüntülenmesi gerekmektedir.

Benzer şekilde favoriye eklenen ürünlerde cihazın belleğine kaydedilmesi gerekmektedir. Kısaca sipariş geçmişi ve favori ürünler uygulama açılıp kapansa da silinmemelidir.

**API:** https://fakestoreapi.com/docs

**ÖNEMLİ NOTLAR:**

- Uygulamada custom component yapısı ve custom hook yapısına dikkat edilmeli.
- İş bölümü yapılmasında ve bunun için mevcut reponun Project kısmının kullanılmasında fayda var. (Template kısmından "Basic Kanban" seçebilirsiniz.).
- İş parçacıkları ve görev dağılımı tamamiyle sizin insiyatifinize kalmış.
- Tamamlanan projenin ekran görüntülerini mutlaka bu README üzerinden eklemeyi unutmayın.

![screenshot-2021-01-20_21 19 38 716](https://user-images.githubusercontent.com/56413015/105219541-a0a72600-5b67-11eb-83d0-881472614ff2.png)
![screenshot-2021-01-20_21 20 19 577](https://user-images.githubusercontent.com/56413015/105219568-a866ca80-5b67-11eb-89ea-d9451201617f.png)
![screenshot-2021-01-20_21 20 54 331](https://user-images.githubusercontent.com/56413015/105219601-b288c900-5b67-11eb-91f9-23c9911a3aa0.png)
![screenshot-2021-01-20_21 20 35 824](https://user-images.githubusercontent.com/56413015/105219620-b7e61380-5b67-11eb-80e6-2317c47dd588.png)
![screenshot-2021-01-20_21 20 47 198](https://user-images.githubusercontent.com/56413015/105219629-bae10400-5b67-11eb-8658-c8fda1ad6b34.png)
