import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathService {

  private readonly BASE_URL = 'http://localhost:8080/math'

  constructor(
    private readonly http: HttpClient
  ) { }

  mathCalculate(x: number, y: number, z: number) {
    return this.http.get<number>(`${this.BASE_URL}/${x}/${y}/${z}`)
  }

}
