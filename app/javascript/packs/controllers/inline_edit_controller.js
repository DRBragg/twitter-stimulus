import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = [ 'body', 'form', 'delete']

  toggle() {
    this.bodyTarget.classList.add('d-none')
    this.formTarget.classList.remove('d-none')
    this.deleteTarget.classList.remove('d-none')
  }
}
