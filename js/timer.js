const refs = {
  startBtn: document.querySelector('button[data-action-start]'),
  stopBtn: document.querySelector('button[data-action-stop]'),
  clockface: document.querySelector('.js-clockface'),
}

class Timer {
  constructor({ onTick }) {
    this.intervalId = null
    this.isActive = false
    this.onTick = onTick

    this.init()
  }

  init() {
    this.onTick(this.getTimeComponents(0))
  }

  pad(value) {
    return String(value).padStart(2, '0')
  }

  getTimeComponents(time) {
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)))
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000))

    return { hours, mins, secs }
  }

  start() {
    if (this.isActive) {
      return
    }

    const startTime = Date.now()
    this.isActive = true

    this.intervalId = setInterval(() => {
      this.onTick(this.getTimeComponents(Date.now() - startTime))
    }, 1000)
  }

  stop() {
    clearInterval(this.intervalId)
    this.isActive = false
    this.onTick(this.getTimeComponents(0))
  }
}

function updateClockface({ hours, mins, secs }) {
  refs.clockface.textContent = `${hours}:${mins}:${secs}`
}

const timer = new Timer({
  onTick: updateClockface,
})

refs.startBtn.addEventListener('click', timer.start.bind(timer))

refs.stopBtn.addEventListener('click', timer.stop.bind(timer))
