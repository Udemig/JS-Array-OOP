"use strict"
var tarih = new Date() // date
document.write('tarih: ' + tarih + "</br>")
document.write('tarih: toUTCString: ' + tarih.toUTCString() + "</br>")
document.write('tarih: toDateString: ' + tarih.toDateString() + "</br>")
document.write('tarih: getDate: ' + tarih.getDate() + "</br>")
document.write('tarih: getDay: ' + tarih.getDay() + "</br>")
document.write('tarih: getFullYear: ' + tarih.getFullYear() + "</br>")
document.write('tarih: getMonth: ' + tarih.getMonth() + "</br>")
document.write('tarih: getHours: ' + tarih.getHours() + "</br>")
document.write('tarih: getMinutes: ' + tarih.getMinutes() + "</br>")
document.write('tarih: getMilliseconds: ' + tarih.getMilliseconds() + "</br>")
document.write('tarih: getSeconds: ' + tarih.getSeconds() + "</br>")
document.write('tarih: getTime: ' + tarih.getTime() + "</br>")

tarih.setFullYear('2010')
document.write('tarih: getFullYear: ' + tarih.getFullYear() + "</br>")

var liste = ["elma", "uzum", "armut", "kivi", "domates"]
var list3 = ["elma", "uzum", "armut", "kivi", "domates"]
var liste1 = new Array(1, 6, 7, 2, 3, -1)

document.write('liste 0 : ' + liste[0] + "</br>")
document.write('liste : ' + liste + "</br>")
document.write('liste length : ' + liste.length + "</br>")
document.write('liste sort : ' + liste.sort() + "</br>")

liste.push("biber")
document.write('liste : ' + liste + "</br>")

liste.pop()
document.write('liste : ' + liste + "</br>")

liste[1] = "kara uzum"
document.write('liste : ' + liste + "</br>")

document.write('liste isArray : ' + Array.isArray(liste) + "</br>")
document.write('liste instanceof : ' + (liste instanceof Array) + "</br>")
document.write('liste toString : ' + liste.toString() + "</br>")
document.write('liste join : ' + liste.join(" / ") + "</br>")
liste.shift()
document.write('liste : ' + liste + "</br>")
liste.unshift("buyuk armut")
document.write('liste : ' + liste + "</br>")
delete liste[2]
document.write('liste : ' + liste + "</br>")
liste.splice(1, 0, "kavun", "karpuz")
document.write('liste : ' + liste + "</br>")
document.write('liste splice: ' + liste.splice(1, 3) + "</br>")
document.write('liste concat: ' + liste.concat(liste1, list3) + "</br>")
document.write('liste slice: ' + liste.slice(1) + "</br>")
document.write('liste reverse: ' + liste.reverse() + "</br>")


var liste4 = new Array(1, 60, 5, 9, 10, 32, 7, 2, 3, -1)
document.write('liste sort: ' + liste4.sort(function (a, b) { return b - a }) + "</br>")

switch (7) {
    case 0:
        document.write(' bugun pazar' + "</br>")
        break
    case 1:
        document.write(' bugun pazartesi' + "</br>")
        break
    case 2:
    case 3:
        document.write(' bugun carsamba' + "</br>")
        break
    case 4:
        document.write(' bugun persembe' + "</br>")
        break
    case 5:
        document.write(' bugun cuma' + "</br>")
        break
    case 6:
        document.write(' bugun cumartesi' + "</br>")
        break
    default:
        document.write(" bilinmeyen gun "+ "</br>")
}



var list6 = ["elma", "uzum", "armut", "kivi", "domates", "elma1", "uzum1", "armut1", "kivi1", "domates1"]
document.write("ilk " + list6[0]+ "</br>")
document.write("ikinci " + list6[1]+ "</br>")
document.write("ucuncu " + list6[2]+ "</br>")

document.write("-- -- -- - -- - -- - - "+ "</br>")
// i = 0 1 2 3 4 5 6 7 8 9 10
// uzunluk = 10
for(var i = 0; i < list6.length; i+=2){
    document.write("i " + i + " " + list6[i]+ "</br>")
}


document.write(selamla)
for(i in list6){
    if (i==2) continue
    if (i==5) break
    document.write("i " + i + " " + list6[i]+ "</br>")
}

document.write("-- -- -- - -- - -- - - "+ "</br>")

var sayac = 0; // 1 2 3.. 10
// uzunluk = 10
while(sayac < list6.length){
    document.write("sayac " + sayac + " " + list6[sayac]+ "</br>")
    sayac++
}

document.write("-- -- -- - -- - -- - - "+ "</br>")

var yeniSayac = 0

do{
    document.write("yeniSayac " + yeniSayac + " " + list6[yeniSayac]+ "</br>")
    yeniSayac++
} while(yeniSayac < list6.length)

document.write("-- -- -- - -- - -- - - "+ "</br>")

var selamla
document.write("liste typeof " + typeof list6+ "</br>")
document.write("tarih typeof " + typeof tarih+ "</br>")
document.write("memo typeof " + typeof "memo"+ "</br>")
document.write("sayi typeof " + typeof 12+ "</br>")
document.write("function typeof " + typeof function(){}+ "</br>")
document.write("null typeof " + typeof null+ "</br>")
document.write("false typeof " + typeof false+ "</br>")
document.write("selamla typeof " + typeof selamla+ "</br>")

document.write("-- -- -- - -- - -- - - "+ "</br>")

document.write("liste constructor " + list6.constructor+ "</br>")
document.write("tarih constructor " +  tarih.constructor+ "</br>")
document.write("memo constructor " +  "memo".constructor+ "</br>")
document.write("sayi constructor " +  (12).constructor+ "</br>")
document.write("function constructor " +  function(){}.constructor+ "</br>")
document.write("false constructor " +  false.constructor+ "</br>")

document.write("-- -- -- - -- - -- - - "+ "</br>")

document.write("true " + Number(true)+ "</br>")
document.write("false " + Number(false)+ "</br>")


try {
    selamla.constructor
} catch (error) {
    document.write("error:  " + error+ "</br>")
} finally {
    document.write("ben hep calisirim "+ "</br>")
}


document.write("try catch devam  "+ "</br>")


var a = 2
alert(a)

var kisi = {
    ad: "Mehmo",
    ulke: "TR",
    yas: 29,
}

for(i in kisi){
    document.write("i " + i  + " " + kisi[i]+ "</br>")

}






