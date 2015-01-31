
// SESEME UI custom JS - no jQuery

var stickerDrawerOpen = false

var nav = document.getElementById("nav")
var container = document.querySelector(".container")
var navs = [].slice.call(nav.children) 

var currentSection



navs.forEach(function(ele,i,arr){
	ele.addEventListener('click',function(){
		// when clicking a nav button
		var name = (ele.id).replace("nav", "")
		var index = navs.indexOf(ele)
		var section = document.getElementById(name)

		if(currentSection==section){
		}

		var others = [].slice.call(document.getElementsByTagName('section'))
		others.splice(index,1)

		console.log(name + " " + index + " " + section)
		//console.log(others)
		console.log('section height is ' + section.style["height"])
		Velocity(section,'transition.slideUpIn')
		// if(currentSection!=undefined){
		// 	Velocity(currentSection,'transition.slideUpDown')
		// }
		// section.style["display"] = "block"
		// // fadeslidedown others, fadeslideup section
		// others.forEach(function(ele,i,arr){
		// 	ele.style["display"] = "none"
		// })

		//currentSection = section
	})

	function stickerDrawer(){
		var categories = [].slice.call(document.querySelectorAll('.stickerCat'))
		var target = document.querySelectorAll('#stickerDrawer .row')

		categories.forEach(function(ele,i,arr){
			ele.addEventListener('click',function(){
				if(!stickerDrawerOpen){
					//this will eventually be key to pulling the correct sticker drawer out
					//load in the correct stickers per category, then run the below anim
					Velocity(target, {height: '2em'},{duration: 500})
					//this would be even better with a stagger....
					stickerDrawerOpen = true
				}else if(stickerDrawerOpen){
					Velocity(target, {height: 0}, {duration: 500})
					stickerDrawerOpen = false
				}
			})
		})
	} //end stickerdrawer

	function voteConv(){
		//section conversate display none
		var section = document.getElementById("talk")
		var voteButton = document.getElementById('switchVote')
		var convButton = document.getElementById('switchConv')
		var conv = document.getElementById("conversate").querySelectorAll(".columns")
		conv = [].slice.call(conv)
		var vote = document.getElementById("voteDiv").querySelectorAll("div")
		vote = [].slice.call(vote)

		voteButton.addEventListener('click',function(){
			if(stickerDrawerOpen){
				var target = document.querySelectorAll('#stickerDrawer .row')
				Velocity(target, {height: 0}, {duration: 500})
				stickerDrawerOpen = false
			}
			Velocity(section, {height: "8em"}, {duration: 700})

			Velocity(voteButton, "transition.slideRightOut", {duration: 200})
			Velocity(convButton, "transition.slideLeftIn", {delay: 1000})
			Velocity(conv, "transition.slideRightOut", {duration: 350})
			setTimeout(function(){
				Velocity(vote, "transition.slideLeftIn", {stagger: 150},{duration: 500})
			},350)
		})
		
		convButton.addEventListener('click', function(){
			Velocity(section, {height: "15em"}, {duration: 700})
			Velocity(voteButton, "transition.slideRightIn", {delay: 1000})
			Velocity(convButton, "transition.slideLeftOut", {duration: 300})
			Velocity(vote, "reverse", {duration: 200})
			setTimeout(function(){
				vote.forEach(function(ele){
					ele.style["display"] = 'none'
				})
				Velocity(conv, "transition.slideRightIn", {stagger: 10})
			},350)
			
		
		})	
	} 

	window.onload = function(){
		stickerDrawer()
		voteConv()
	}

})
