import { ActivatedRoute, Router, Params } from '@angular/router';
import { PetsService } from './../pets.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-pet',
  templateUrl: './one-pet.component.html',
  styleUrls: ['./one-pet.component.css']
})
export class OnePetComponent implements OnInit {
  animal = [];
  id: string;
  constructor(private petsService: PetsService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.petsService.getPet('https://hidden-shore-65808.herokuapp.com/api/pets', this.id)
          .subscribe(result => {
            this.animal.push(result);
          }, (error) => console.log('Error' + error)
        );
        }
      );
    console.log(this.animal);
  }

  deleteAnimal() {
    this.petsService.deletePet('https://hidden-shore-65808.herokuapp.com/api/pets', this.id)
      .subscribe(result => {
        console.log('success');
        this.router.navigate(['/']);
      }, (error) => console.log('Error' + error)
    );
  }


}
