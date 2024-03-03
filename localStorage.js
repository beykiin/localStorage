
const text=document.getElementById("text")
const btn=document.getElementById("btn")
const btn2=document.getElementById("btn2")
const clear=document.getElementById("clear")
const veriCek=document.getElementById("veriCek")


btn.onclick=()=>{
    localStorage.setItem("text",text.value)  //Veriyi tutar
    localStorage.setItem("text1",text.value)
    localStorage.setItem("text2",text.value)
    localStorage.setItem("text3",text.value)
}
btn2.onclick=()=>{
    veriCek.innerHTML=localStorage.getItem("text") // Veriyi Alıp yazdırır

}
clear.onclick=()=>{
    localStorage.removeItem("text")  //Tek tek temizleme hangi anahtar kelimeyi veriyorsan onu siler
    localStorage.clear()  //Hepsini temizler
}
