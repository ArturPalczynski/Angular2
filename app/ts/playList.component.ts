import {Component} from 'angular2/core';
import {Config} from './app.config';
import {Student} from './app.model.student';


@Component({
    selector : 'playList', 
    templateUrl : 'app/ts/playList.component.html', 
    inputs : ['students']
})


export class PlayListComponent {

    onSelect(s:Student){
        console.log(s.firstName);

    }

}