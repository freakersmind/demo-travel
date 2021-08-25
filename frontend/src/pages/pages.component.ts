import { ActivatedRoute, Route, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.service';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'first-page',
  templateUrl: './first.component.html'
})

export class FirstPageComponent {

  constructor(public apiService: ApiService,public router: Router
    ){}

    async ngOnInit() {
      await this.getCountries();
      this.selectedCountry = this.countries[0].id;
    }
  images = [
    {path: '../assets/p1.jpg'},
    {path: '../assets/p2.jpg'},
    {path: '../assets/p3.jpg'}
  ];
  countries=[];

  selectedCountry: string;

  //get list of countries
  async getCountries(){
    let data: any = await this.apiService.GetCountries();
    if(data){
      this.countries=data.countries;
    }
    
  }

  //get list of countries
  async getCountryDetails(){
    this.router.navigate(["/second", this.selectedCountry]);
  }
}

@Component({
  selector: 'second-page',
  templateUrl: './second.component.html'
})
export class SecondPageComponent implements OnInit {
  countryDetails=[];
  images = [
    {path: '../assets/p1.jpg'},
    {path: '../assets/p2.jpg'},
    {path: '../assets/p3.jpg'}
  ];
  constructor(public apiService: ApiService,private route: ActivatedRoute
    ){}
  async ngOnInit() {
    await this.getCountryDetails(this.route.snapshot.params.id);
  }

  //fetch country details
  async getCountryDetails(id){
    let data: any = await this.apiService.GetCountryDetails(id);
    if(data){
      this.countryDetails = data;
      debugger;
      this.countryDetails = [];
      data.travel_history.forEach(element => {
        if(this.countryDetails.findIndex(x => 
            (x.location === element.location && x.activities_performed === element.activities_performed))==-1){
            let modElem =element;
            modElem['travel_images__images_list'] = [];
            let imgPath = {path: null};
            debugger;
            imgPath.path = '../assets/'+element.travel_images__images
              .substring(element.travel_images__images.indexOf('traveled_places')+16
                , element.travel_images__images.length);
            modElem['travel_images__images_list'].push(imgPath);
            delete modElem["travel_images__images"];
            this.countryDetails.push(modElem);
        }else{
          let imgPath = {path: null};
          debugger;
          imgPath.path = '../assets/'+element.travel_images__images
            .substring(element.travel_images__images.indexOf('traveled_places')+16
              , element.travel_images__images.length);
          this.countryDetails[this.countryDetails.findIndex(x => 
            (x.location === element.location && x.activities_performed === element.activities_performed))]
              .travel_images__images_list.push(imgPath);
        }
      });
    }
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