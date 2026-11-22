import * as readlinesync from "readline-sync";

let tiketBioskop: string[] = ["Avengers", "Spiderman", "Batman", "Superman"];

console.log("Daftar Film yang Tersedia:");
for (let i = 0; i < tiketBioskop.length; i++) {
  console.log(`${i + 1}. ${tiketBioskop[i]}`);
}
//p