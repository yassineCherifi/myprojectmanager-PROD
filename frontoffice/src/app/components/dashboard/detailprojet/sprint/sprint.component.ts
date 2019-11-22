import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SprintService } from 'src/app/services/sprint.service';
import { ActivatedRoute } from '@angular/router';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sprint',
  templateUrl: './sprint.component.html'
})


export class SprintComponent implements OnInit {
  project_id;
  sprints = [];
  modelSprint = {
    title: '',
    startDate: {},
    endDate: {},
    status: '0',
    issues: ''
  }
  modelSprintEdit = {
    _id: '',
    title: '',
    startDate: {},
    endDate: {},
    status: '0',
    issues: ''
  }

  modelDate;


  constructor(private sprintService: SprintService, private route: ActivatedRoute, private calendar: NgbCalendar) { }

  ngOnInit() {
    this.route.parent.params.subscribe(params => {
      this.project_id = params['id'];
    })
    this.getSprints();
    this.modelSprint.startDate = this.calendar.getToday();
    this.modelSprint.endDate = this.calendar.getToday();

  }

  getSprints() {
    this.sprintService.getSprints(this.project_id).subscribe(data => this.sprints = data['sprints']);
  }

  onSubmitSprint(form: NgForm) {
    let startDate = form.value.dp1;
    let endDate = form.value.dp2;
    form.value.dp1 = startDate.day + "/" + startDate.month + "/" + startDate.year;
    form.value.dp2 = endDate.day + "/" + endDate.month + "/" + endDate.year;
    console.log(form.value);
    this.sprintService.addSprint(this.project_id, form.value).subscribe(
      res => {
        form.resetForm();
        this.modelSprint.status = '0';
        this.getSprints()
      },
      err => {
        console.log(err);
      }
    );
  }
  updateModalEditSprint(sprint) {
    this.modelSprintEdit._id = sprint._id;
    this.modelSprintEdit.title = sprint.title;
    let tmpDateStart = sprint.startDate.split("/");
    this.modelSprintEdit.startDate = { year: parseInt(tmpDateStart[2]), month: parseInt(tmpDateStart[1]), day: parseInt(tmpDateStart[0]) };
    let tmpDateEnd = sprint.endDate.split("/");
    this.modelSprintEdit.endDate = { year: parseInt(tmpDateEnd[2]), month: parseInt(tmpDateEnd[1]), day: parseInt(tmpDateEnd[0]) };
    this.modelSprintEdit.status = sprint.status;
    //this.modelSprintEdit.issues = sprint.issues[0];
  }
  onSubmitEditSprint(form: NgForm) {
    let startDate = form.value.dp1;
    let endDate = form.value.dp2;
    form.value.dp1 = startDate.day + "/" + startDate.month + "/" + startDate.year;
    form.value.dp2 = endDate.day + "/" + endDate.month + "/" + endDate.year;
    this.sprintService.editSprint(this.project_id, this.modelSprintEdit._id, form.value).subscribe(
      res => {
        form.resetForm();
        this.modelSprintEdit.status = '0';
        this.getSprints()
      },
      err => {
        console.log(err);
      }
    );
  }

  removeSprint(id) {
    this.sprintService.removeSprint(this.project_id, id).subscribe(data => this.getSprints());
  }

}
