import {Component} from 'angular2/core';
import {Config} from './app.config';
import {userInputComponent} from './userInput.component';

  
@Component({
    selector: 'my-app',
    templateUrl: '/app/ts/app.component.html', 
    directives : [userInputComponent]
})

export class AppComponent {

    heading = Config.MAIN_HEADING;
    

}







