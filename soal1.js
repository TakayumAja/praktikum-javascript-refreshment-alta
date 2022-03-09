var a = 5;
let b = "kampus merdeka";
const nama = "Budi";
let terdaftar = false;
terdaftar = true;
let lengkap_arr = [a, b, nama, terdaftar];

function perkenalan() {
  let asal = "indonesia";
  return console.log(
    "perkenalkan nama saya " +
      nama +
      " nomor urut " +
      a +
      " sekarang sedang mengikuti " +
      b +
      "bersal dari " +
      asal
  );
}

if (terdaftar === true) {
  console.log(nama + " terdaftar sebagai kegiatan kampus merdeka");
}

a = b;
// nama = b; //

// Soal 1a.
// Ambillah index ke 2 dalam array di baris 5 dan tampilankakn dalam console
// Jawaban:
console.log("array = " + lengkap_arr[2]);

// console.log("asal diakses = " + asal);
console.log("a adalah = " + a);
console.log("b adalah = " + b);

// Soal 1b
// Ubah kode diatas sehingga dapat menampilakn baris 22 di dalam console
// Jawaban:
// Merubah value dari variabel terdaftar = true;

// Soal 1c
// Lakukan pemanggilan untuk function perkenalan pada baris 31
// Jawaban:
perkenalan();

// Soal 1d
// Kalian bebas mengubah kode diatas sehingga menampilkan output paa console seperti pada gambar di bawah
// Jawaban:
// Hasil output dalam bentuk gambar

// === Soal 2 ===

// Soal 2a.
// Jelaskan kenapa baris 21, 22, 23 tidak dapat tampil
// Jawaban:
// Karena baris tersebut tidak akan dieksekui jika nilai dari variabel terdaftar masih bernilai flase, sehingga harus di rubah value dari variable terdaftar menjadi true

// Soal 2b.
// Jelaskan kenapa deklarasi pada baris 26 menyebabkan error
// Jawaban:
// Karena varibel nama dideklarasikan dengan const nama, yang mana jika variabel yang didekrasikan dengan const tidak dapat di tugaskan kembali / tidak dapat di reassigned.

// Soal 2c.
// Dengan melakukan komen pada baris ke 26, apakah baris 28 dapat di ekseskui? jelaskan
// Jawaban:
// Tidak dapat dieksesui, karena baris 26 dan 28 tidak keterkaitannya. baris 28 tidak dapat diekseskui karena variabel asal tidak didefinisikan disebabkan variabel asal merupakan variabel lokal dalam scope function yang bernama perkenelan(); sehingga tidak dapat dieksekusi jika diluar scope function perkenalan()
