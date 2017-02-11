import { Collectable } from "./collectable.model";

export class CollectableService {
    private collectables: Collectable[] = [
        {description:'Tristan Thompson', type:'Center'},
        {description:'Kevin Love', type:'Power Forward'},
        {description:'Lebron James', type:'Small Forward'},
        {description:'J.R. Smith', type:'Shooting Guard'},
        {description:'Kyrie Irving', type:'Point Guard'},
   ]; 
  
  private collection: Collectable[] = [];

   getCollectables() {
       return this.collectables;
   }
   getCollection(){
       return this.collection;
   }

   addToCollection(item: Collectable) {
        if(this.collection.indexOf(item) !== -1) {
            return;
        }
        this.collection.push(item);
   }
   removeFromCollection(item: Collectable) {
       this.collection.splice(this.collection.indexOf(item), 1);
   }
}