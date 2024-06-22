import './toggle-mode.js'
import * as FocusTimer from './FocusTimer/index.js'
import { registerSounds } from './FocusTimer/events.js'

FocusTimer.start(10,0)
registerSounds()