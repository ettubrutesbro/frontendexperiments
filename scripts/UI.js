
// SESEME UI custom JS - no jQuery


var nav = document.getElementById("nav")
var container = document.querySelector(".container")
var navs = [].slice.call(nav.children) 



navs.forEach(function(ele,i,arr){
	ele.addEventListener('click',function(){
		// when clicking a nav button
		var name = (ele.id).replace("nav", "")
		var index = navs.indexOf(ele)
		var section = document.getElementById(name)

		var others = [].slice.call(document.getElementsByTagName('section'))
		others.splice(index,1)

		console.log(name + " " + index + " " + section)
		console.log(others)

		section.style["display"] = "block"
		others.forEach(function(ele,i,arr){
			ele.style["display"] = "none"
		})

		// 1. get all sections - HTMLCollection --> array
		// 2. remove section id (name) from that array
		// 3. .style["display"] = "none"


		//fade in test function:
		// Velocity(document.getElementById(name), 
		// 	{opacity: 1},
		// 	{duration: 500})

	console.log(section.offsetHeight)
	
	})

	function stickerDrawer(){
		var categories = [].slice.call(document.querySelectorAll('.stickerCat'))
		var target = document.querySelectorAll('#stickerDrawer .row')

		categories.forEach(function(ele,i,arr){
			ele.addEventListener('click',function(){
				console.log(categories.indexOf(ele)) 
				//this will eventually be key to pulling the correct sticker drawer out
				//load in the correct stickers per category, then run the below anim
				Velocity(target, {height: '2em'},{duration: 500})
				//this would be even better with a stagger....
			})
		})
	} //end stickerdrawer

	function voteDrawer(){
		//section conversate display none
		var button = document.getElementById('switchVote')
		var otherbutton = document.getElementById('switchConv')
		var conv = document.getElementById("conversate")
		var vote = document.getElementById("voteDiv")

		button.addEventListener('click',function(){
			conv.style["display"] = "none"
			button.style["display"] = "none"
			otherbutton.style["display"] = "block"
			vote.style["display"] = "block"
		})
		
		otherbutton.addEventListener('click', function(){
			conv.style["display"] = "block"
			vote.style["display"] = "none"
			button.style["display"] = "block"
			otherbutton.style["display"] = "none"
		})
		

		
	}

window.onload = function(){
	stickerDrawer()
	voteDrawer()
}

})
