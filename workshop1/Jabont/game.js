function play(){
	//ซ่อนอันแรก
	cookie1.classList.add('cookie-hide')
	//แสดงอันสอง
	cookie2.classList.add('cookie-show')
	//เปลี่ยนตัวหนังสือ
	fortune.innerText = ranDomKamTamNai()
	//แสดงตัวหนังสือ แบบหน่วงเวลา 300 millisecond 
	setTimeout(function(){
		fortune.style.opacity = 1	
	},2500)
}

function ranDomKamTamNai(){
	KamTamNai = [
	'วันนี้อากาศสดชื่น คุณควรออกจากบ้าน แล้วกลับมาติดโควิดนะคะ',
	'ฟ้าฝนไม่เป็นใจ ชวนใครมาห้อง ก็คงไม่ได้ดู Netflix and Chill',
	'อย่าคุยกับทีละป็อป เพราะเป็นคนน่ารักเกินไป',
	'พี่ไอซ์ 16 โคดเมพเลยค้าบ ลุกเพ่',
	'อยากจะซิ่ง ก็ต้องชิ่งก่อนนะ ;)'
	]
	selectKamTamNai = KamTamNai[Math.floor(Math.random() * KamTamNai.length)]
	return selectKamTamNai
}