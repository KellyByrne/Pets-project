import { ActivatedRoute, Router } from '@angular/router';
import { PetsService } from './../pets.service';
import { Animal } from './../animal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent implements OnInit {
  animal = new Animal();
  image;
  constructor(private petsService: PetsService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
  }

  createAnimal() {
    console.log(this.animal);
    const formData = new FormData();
    formData.append('image', this.animal.image);
    formData.append('name', this.animal.name);
    formData.append('bio', this.animal.bio);
    formData.append('filename', this.animal.filename);
    formData.append('likes', this.animal.likes);
    formData.append('dislikes', this.animal.dislikes);
    this.petsService.addPet('https://hidden-shore-65808.herokuapp.com/api/pets', formData).subscribe(results => {
      // this.petsService.addPet('http://localhost:3000/api/pets', formData).subscribe(results => {
      console.log(results);
      this.router.navigate(['/']);
      },
      (error) => console.log(error)
    );
  }

  onFileSelected(event) {
    this.animal.image = event.target.files[0];
    this.animal.filename = event.target.files[0].name;
  }

}
