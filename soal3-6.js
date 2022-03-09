// Soal 3
// Lakukan desctucturing pada kode dibawah sehingga Budi Tersimpan pada variabel bernama a, Sita tersimpan pada variabel bernama b dan Ayu tersimpan pada variable bernama c
// Jawaban
const foo = ["Budi", "Sita", "Ayu"];
const [a, b, c] = foo;
console.log("a =", a);
console.log("b =", b);
console.log("c =", c);

// Soal 4
// Kalian memiliki sebuah varibel berikut (let bdays = ['10-17', '05-19', '20-19']). Ubahlah tanda (-) dalam variabel tersebut menjadi (/) sehingga output yang akan kelaur dalam console menjadi ['10/17', '05/19', '20/19']
// Jawaban:
let bdays = ["10-17", "05-19", "20-19"];
bdays[0] = "10/17";
bdays[1] = "05/19";
bdays[2] = "20/19";
console.log(bdays);

// Soal 5
// Kalin memiliki varibel berikut (let value = [1,2,3,4,5,6]). Kalikan setiap value dalam array tersebut dua, sehingga ketika dipanggil variabel value mengeluarkan aoutput berupa [2, 4, 6, 8, 10, 12]
// Jawaban:
let value = [1, 2, 3, 4, 5, 6];
value = value.map((x) => x * 2);
console.log(value);

// Soal 6
// Kalian memiliki variabel berikut (let arr = [1.5, 2.56, 5.1, 12.33]) Bulatkan ke atas varibel tersebut sehingga otuput yang dihasilkan adalah [2, 3, 5, 12]
// Jawaban:
let arr = [1.5, 2.56, 5.1, 12.33];
arr = arr.map((x) => Math.round(x));
console.log(arr);
