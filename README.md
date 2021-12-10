# form-pembelian-obat-php-native
Sebuah form pembelian obat yang dibuat dengan php native

Dafar isi
- [Chapter 1 Persyaratan](#chapter-1-persyaratan)
- [Chapter 2 Download dan Deploy](#chapter-2-download-dan-deploy)
- [Chapter 3 Masukan database](#chapter-3-masukan-database)
- [Chapter 4 Finally](#chapter-4-finally)

## Chapter 1 Persyaratan

- PC Windows/Mac/Linux
- [Docker (Installasi dan panduannya ada pada web resmi)](https://www.docker.com/)
- [Visual Code](https://code.visualstudio.com/)
- Browser, bisa chrome/edge/firefox

## Chapter 2 Download dan Deploy

Download form-pembelian-obat-php-native
Unpack file yang di download, misalkan di C:\Form\
Jalankan Docker dan Visual Code
Buka folder C:\Form\ di Visual Code
jalankan perintah "docker-compose up -d"
tunggu hingga docker selesai mendeploy aplikasi

## Chapter 3 Masukan Database

buka web browser, navigasi ke http://localhost:3030/
muncul tampilan Adminer, yaitu semacam aplikasi pengelola database
masukan username : root, dan password = pass, kemudian login
setelah login, buat database baru melalui menu "Create database"
beri nama "data" dan biarkan yang lainnya default, kemudian klik save
pada bagian kiri pilih "DB:" menjadi data, kemudian klik "import"
pada bagian "File upload", upload satu demi satu database yang sudah di download
jika sudah selesai, maka database sudah masuk kedalam sistem

## Chapter 4 Finally

Setelah semuanya selesai dikonfigurasikan, form pembelian obat dapat dibuka di :
http://localhost:3010/
