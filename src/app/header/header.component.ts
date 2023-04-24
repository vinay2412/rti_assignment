import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(){}

  navbarSupportedContent() {
    alert('Hii');
    // let navbar = document.querySelector(".nav-bar");
    // if (navbar.classList.contains("expand")) {
    //   navbar.classList.remove("expand")
    // }
    // else {
    //   navbar.classList.add("expand")
    // }
  }
}
