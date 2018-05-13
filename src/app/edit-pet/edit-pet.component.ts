import { ActivatedRoute, Router, Params } from '@angular/router';
import { PetsService } from './../pets.service';
import { Component, OnInit } from '@angular/core';
import { Animal } from '../animal';

@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.css']
})
export class EditPetComponent implements OnInit {
  animal = new Animal();
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
          this.animal = result;
        }, (error) => console.log('Error' + error)
      );
      }
    );
  }

  editAnimal() {
    const formData = new FormData();
    formData.append('image', this.animal.image);
    formData.append('name', this.animal.name);
    formData.append('bio', this.animal.bio);
    formData.append('filename', this.animal.filename);
    formData.append('likes', this.animal.likes);
    formData.append('dislikes', this.animal.dislikes);
    this.petsService.editPet('https://hidden-shore-65808.herokuapp.com/api/pets', this.id, formData).subscribe(results => {
      console.log(results, 'success');
      this.router.navigate(['/' + this.id]);
    },
      (error) => console.log(error)
    );
  }

  onFileSelected(event) {
    this.animal.image = event.target.files[0];
    this.animal.filename = event.target.files[0].name;
  }

}
