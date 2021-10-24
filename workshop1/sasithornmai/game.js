function play(){
	cookie1.classList.add('cookie-hide')
    cookie2.classList.add('cookie-show')
    fortune.innerText = ranDomKamTamNai()[0]
    trans.innerText = ranDomKamTamNai()[1]
    setTimeout(function(){
    fortune.style.opacity = 1
    trans.style.opacity = 1
    },2000)
}

function ranDomKamTamNai(){
    KamTamNai = [
        ['Avada Kedavra', 'คำสาปพิฆาต ผู้โดนคำสาปนี้ ตายทันทีโดยไม่เจ็บปวด'],
        ['Wingadium Leviosa', 'ทำให้วัตถุลอยขึ้น'],
        ['Silencio', 'ทำให้บางสิ่งเงียบเสียงลงทันที'],
        ['Confundo', 'ทำให้ผู้ต้องคาถาสับสน มึนงง ขี้ลืมมากเกินและมีแนวโน้มทำตามคำสั่งง่าย ๆ โดยไม่คิดก่อน'],
        ['Locomotor Mortis', 'ผูกขาเข้าด้วยกัน ทำให้ผู้ต้องคำสาปไม่อาจเคลื่อนที่ด้วยขาได้ไม่ว่าวิธีการใด ๆ เป้าหมายสามารถกระโดดได้เมื่อต้องคาถานี้ แต่ไม่สามารถเดินได้หากไม่แก้คาถาก่อน'],
        ['Piertotum Locomotor', 'เสกให้รูปปั้นและชุดเกราะมีชีวิตทำตามคำสั่งของผู้ร่ายคาถา'],
        ['Rictusempra', 'ผู้ต้องคาถามีความรู้สึกเหมือนถูกจั๊กจี๊ ปรากฏแสงสีเงิน']
    ]
    selectKamTamNai = KamTamNai[Math.floor(Math.random() * KamTamNai.length)]
	return selectKamTamNai
}
