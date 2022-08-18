// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
// import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import { formClick } from '../components/_form_click'
import { loginAnim } from '../components/_log_in_anim'

Rails.start()
// Turbolinks.start()
ActiveStorage.start()

window.onload = function() {
  formClick()
  loginAnim()
}
