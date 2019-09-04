import { CourseService } from './courses.service';

import { Component } from '@angular/core';


@Component({
    selector: 'courses',
    template: `<h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{course}}
            </li>
        </ul>
        <button class="btn btn-primary" [class.active]="isActive">Save</button>
        <button [style.backgroundColor]="isActive ? 'blue': 'red'">Save</button>
        <div (click)="onDivClicked()">
            <button (click)="onSave($event)">Save</button>
        </div>
        <input [(ngModel)]="email" (keyup.enter)=onKeyUp()/>
    `
})

export class CoursesComponent{
    title = "List of courses";
    courses;
    isActive = true;

    email="something@test.com"

    onDivClicked(){
        console.log("Div was clicked");
    }

    onSave($event){
        $event.stopPropagation();
        console.log("Button is clicked", $event);
    }

    onKeyUp(){
        console.log(this.email);
    }

    constructor(service: CourseService){
        
        this.courses = service.getCourses();
    }
}

