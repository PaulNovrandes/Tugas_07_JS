var angka = [171,172,173,174,175,176,177,178,179,180];

for (var i = 1; i < angka.length; i++) {
  console.log(angka[i]);
}
console.log("===========================");
for (var x of angka) {
  if (x % 2 === 0) {
    console.log(x);
  }

}

// perbedaan dari kedua code di atas terletak pada:
// 1. panjangnya baris code, for biasa memeiliki baris code lebih panjang.
// 2. pada for of kita tidak perlu mengatur index i dahulu.
// 3. pada for kita dapat customisasi range dari index i.
