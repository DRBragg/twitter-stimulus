import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ['body', 'charCount']
  initialize() {
    this.update()
  }

  update() {
    let count = this.bodyTarget.value.length
    if (count == 1) {
      var message = '1 character'
    } else {
      var message = `${count} characters`
    }
    this.charCountTarget.textContent = message

    if (count > 150) {
      this.charCountTarget.classList.add('text-danger')
    } else {
      this.charCountTarget.classList.remove('text-danger')
    }
  }

  submit(event) {
    var count = this.bodyTarget.value.length
    if (count > 150 || count <= 0) {
      event.preventDefault()
    }
  }
}
