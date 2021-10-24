function set_dokmai() {
	choice = [c1.value,c2.value]
	console.log(choice)
	total = randomInteger(6,30)
	flowerLeaf = document.querySelector('#flowerLeaf');
	flowerLeafHTML = ``;
	flowerLeaf.innerHTML = ``;
	for(let i = 0; i<total; i++){
		flowerLeafHTML += `<div class="leaf leaf-${i}" style="--i:${i}"></div>`
	}
	flowerLeaf.innerHTML = flowerLeafHTML
	edok = document.querySelector('#edok')
	edok.style.setProperty('--total',total)
	setTimeout(()=>{
		count = 0;
		ded = setInterval(()=>{
			if (count<total) {
				console.log(count)
				call.innerText = choice[count%2]
				document.querySelector('.leaf-'+count).style.opacity = '0'
				count++
			}else{
				alert(`ชะตากรรมบอกไว้ ว่าคุณควรจะ `+choice[(count+1)%2])
				clearInterval(ded)
			}
		},500)
	},1000)
}

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}