import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';

@Injectable()
export class PetsService {

  constructor(private http: Http) { }

    // tslint:disable-next-line:one-line
    getPets(url){
     return this.http.get(url)
      .map(
        (response: Response) => {
          const data = response.json();
          return data;
        }
      ).catch(
        (error: Response) => {
          console.log(error);
          console.log('error', error.json());
          return Observable.throw('Something went wrong');
        }
      );
    }

    getPet(url, id) {
      return this.http.get(url + '/' + id)
        .map(
          (response: Response) => {
            const data = response.json();
            return data;
          }
        ).catch(
          (error: Response) => {
            console.log(error);
            console.log('error', error.json());
            return Observable.throw('Something went wrong');
          }
      );

    }

    addPet(url, animal) {
      return this.http.post(url, animal)
      .map(
        (response: Response) => {
          const data = response.json();
          return data;
        }
      ).catch(
        (error: Response) => {
          console.log(error);
          return Observable.throw('Something went wrong');
        }
      );
    }

    editPet(url, id, animal) {
      return this.http.post(url + '/' + id + '/edit', animal)
      .map(
        (response: Response) => {
          const data = response.json();
          return data;
        }
      ).catch(
        (error: Response) => {
          console.log(error);
          return Observable.throw('Something went wrong');
        }
      );
    }

    deletePet(url, id) {
      return this.http.delete(url + '/' + id + '/delete')
      .map(
        (response: Response) => {
          const data = response.json();
          return data;
        }
      ).catch(
        (error: Response) => {
          console.log(error);
          return Observable.throw('Something went wrong');
        }
      );

    }





}
