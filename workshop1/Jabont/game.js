guest = prompt('Hello! username sama: ')
console.log(guest + `sama `)

function play(){
	drink = ['เหล้า','เบียร์','สาเก','ไวน์','บรั่นดี','โซดา','วิสกี้','น้ำเปล่า','โซดา','น้ำแข็ง']
	drinkSize = drink.length
	rand = Math.floor(Math.random() * drinkSize)

	console.log(`สุ่มได้เลข ${rand}`)

	Drinktoday = drink[rand]
	alert(`คุณ ${guest} ต้องได้ดื่ม ${Drinktoday} วันนี้`)
   // food = foodArray[Math.floor(Math.random()*foodArray.length)] inwza version ไม่แนะนำ

	console.log(`วิ่งไปซื้อ ${Drinktoday} เดี๋ยวนี้เพื่อรับแต้ม luck +100% `)
}