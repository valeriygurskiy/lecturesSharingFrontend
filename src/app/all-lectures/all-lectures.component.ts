import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-all-lectures',
  templateUrl: './all-lectures.component.html',
  styleUrls: ['./all-lectures.component.css']
})
export class AllLecturesComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  lectures: any[];

  ngOnInit(): void {
    this.httpClient.get<any>('http://localhost:8080/lectures').subscribe(value => this.lectures = value);
  }

}
