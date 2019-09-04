
export class CounterService{
    activeToInactiveCounter = 0;
    inactiveToActiveCounter = 0;


    activeToInactive(){
        this.activeToInactiveCounter++;
        console.log("Active to Inactive: "+this.activeToInactiveCounter);
    }
    inactiveToActive(){
        this.inactiveToActiveCounter++;
        console.log("Inactive to Active: "+this.inactiveToActiveCounter);
    }
}