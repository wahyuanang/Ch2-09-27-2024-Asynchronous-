const fs = require("fs").promises;
const fsSync = require("fs");

//membaca isi dari dile index.txt
let loveLetter = fsSync.readFileSync("./index.txt", "utf-8");

// proses untuk memanggil dari variable yang di ambil dari file index.txt
console.log(`Ini adalah line ke 8 ${loveLetter}`);

// membuat file baru untuk membalas surat
const loveFeedback = "hai cinta";
fsSync.writeFileSync("./balasan.txt", loveFeedback);

// fs.mkdir("COBA_BIKIN_FOLDER_2")

fsSync.writeFileSync("./index.txt", "ini ketimpa ngga cintanya part 2");

// ini async nya
async function bacaSuratCinta() {
  try {
    const bacaSuratCinta = await fs.readFile("./index.txt", "utf-8");
    console.log(`ini adalah surat cinta dari ${bacaSuratCinta}`);
  } catch (error) {
    console.log(error);
}
}

bacaSuratCinta();

// promises
fs.readFile("./index.txt", "utf-8")
.then ((isiSuratCinta) => { 
  loveLetter = isiSuratCinta;
  console.log(loveLetter);
})
.catch((error) => {
  console.error("error", error);
})

console.log(`ini adalah line ke 40 ${loveLetter}`);
