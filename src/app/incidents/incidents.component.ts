import { Component, OnInit } from '@angular/core';
import { IncidentService } from '../services/incident.service';
import { Incident } from '../models/incident.model';
@Component({
  selector: 'app-incidents',
  templateUrl: './incidents.component.html',
  styleUrls: ['./incidents.component.css']
})
export class IncidentsComponent implements OnInit {
  incidents!: Incident[];

  constructor(private incidentService:IncidentService) { }

  ngOnInit(): void {
    this.incidents = this.incidentService.onGet();
  }
  
  onDelete(_id: Number){
    this.incidentService.onDelete(_id);
  }

}
