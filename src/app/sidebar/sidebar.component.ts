import { Component, OnInit } from '@angular/core';
import {faBolt, faHome, faLifeRing, faPlus} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  icons = {
    home: faHome,
    plus: faPlus,
    bolt: faBolt,
    help: faLifeRing
  };

  constructor() { }

  ngOnInit(): void {
  }

}
