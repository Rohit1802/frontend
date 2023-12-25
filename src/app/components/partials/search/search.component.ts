import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})

export class SearchComponent {
    SearchTerm = ''

    constructor(activedRoute: ActivatedRoute,private router: Router){
        activedRoute.params.subscribe((params) =>{
          if(params.SearchTerm) this.SearchTerm = params.SearchTerm
        })
    }

    search(searchTerm: string):void{
      if(searchTerm)
      this.router.navigateByUrl('/search/' + searchTerm)
    }
}
