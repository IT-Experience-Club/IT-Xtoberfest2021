guest = prompt('สวัสดี คุณชื่ออะไร')
console.log(`user ชื่อว่า `+guest)

dday = prompt('วันนี้วันอะไร')
console.log('user บอกว่าวันนี้คือวัน' +dday)

function play(){

    sayhi = ['วันนี้จะได้เจอรักแท้', 'กินข้าวเยอะๆ นะ', 'คุณลืมนอนหรอ!', 'Ohayoooo', 'เบ้บ']
	ransayhi = sayhi.length
	rand = Math.floor(Math.random() * ransayhi)

	sayhii = sayhi[rand]
	alert(`คุณ ${guest} สิ่งที่ฉันอยากบอกคุณในวัน ${dday} คือ ${sayhii}`)

	console.log(`วันนี้จะ ${sayhii}`)
}
