import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map }from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  constructor(private http: HttpClient) { }

  public getData(): Observable<any> {
    return this.http.get<any>('users');
  }
  public getDataPosts(): Observable<any> {
    return this.http.get<any>('posts');
  }
  public getCurrentUser(id: number): Observable<any> {
    return this.http.get<any>(`users/${id}`);
  }
  public postNewtUser(item: any): Observable<any> {
    console.log(item)
    return this.http.post<any>('users', item);
  }

  public getDataGender(gender:string): Observable<any> {
    let newArray = []
    return this.http.get<any>('users')
    .pipe(
      map(
        (vl, i) => {

        vl.data.forEach(element => {
          if(element.gender === gender){
            newArray.push(element)
          }
        });

        console.log(newArray)
        return newArray;
      }
      )
    );
  }













  private subject = new Subject<any>();

    sendMessage(message: string) {
        this.subject.next({ text: message });
    }

    clearMessages() {
        this.subject.next();
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}
