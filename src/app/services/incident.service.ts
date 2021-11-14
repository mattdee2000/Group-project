import { Injectable } from '@angular/core';
import { Incident } from '../models/incident.model';
// App functionalities
@Injectable({
  providedIn: 'root'
})
// Where model data is stored
export class IncidentService {
  incidents: Incident[] = [
    {
    _id: 1,
    email: "kennypowers@mfindusties.com",
    phone: "4139671111",
    assetTag: "DL-1234-LT",
    location: "Room 402",
    issue: "Spilled soup on laptop",
    note: "This laptop needs a new keyboard, pending repair parts",
    eta: "December 12th 2021",
    progress: "In progress",
    empName: "Kenny Powers"
  }
];

constructor() { }
//Functional code
//Value Fetching
  onGet() {
    return this.incidents;
  }

  onGetIncident(_id: number) {
    return this.incidents.find(x=>x._id === _id);  
  }
//Add functionality
  onAdd(incident: Incident){
    this.incidents.push(incident);
  }
//Delete functionality
  onDelete(_id: Number){
    let incident = this.incidents.find(x=>x._id === _id);
    let index = this.incidents.indexOf(incident!,0);
    this.incidents.splice(index,1);

  }
//Update functionality
  onUpdate(incident: Incident){
    let oldIncident = this.incidents.find(x=>x._id === incident._id);
    oldIncident!.assetTag = incident.assetTag;
    oldIncident!.email = incident.email;
    oldIncident!.empName = incident.empName;
    oldIncident!.eta = incident.eta;
    oldIncident!.issue = incident.issue;
    oldIncident!.location = incident.location;
    oldIncident!.note = incident.note;
    oldIncident!.phone = incident.phone;
    oldIncident!.progress = incident.progress;

  }
}
