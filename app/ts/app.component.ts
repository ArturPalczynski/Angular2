import {Component} from 'angular2/core';
import {Config} from './app.config';
import {Student} from './app.model.student';
import {PlayListComponent} from './playList.component';

@Component({
    selector: 'my-app',
    templateUrl: '/app/ts/app.component.html', 
    directives: [PlayListComponent]
})

export class AppComponent {

    heading = Config.MAIN_HEADING;
    students : Array<Student>;


    constructor(){

        this.students = [
            new Student('XXXXX', 'YYYYYY'), 
            new Student('ZZZZZ', 'GGGGGG')
        ]


    }


    

}







