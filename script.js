const pujian = [

"Cinta adalah sesuatu yang abadi, aspeknya mungkin berubah, tetapi bukan esensinya",

"Cinta itu tidak selalu melekat pada kebersamaan, tapi melekat pada doa-doa yang disebutkan dalam senyap.",

"Cinta bukanlah tentang saling menatap, tetapi tentang memandang ke luar bersama-sama ke arah yang sama.",

"Cinta itu saling menyukai, bukan saling melukai.",

"Dari semua tempat jauh yang kujangkau, tujuan akhirku tetap menuju engkau.",

"Keberadaanmu terlalu rapi untuk disebut kebetulan.",

"Saat aku tak lagi di sisimu, ku tunggu kau di keabadian.",

"Selamanya, sampai tua, sampai jadi debu, ku di liang yang satu, ku disebelahmu.",

"100 itu sempurna, kamu satu lebih sempurna..",

"Ketika kamu mencintai seseorang, dan kamu mencintai mereka sepenuh hati, maka perasaan itu tidak akan pernah hilang."

];

function gantiPujian(){

let acak=Math.floor(
Math.random()*pujian.length
);

document.getElementById("quote").innerText=
pujian[acak];

}

function tebarBunga(){

for(let i=0;i<24;i++){

let bunga=document.createElement("div");

bunga.className="kelopak";

let simbol=[
"✿","❀","🌸","🌼"
];

bunga.innerHTML=
simbol[
Math.floor(
Math.random()*simbol.length
)
];

bunga.style.left=
Math.random()*window.innerWidth+"px";

bunga.style.top=
Math.random()*250+"px";

document.body.appendChild(bunga);

setTimeout(()=>{
bunga.remove();
},3000);

}

}