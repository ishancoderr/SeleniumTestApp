import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-go-blucontact',
  standalone: true,
  imports: [],
  templateUrl: './go-blucontact.component.html',
  styleUrl: './go-blucontact.component.css'
})
export class GoBLUContactComponent {
  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Contact-GoBLU');
  }
}
