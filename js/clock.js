let fullName = prompt("Adınızı giriniz.")
if ((fullName != "") && (fullName != null)) {
    document.getElementById("myName").innerHTML = `${fullName[0].toUpperCase()}${fullName.slice(1)}`
}
else if (fullName == "")

    alert("Lütfen bir isim giriniz!");

else if (fullName == null)

    alert("Giriş Yapılamadı!");


setInterval(() => {
    let date = new Date()
    let day = date.getDay()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()
    let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
    
    let clock = document.querySelector('#myClock')
    
    hour = (hour < 10) ? "0" + hour : hour
    minute = (minute < 10) ? "0" + minute : minute
    second = (second < 10) ? "0" + second : second
    clock.innerHTML = `${hour}:${minute}:${second} ${days[day]}`

},1000);