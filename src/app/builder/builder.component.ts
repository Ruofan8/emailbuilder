import { Component, OnInit } from '@angular/core';
import { MdCardModule } from '@angular/material';
import { BuilderService} from './builder.service'

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent implements OnInit {
  builders: Array<Object>;
  constructor(private service: BuilderService) { }

  ngOnInit() {
    this.builders = this.service.getTemplate();
  }

}
