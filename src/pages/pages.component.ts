import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.service';
@Component({
  selector: 'first-page',
  templateUrl: './first.component.html'
})
export class FirstPageComponent {

  constructor(public apiService: ApiService,
    ){}
  links: Links[] = [
    { href: "https://example.com", title: "Example" },
    { href: "https://google.com", title: "Google" },
    { href: "https://stackoverflow.com", title: "StackOverflow" }
  ]
  images = [
    {path: '../assets/p1.jpg'},
    {path: '../assets/p2.jpg'},
    {path: '../assets/p3.jpg'}
  ];

  //get list of users
  async getUsers(){
    let data: any = await this.apiService.GetUsers();
    alert(JSON.stringify(data));
  }
}

@Component({
  selector: 'second-page',
  templateUrl: './second.component.html'
})
export class SecondPageComponent implements OnInit {
  loremipsum: string;
  ngOnInit() {
    this.loremipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Haeret in salebra. Duo Reges: constructio interrete. Hoc etsi multimodis reprehendi potest, tamen accipio, quod dant. Quacumque enim ingredimur, in aliqua historia vestigium ponimus. Ergo illi intellegunt quid Epicurus dicat, ego non intellego? Sine ea igitur iucunde negat posse se vivere?";
  }
}

@Component({
  selector: 'third-page',
  templateUrl: './third.component.html'
})
export class ThirdPageComponent {
  count = 0;
}

@Component({
  selector: 'search-page',
  templateUrl: './search.component.html'
})
export class SearchPageComponent {
  search: string;
  /**
   * Submits the search
   */
  submit() {
    if (this.search) {
      alert(`Your search was: ${this.search}`);
    } else {
      alert("Please input a valid search.");
    }
  }
}
interface Links {
  icon?: string;
  title: string;
  href: string;
}