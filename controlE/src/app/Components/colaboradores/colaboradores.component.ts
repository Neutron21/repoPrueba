import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.css']
})
export class ColaboradoresComponent implements OnInit {

  loading: boolean;

  constructor() { 
    this.loading = true
  }

  ngOnInit() {
    setTimeout(() => {
      this.loading = false
    }, 800);
  }

}
