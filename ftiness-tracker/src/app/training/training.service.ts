import { Exercise } from './execrise.model';
import { Subject } from 'rxjs/Subject';

export class TrainingService {
    execriseChanged = new Subject<Exercise>();
    private availableExecrises: Exercise[] = [
      {id:'crunches',name:'Crunches',duration: 30, calories:8},
      {id:'touches-toes',name:'Touches Toes',duration: 180, calories:15},
      {id:'side-lunges',name:'Side Lunges',duration: 120, calories:18},
      {id:'burpees',name:'Burpees',duration: 60, calories:8},
    ];
    getAvailableExcercises(){
        return this.availableExecrises.slice();

    }
    private runningExercise: Exercise;

    startExercise(selectId: string) {
        this.runningExercise = this.availableExecrises.find( ex =>ex.id == selectId);
        this.execriseChanged.next({ ...this.runningExercise });
    }
}