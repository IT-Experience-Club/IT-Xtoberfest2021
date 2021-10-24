guest = prompt('สวัสดี คุณชื่ออะไร')
console.log(`user ชื่อว่า `+guest)

function play(){
	valoid = ['vanellope','ฉาน','merinq']
    valo = valoid.lenght
	rand = Math.floor(Math.random() * valo)

	console.log(`สุ่มได้เลข ${rand}`)

	who = valoid[rand]
	alert(`คุณ ${guest} คุณเป็นลูกทีมของ ${valoid}`)

	console.log(`รอบนี้ทีม ${rand} ชนะะ`)
}
