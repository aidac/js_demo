"use strict";
// let skaicius = prompt("ivesk skaiciu nuo 1 iki 10:");
// if (isNaN(skaicius) || skaicius > 10 || skaicius < 1) {
// alert("skaiciu nuo 1 iki 10!");
// } else {
//     document.write("jusu skaicius yra " + skaicius)
// }

// let birthDay;
// let name;

// name = prompt("iveskite savo varda");

// do {
//     birthDay = prompt("iveskite savo gimimo metus");
//     if (isNaN(birthDay)) {
//         alert("gimimo metai turi buti skaicius!");
//     }
// } while (isNaN(birthDay));

// document.write(`sveiki ${name}, kuris gimete ${birthDay} metais`);

// let uzmokestis;
// const biudzetas = 8487300000;
// const darbingi = 1761463;
// let procentas;

// uzmokestis = prompt('Iveskite norimo uzmokescio dydi');

// procentas = (darbingi * ((uzmokestis * 12) * 100)) / (biudzetas);

// if (procentas > 100) {
//     document.write(`Visiems neuzteks! Metini Lietuvos biudzeta virsijote <b>${(procentas.toFixed(2) - 100).toFixed(2)}%</b>`);
// } else {
//     document.write(`Jusu pasirinktas <b>${uzmokestis}e</b> menesinis bazinis uzmokestis sudarys <b>${procentas.toFixed(2)}%</b> metinio Lietuvos biudzeto.
//     <br>Lietuvos biudzetas yra: <b>${(biudzetas/1000000)}mln.</b>
//     <br>Darbingu zmoniu skaicius yra <b>${((darbingi/1000000).toFixed(2))}mln.</b>
//     `);

// }


const hr = "Hondūras";
const dm = "Dominykos respublika";
const nb = "Namibija";
const plotas_hr = 112492;
const plotas_dm = 48315;
const plotas_nb = 825615;
const gyventojai_hr = 9112867;
const gyventojai_dm = 10800857;
const gyventojai_nb = 2113077;

function writeSalis (a, b, c) {
    document.write(`Šalis: <b>${a}</b>, joje gyvena <b>${(b/1000000).toFixed(2)}</b> mln. gyventojų. Jos plotas yra <b>${c}</b> km<sup>2</sup><br>Vienam žmogui tenkantis plotas yra <b>${(c*1000000/b).toFixed(1)}</b> m<sup>2</sup><br><br>`);
}

writeSalis(hr, gyventojai_hr, plotas_hr);
writeSalis(dm, gyventojai_dm, plotas_dm);
writeSalis(nb, gyventojai_nb, plotas_nb);