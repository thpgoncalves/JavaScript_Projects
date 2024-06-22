import state from './state.js'
import * as el from './elements.js'
import * as sounds from './sounds.js'
import * as timer from './timer.js'

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle('running')

  timer.countdown()
  sounds.btnPressAudio.play()
}

export function set() {
  el.minutes.setAttribute('contenteditable', true)
  el.minutes.focus()
}

export function reset() {
  state.isRunning = false
  document.documentElement.classList.remove('running')
  timer.updateDisplay()

  sounds.btnPressAudio.play()
}

export function addTime() {
  let minutes = Number(state.minutes) + 5

  timer.updateDisplay(minutes)
  
  sounds.btnPressAudio.play()
}

export function subtractTime() {
  let minutes = Number(state.minutes) - 5

  if(minutes < 4) {
    minutes = 0
  }

  timer.updateDisplay(minutes)

  sounds.btnPressAudio.play()
}

export function forestSounds() {
  state.isMute = document.documentElement.classList.toggle('ph-tree-evergreen-music')

  if(state.isMute) {
    sounds.forestSound.play()
    return
  }
  
  sounds.forestSound.pause()
}

export function rainSounds() {
  state.isMute = document.documentElement.classList.toggle('ph-cloud-rain-music')

  if(state.isMute) {
    sounds.rainSound.play()
    return
  }
  
  sounds.rainSound.pause()
}

export function coffeeshopSounds() {
  state.isMute = document.documentElement.classList.toggle('ph-storefront-music')

  if(state.isMute) {
    sounds.coffeeshopSound.play()
    return
  }
  
  sounds.coffeeshopSound.pause()
}

export function fireSounds() {
  state.isMute = document.documentElement.classList.toggle('ph-flame-music')

  if(state.isMute) {
    sounds.fireSound.play()
    return
  }
    
  sounds.fireSound.pause()
}
