
// SESEME UI custom JS - no jQuery


var nav = document.getElementById("nav")
var container = document.querySelector(".container")
var navs = [].slice.call(nav.children) 

window.onload = function(){
}

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
	})
	
})
