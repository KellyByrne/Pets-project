import { PetsService } from './../pets.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-pets',
  templateUrl: './all-pets.component.html',
  styleUrls: ['./all-pets.component.css']
})
export class AllPetsComponent implements OnInit {
  allpets = [];
  constructor(private petsService: PetsService) { }

  ngOnInit() {
    this.petsService.getPets('https://hidden-shore-65808.herokuapp.com/api/pets').subscribe(results => {
      this.allpets.push(results);
    },
    (error) => console.log(error)
  );
   console.log(this.allpets);
  }

}
