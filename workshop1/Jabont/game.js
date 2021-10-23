guest = prompt('สวัสดี คุณชื่ออะไร')
console.log(`user ชื่อว่า `+guest)

function play(){
	menu = ['กะเพราไก่','มาม่าสับ','ไข่เจียว']
	menuSize = menu.length
	rand = Math.floor(Math.random() * menuSize)

	console.log(`สุ่มได้เลข ${rand}`)

	food = menu[rand]
	alert(`คุณ ${guest} ควรจะลองทาน ${food}`)

	console.log(`รอบนี้ได้กิน ${food}`)
}