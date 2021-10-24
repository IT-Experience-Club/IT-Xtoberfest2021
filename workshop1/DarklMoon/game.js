guest = prompt('Hello, what\'s your name, sir?')
console.log(`Name user is ${guest}`)

function play(){
    ask = prompt('Do you want to play game? \n \'Yes\' or \'No\'')
    
    game_name = ['Leauge of Legend', 'Valorant', 'Dota2', 'Brawlhalla', 'Minecraft']
    size_name = game_name.length
    
    if (ask == 'Yes'){
        alert('let\' go');
        
        rand = Math.floor(Math.random() * size_name)
        console.log(`Random Num ${rand}`)
        game = game_name[rand]
	    
        alert(`I think you should play ${game} \n Good Luck!!!`)
        console.log(`Display >>> ${game}`)

    } else if (ask == 'No') {
        alert('Ok, have a nice day!');
    } else {
        alert('You have to reply only "Yes" or "No"')
        play()
    }
    
    
}