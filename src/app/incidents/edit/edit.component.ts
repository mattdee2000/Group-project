//These are imported
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Incident } from 'src/app/models/incident.model';
import { IncidentService } from 'src/app/services/incident.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
//Exports, important for updating and making new items
export class EditComponent implements OnInit {
  _id: number;
  header: string;
  incident: Incident = {
    _id: 0,
    email: '',
    phone: '',
    assetTag: '',
    location: '',
    issue: '',
    note: '',
    eta: '',
    progress: '',
    empName: ''
  } 
  constructor(private routher: Router, private route: ActivatedRoute, private incidentService: IncidentService) { }
// Data fetching!!
  ngOnInit(): void {
    this._id = +this.route.snapshot.paramMap.get('_id')!;
    this.header = this._id === 0? 'Add Incident' : 'Edit Incident'

    if(this._id != 0){        
      this.incident = this.incidentService.onGetIncident(this._id)!;
    }
  }
//Functionalities
//Submission from the form
  onSubmit(form: NgForm) {
    let incident: Incident = {
      _id: form.value._id,
      email: form.value.email,
      phone: form.value.phone,
      assetTag: form.value.assetTag,
      location: form.value.location,
      issue: form.value.issue,
      note: form.value.note,
      eta: form.value.eta,
      progress: form.value.progress,
      empName: form.value.empName
    }


    if(this._id === 0){
      this.incidentService.onAdd(incident);
    }
    else{
      this.incidentService.onUpdate(incident);
    }

    this.routher.navigateByUrl('incident');

  }
}
