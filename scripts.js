// Interactivity demo 2


// zoom in and out of moon
var trigger = document.querySelector('.trigger')
var body = document.querySelector('body')
var moon = document.querySelector('.moon')
var	audio = document.querySelector('audio')
var play = document.querySelector('.play')

trigger.addEventListener('click', zoom)

function zoom() {
	console.log('it works')

	if (body.id != 'zoom') {
		body.id = 'zoom'
		moon.textContent = 'Breathe in'
	} else {
		body.id = ''
		moon.textContent = 'Breathe out'

	}
}


play.addEventListener('click', playAudio)

function playAudio() {
	audio.play()
}

// toggle breathe in and out
