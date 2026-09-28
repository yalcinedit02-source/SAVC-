export type Case1Document = {
  id: string;
  title: string;
  content: string;
};

export const CASE1_DOCUMENTS: Case1Document[] = [
  {
    id: "hts-records",
    title: "Telefon Görüşme Kayıtları (HTS)",
    content: `[KURUM ADI GİZLENDİ]
GSM HTS (Telefon Görüşme Kayıtları)
Dosya No: 2026/0806-001
Hat Sahibi: Mehmet Ç.
Telefon No: 05XX XXX XX XX
İncelenen Tarih: 30.07.2026 - 06.08.2026

Tarih       Saat    Arayan                  Aranan                 Tür      Süre
30.07.2026  08:14   Murat Ç.                Mehmet Ç.              Gelen    02:34
30.07.2026  09:42   0216 318 XX XX          Mehmet Ç.              Gelen    00:21
30.07.2026  11:26   Leyla A.                Mehmet Ç.              Gelen    03:14
30.07.2026  14:55   Murat Ç.                Mehmet Ç.              Gelen    04:48
30.07.2026  17:22   Şerif Ç.                Mehmet Ç.              Gelen    05:36
30.07.2026  20:18   Murat Ç.                Mehmet Ç.              Gelen    08:42
30.07.2026  21:47   Şerif Ç.                Mehmet Ç.              Gelen    04:36

31.07.2026  08:37   Murat Ç.                Mehmet Ç.              Gelen    03:12
31.07.2026  10:11   Şerif Ç.                Mehmet Ç.              Gelen    00:00
31.07.2026  10:18   Mehmet Ç.               Şerif Ç.               Giden    05:52
31.07.2026  12:46   0216 447 XX XX          Mehmet Ç.              Gelen    00:16
31.07.2026  16:42   Murat Ç.                Mehmet Ç.              Gelen    06:15
31.07.2026  19:08   Leyla A.                Mehmet Ç.              Gelen    02:41
31.07.2026  21:24   Leyla A.                Mehmet Ç.              Gelen    04:18

01.08.2026  09:56   Şerif Ç.                Mehmet Ç.              Gelen    03:27
01.08.2026  11:43   Murat Ç.                Mehmet Ç.              Gelen    06:07
01.08.2026  14:52   0216 286 XX XX          Mehmet Ç.              Gelen    00:13
01.08.2026  18:31   Murat Ç.                Mehmet Ç.              Gelen    02:57
01.08.2026  19:54   Leyla A.                Mehmet Ç.              Gelen    03:08
01.08.2026  21:37   Murat Ç.                Mehmet Ç.              Gelen    05:22

02.08.2026  09:42   Şerif Ç.                Mehmet Ç.              Gelen    06:44
02.08.2026  11:58   Murat Ç.                Mehmet Ç.              Gelen    02:46
02.08.2026  15:19   Şerif Ç.                Mehmet Ç.              Gelen    00:00
02.08.2026  15:25   Mehmet Ç.               Şerif Ç.               Giden    04:53
02.08.2026  17:18   Murat Ç.                Mehmet Ç.              Gelen    03:11
02.08.2026  20:13   Murat Ç.                Mehmet Ç.              Gelen    09:27

03.08.2026  08:29   Murat Ç.                Mehmet Ç.              Gelen    02:18
03.08.2026  11:06   Nazif U.                Mehmet Ç.              Gelen    00:00
03.08.2026  12:41   0216 391 XX XX          Mehmet Ç.              Gelen    00:19
03.08.2026  15:52   Murat Ç.                Mehmet Ç.              Gelen    04:36
03.08.2026  18:52   Şerif Ç.                Mehmet Ç.              Gelen    00:00
03.08.2026  19:01   Mehmet Ç.               Şerif Ç.               Giden    04:58
03.08.2026  21:18   Leyla A.                Mehmet Ç.              Gelen    02:47

04.08.2026  08:55   Murat Ç.                Mehmet Ç.              Gelen    05:44
04.08.2026  10:37   0216 477 XX XX          Mehmet Ç.              Gelen    00:24
04.08.2026  12:21   Murat Ç.                Mehmet Ç.              Gelen    10:15
04.08.2026  15:14   Şerif Ç.                Mehmet Ç.              Gelen    03:19
04.08.2026  17:33   Leyla A.                Mehmet Ç.              Gelen    01:52
04.08.2026  19:41   Murat Ç.                Mehmet Ç.              Gelen    03:57
04.08.2026  21:16   Şerif Ç.                Mehmet Ç.              Gelen    00:00
04.08.2026  21:22   Mehmet Ç.               Şerif Ç.               Giden    03:41

05.08.2026  08:46   Murat Ç.                Mehmet Ç.              Gelen    02:52
05.08.2026  09:18   0216 421 XX XX          Mehmet Ç.              Gelen    00:36
05.08.2026  10:14   Murat Ç.                Mehmet Ç.              Gelen    03:08
05.08.2026  11:36   Leyla A.                Mehmet Ç.              Gelen    01:49
05.08.2026  12:08   Nazif U.                Mehmet Ç.              Gelen    00:00
05.08.2026  13:27   0216 388 XX XX          Mehmet Ç.              Gelen    00:22
05.08.2026  15:43   0216 542 XX XX          Mehmet Ç.              Gelen    00:17
05.08.2026  16:47   Murat Ç.                Mehmet Ç.              Gelen    05:34
05.08.2026  17:31   Leyla A.                Mehmet Ç.              Gelen    02:14
05.08.2026  18:03   Şerif Ç.                Mehmet Ç.              Gelen    00:00
05.08.2026  18:10   Mehmet Ç.               Şerif Ç.               Giden    07:43
05.08.2026  19:36   Murat Ç.                Mehmet Ç.              Gelen    03:41
05.08.2026  20:11   0216 467 XX XX          Mehmet Ç.              Gelen    00:11
05.08.2026  21:05   Mehmet Ç.               Kadir Y.               Giden    00:46
05.08.2026  22:32   Kadir Y.                Mehmet Ç.              Gelen    00:00
05.08.2026  23:46   Nazif U.                Mehmet Ç.              Gelen    00:00
05.08.2026  23:52   Nazif U.                Mehmet Ç.              Gelen    00:00
05.08.2026  23:58   Nazif U.                Mehmet Ç.              Gelen    00:00

06.08.2026  00:07   Nazif U.                Mehmet Ç.              Gelen    00:00
06.08.2026  00:14   Nazif U.                Mehmet Ç.              Gelen    00:00
06.08.2026  00:21   Nazif U.                Mehmet Ç.              Gelen    00:00`,
  },
  {
    id: "crime-scene-report",
    title: "Olay Yeri İnceleme Raporu",
    content: `[KURUM ADI GİZLENDİ]
OLAY YERİ İNCELEME RAPORU

Dosya No: 2026/0806-001
Olay Tarihi: 06.08.2026
Olay Saati: 00:30
İnceleme Başlangıcı: 01:32
İnceleme Bitişi: 05:18
Olay Yeri: Pendik / [ŞEHİR GİZLENDİ], ........ Mahallesi, ........ Sokak, No:14, Kat:3, Daire:7
Mağdur: Mehmet Ç.
Doğum Tarihi: 01.03.1960

İNCELEME TALİMATI

Savcılık talimatı üzerine [KURUM ADI GİZLENDİ] ekiplerince olay yerine intikal edilmiş, olay yerinin güvenliği sağlandıktan sonra ayrıntılı kriminal incelemeye başlanmıştır.

GENEL GÖZLEMLER

Olay yerine ulaşıldığında bina çevresinin polis ekipleri tarafından emniyet şeridi ile çevrildiği görülmüştür.
İtfaiye ekiplerince daire giriş kapısının zor kullanılarak açıldığı tespit edilmiştir.
[KURUM ADI GİZLENDİ] ekipleri tarafından şahsın yaşamını yitirdiği değerlendirilmiş olup olay yeri muhafaza altına alınmıştır.
Daire içerisinde yapılan ilk incelemede evin genel düzeninin korunmuş olduğu görülmüştür.
Mobilyalarda devrilme, eşyalarda dağınıklık veya boğuşmaya işaret edebilecek herhangi bir bulguya rastlanmamıştır.
Ev içerisinde bulunan televizyon, elektronik eşyalar, cüzdan, banka kartları, anahtarlar ve diğer değerli eşyaların yerlerinde olduğu görülmüştür.
Hırsızlık veya yağma amacıyla yapıldığı değerlendirilebilecek herhangi bir arama izine rastlanmamıştır.
Daire giriş kapısı ile pencere kilitlerinde dışarıdan zorlanmaya ilişkin herhangi bir bulgu tespit edilmemiştir.
Tüm pencerelerin içeriden kilitli olduğu görülmüştür.

KORİDOR

Koridor zemini temiz olup sürüklenme izine rastlanmamıştır.
Koridorda herhangi bir eşya dağınıklığı veya boğuşma izi tespit edilmemiştir.
Duvarlarda darbe, kan lekesi veya dikkat çekici herhangi bir fiziksel bulguya rastlanmamıştır.

SALON

Salon düzenli durumdadır. Mobilyaların yerlerinde olduğu görülmüştür.
Sehpa üzerinde günlük gazete, televizyon kumandası ve gözlük bulunduğu tespit edilmiştir.
Televizyonun kapalı olduğu görülmüştür.
Salon içerisinde boğuşmaya işaret edebilecek herhangi bir bulgu elde edilememiştir.

MUTFAK

Mutfak genel olarak düzenlidir.
Lavabo içerisinde yıkanmış olduğu değerlendirilen bir adet tabak ve bir adet çay bardağı tespit edilmiştir.
Masa üzerinde yarısı içilmiş bir bardak su bulunduğu görülmüştür.
Çöp kovasında günlük evsel atıklar dışında dikkat çekici herhangi bir materyale rastlanmamıştır.
Mutfak dolaplarında veya çekmecelerinde karıştırılma izine rastlanmamıştır.

YATAK ODASI

Yatak odası düzenli durumdadır. Yatak yapılmış vaziyettedir.
Elbise dolaplarının kapalı olduğu görülmüştür.
Çekmecelerde arama yapıldığına dair herhangi bir bulguya rastlanmamıştır.
Oda içerisinde boğuşmaya işaret edecek herhangi bir iz bulunmamaktadır.

BANYO

Mağdur Mehmet Ç. banyo zemininde sırtüstü vaziyette bulunmuştur.
Baş bölgesinin yakınında yoğun miktarda kan birikintisi tespit edilmiştir.
Başın arka kısmının zemine temas ettiği değerlendirilen bölgede kan yoğunluğunun arttığı görülmüştür.
Kan lekelerinin büyük bölümünün baş bölgesine yakın alanda bulunduğu tespit edilmiştir.
Banyo zemininde sürüklenme izine rastlanmamıştır.
Mağdura ait olduğu değerlendirilen bir çift ev terliği banyo içerisinde ayak hizasına yakın konumda bulunmuştur.
Terliklerde herhangi bir yırtılma, kopma veya olağan dışı deformasyon tespit edilmemiştir.
Lavabo kenarında sınırlı miktarda kan lekesi görülmüştür.
Klozet kapağının kapalı olduğu tespit edilmiştir.
Banyo içerisinde bulunan havlu askısında kırılma, kopma veya zorlamaya ilişkin herhangi bir bulguya rastlanmamıştır.

DELİLLER

Olay yerinin genel görünümünü gösteren toplam 87 adet dijital fotoğraf çekilmiştir.
Daire içerisinde toplam 17 farklı noktada parmak izi çalışması yapılmıştır.
10 farklı noktadan biyolojik örnek alınmıştır.
Kan örnekleri laboratuvar incelemesi amacıyla muhafaza altına alınmıştır.
Mağdura ait cep telefonu delil torbasına alınmıştır.
Ev içerisinde bulunan ilaç kutuları inceleme amacıyla muhafaza altına alınmıştır.
Olay yerinin ayrıntılı krokisi hazırlanmıştır.

PARMAK İZİ İNCELEMESİ

Kapı kolları, lavabo, cep telefonu, masa, sandalye, banyo kapısı ve diğer uygun yüzeylerde parmak izi çalışması yapılmıştır.
Elde edilen parmak izlerinin büyük çoğunluğunun mağdur Mehmet Ç.'ye ait olduğu değerlendirilmiştir.
Bazı yüzeylerde kısmi nitelikte parmak izleri elde edilmiş ancak söz konusu izlerin kimlik tespitine elverişli olmadığı belirlenmiştir.
Olayın failini doğrudan gösterebilecek nitelikte yabancı parmak izi tespit edilememiştir.

İLK KRİMİNAL DEĞERLENDİRME

Olay yerinde dışarıdan zorla girildiğine ilişkin herhangi bir bulgu elde edilememiştir.
Ev içerisinde boğuşmaya işaret edecek belirgin iz bulunmamıştır.
Hırsızlık veya yağma suçunu düşündürecek herhangi bir bulguya rastlanmamıştır.
Olay yerindeki mevcut fiziksel bulgular ölüm nedenini kesin olarak ortaya koymaya yeterli görülmemiştir.
Kesin ölüm nedeninin otopsi sonucunda belirlenmesinin uygun olacağı değerlendirilmiştir.

SONUÇ

Olay yerinde yapılan ayrıntılı inceleme sonucunda ölümün oluş şekli ve kesin nedeni mevcut fiziksel deliller ile belirlenememiştir.
Toplanan biyolojik örnekler, parmak izi örnekleri ve diğer fiziksel deliller ileri kriminal inceleme yapılmak üzere [KURUM ADI GİZLENDİ] gönderilmiştir.`,
  },
  {
    id: "dna-report",
    title: "Biyolojik Delil (DNA) İnceleme Raporu",
    content: `[KURUM ADI GİZLENDİ]
BİYOLOJİK DELİL (DNA) İNCELEME RAPORU

Dosya No: 2026/0806-001
Olay Tarihi: 06.08.2026
Olay Yeri: Pendik / [ŞEHİR GİZLENDİ]
Mağdur: Mehmet Ç.
Rapor Tarihi: 09.08.2026
Raporu Hazırlayan: [KURUM ADI GİZLENDİ]

İNCELEME AMACI

Olay yerinden elde edilen biyolojik örneklerin DNA analizlerinin yapılarak elde edilen profillerin karşılaştırılması ve olayın aydınlatılmasına katkı sağlayabilecek biyolojik bulguların tespit edilmesi amacıyla inceleme gerçekleştirilmiştir.

İNCELEMEYE GÖNDERİLEN DELİLLER

DNA-01: Banyo zeminindeki kan örneği
DNA-02: Banyo duvarındaki kan sıvamaları
DNA-03: Lavabo kenarından alınan sürüntü örneği
DNA-04: Banyo kapı kolundan alınan sürüntü örneği
DNA-05: Koridor kapı kolundan alınan sürüntü örneği
DNA-06: Cep telefonu üzerinden alınan sürüntü örneği
DNA-07: Yatak odası kapısından alınan sürüntü örneği
DNA-08: Banyoda bulunan havludan alınan örnek
DNA-09: Mağdurun tırnak altı örnekleri
DNA-10: Mağdurun kıyafetlerinden alınan örnekler

Karşılaştırma amacıyla DNA-K1: Mehmet Ç. ve DNA-K2: Murat Ç. referans DNA örnekleri laboratuvara gönderilmiştir.

İNCELEME SONUÇLARI

DNA-01 numaralı örnekten elde edilen DNA profili Mehmet Ç. referans profili ile uyumludur.
DNA-02 numaralı örnekten elde edilen DNA profili Mehmet Ç. referans profili ile uyumludur.
DNA-03 numaralı örnekten elde edilen DNA profili Mehmet Ç. referans profili ile uyumludur.
DNA-04 numaralı örnekten elde edilen DNA profili Mehmet Ç. referans profili ile uyumludur.
DNA-05 numaralı örnekten elde edilen DNA profili Mehmet Ç. referans profili ile uyumludur.
DNA-06 numaralı örnekten elde edilen DNA profili Mehmet Ç. referans profili ile uyumludur.
DNA-07 numaralı örnekten elde edilen DNA profili Mehmet Ç. referans profili ile uyumludur.
DNA-08 numaralı örnekten elde edilen DNA profili Mehmet Ç. referans profili ile uyumludur.
DNA-09 numaralı tırnak altı örneklerinde yalnızca Mehmet Ç.'ye ait DNA profili tespit edilmiş olup üçüncü şahsa ait değerlendirilebilir nitelikte biyolojik profile rastlanmamıştır.
DNA-10 numaralı kıyafet örneklerinde Mehmet Ç.'ye ait DNA profili tespit edilmiştir.

Mağdurun olay yerinde bulunmasının ardından olay yerine girerek babasına fiziksel temasta bulunduğu tespit edilen Murat Ç.'nin referans DNA örneği ile yapılan karşılaştırmada, mağdurun gömlek ön kısmı ve sağ omuz bölgesinden alınan temas örneklerinde Murat Ç.'ye ait DNA profili tespit edilmiştir. Söz konusu biyolojik temasın olay sonrası mağdura sarılması ile uyumlu olduğu değerlendirilmiştir.

GENEL DEĞERLENDİRME

Olay yerinden elde edilen biyolojik deliller üzerinde yapılan incelemelerde mağdur Mehmet Ç.'ye ait DNA profili dışında, olayın failini doğrudan gösterebilecek nitelikte üçüncü bir şahsa ait değerlendirilebilir DNA profili elde edilememiştir.
Murat Ç.'ye ait DNA profili yalnızca mağdura olay sonrasında fiziksel temas edildiği değerlendirilen bölgelerde tespit edilmiş olup mevcut bulgular, tek başına suç isnadı oluşturacak nitelikte değerlendirilmemiştir.
Mevcut biyolojik deliller doğrultusunda olayın failini belirlemeye yönelik kesin bir DNA bulgusuna ulaşılamamıştır.

RAPORU DÜZENLEYEN
[KURUM ADI GİZLENDİ]
ONAYLANMIŞTIR`,
  },
  {
    id: "autopsy-report",
    title: "Ölü Muayene ve Otopsi Raporu",
    content: `[KURUM ADI GİZLENDİ]
ÖLÜ MUAYENE VE OTOPSİ RAPORU

Dosya No: 2026/0806-001
Cumhuriyet Savcılığı: [KURUM ADI GİZLENDİ]
Otopsi Tarihi: 06.08.2026
Otopsi Saati: 10:30

KİMLİK BİLGİLERİ

Adı Soyadı: Mehmet Ç.
Doğum Tarihi: 01.03.1960
Cinsiyeti: Erkek

DIŞ MUAYENE

Yaklaşık 172 cm boyunda, 78 kg ağırlığında erkek cesedi incelenmiştir.
Ölüm katılığının tüm vücutta gelişmiş olduğu görülmüştür.
Ölüm lekelerinin sırtta ve vücudun alt kısımlarında sabitlendiği tespit edilmiştir.
Ceset üzerinde ateşli silah yaralanmasına rastlanmamıştır.
Kesici veya delici alet yaralanmasına rastlanmamıştır.
Boyun bölgesinde boğmaya veya asıya işaret edecek herhangi bir bulgu tespit edilmemiştir.
Başın arka kısmında yaklaşık 6 cm uzunluğunda düzensiz kenarlı açık yara bulunduğu görülmüştür.
Yara çevresinde yoğun kanama bulguları mevcuttur.
Her iki el ve ön kollarda savunma yarası olarak değerlendirilebilecek kesik, sıyrık veya darp izi tespit edilmemiştir.
Tırnak altlarından biyolojik örnek alınmıştır.

İÇ MUAYENE

Saçlı deri kaldırıldığında başın arka kısmında yaygın yumuşak doku kanaması görülmüştür.
Kafatasının arka bölümünde kırık hattı tespit edilmiştir.
Beyin zarı altında yaygın kanama (Subdural Hematom) saptanmıştır.
Beyin dokusunda travmaya bağlı ödem bulguları görülmüştür.
Göğüs boşluğu organlarında travmatik yaralanmaya rastlanmamıştır.
Kalpte yaşa bağlı koroner damar hastalığına ait bulgular izlenmiş olup ölüm nedeni ile doğrudan ilişkili olmadığı değerlendirilmiştir.
Akciğerlerde aspirasyona ilişkin belirgin bulgu saptanmamıştır.
Karaciğer, böbrek ve diğer iç organlarda ölüm nedenini açıklayabilecek travmatik patoloji tespit edilmemiştir.

TOKSİKOLOJİK İNCELEME

Kan, idrar ve mide içeriğinden örnekler alınarak toksikolojik incelemeye gönderilmiştir.
Uyuşturucu maddeye rastlanmamıştır.
Alkol tespit edilmemiştir.
Uyku ilacı, sakinleştirici veya bilinç kaybına neden olabilecek herhangi bir toksik madde tespit edilmemiştir.

PATOLOJİK DEĞERLENDİRME

Mevcut bulgular ölümün kafa travmasına bağlı gelişen beyin kanaması sonucu meydana geldiğini göstermektedir.
Baş bölgesindeki travmanın yüksek şiddetli künt bir darbe sonucunda oluştuğu değerlendirilmiştir.
Yaralanmanın oluş şeklinin yalnızca basit düşme mekanizması ile kesin olarak açıklanmasının mümkün olmadığı kanaatine varılmıştır.
Olay yeri bulguları, cesedin bulunduğu pozisyon ve travmanın özellikleri birlikte değerlendirildiğinde üçüncü kişi etkisinin tamamen dışlanamayacağı değerlendirilmiştir.

TAHMİNİ ÖLÜM ZAMANI

Cesette gözlenen ölüm katılığı, ölüm lekeleri ve iç organ bulguları birlikte değerlendirildiğinde ölümün otopsiden yaklaşık 10-14 saat önce gerçekleştiği değerlendirilmiştir.

SONUÇ VE KANAAT

1. Mehmet Ç.'nin ölümünün kafa travmasına bağlı gelişen beyin kanaması sonucu meydana geldiği,
2. Baş bölgesinde tespit edilen künt travmatik yaralanmanın ölümcül nitelikte olduğu,
3. Yaralanmanın basit düşme mekanizması ile kesin olarak açıklanamadığı,
4. Toksikolojik incelemede ölüm nedeni ile ilişkili herhangi bir uyuşturucu, alkol veya toksik madde tespit edilmediği,
5. Olay yeri bulguları ve otopsi bulguları birlikte değerlendirildiğinde üçüncü kişi müdahalesi ihtimalinin dışlanamadığı,
6. Ölümün adli nitelikte değerlendirilmesi gerektiği,
hususlarında oy birliği ile kanaat bildirilmiştir.

ADLİ TIP UZMANI
[KURUM GÖREVLİSİ]
İmza
ONAYLANMIŞTIR`,
  },
  {
    id: "camera-records",
    title: "Kamera Görüntüsü İnceleme Tutanakları (2 kayıt)",
    content: `KAMERA GÖRÜNTÜSÜ İNCELEME TUTANAĞI — KAMERA 01

Dosya No: 2026/0806-001
Konum: Apartman Giriş Holü
İnceleme Tarihi: 06.08.2026
Kayıt Süresi: 02 Dakika 15 Saniye
İncelenen Saat Aralığı: 05.08.2026 / 22:00:00 - 22:02:15

22:00:08 — Esnaf lokantasına ait motosikletli kurye apartman önüne gelmektedir.
22:00:17 — Kurye apartman giriş kapısından içeri girmektedir.
22:00:31 — Kurye 3. kattaki dairenin ziline ilk kez basmaktadır.
22:00:46 — Kapının açılmaması üzerine ikinci kez zile basmaktadır.
22:01:08 — Kurye yaklaşık 20 saniye beklemektedir.
22:01:29 — Apartman görevlisi Fatih K. giriş katından gelerek kurye ile konuşmaktadır.
22:01:47 — Kurye siparişin teslim edilemediğini belirterek apartmandan ayrılmaktadır.
22:02:15 — Görüntü sonlanmaktadır.

KAMERA GÖRÜNTÜSÜ İNCELEME TUTANAĞI — KAMERA 02

Dosya No: 2026/0806-001
Konum: Apartman Giriş Holü
İnceleme Tarihi: 06.08.2026
Kayıt Süresi: 01 Dakika 42 Saniye
Saat Aralığı: 00:28:10 - 00:29:52

00:28:10 — Nazif Ç. isimli şahıs apartman girişine gelmektedir.
00:28:27 — Şahsın zil panelinden ilgili daireyi aradığı görülmektedir.
00:28:54 — Herhangi bir cevap alınamamaktadır.
00:29:07 — Nazif Ç. cep telefonuyla arama yaptığı görülmektedir.
00:29:26 — Apartman görevlisi Fatih K. girişe gelmektedir.
00:29:39 — İki şahıs kısa süre konuşmaktadır.
00:29:52 — Görüntü sonlanmaktadır.

SONUÇ

İncelenen görüntülerde herhangi bir üçüncü şahsın apartmana giriş veya çıkış yaptığı tespit edilememiştir.`,
  },
];