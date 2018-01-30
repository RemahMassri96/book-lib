import { Component, OnChanges ,Input,Output} from '@angular/core';
import { Ingredient } from "app/ingredient";
import { ShoppingListService } from "app/shopping-list/shopping-list.service";
import { EventEmitter } from "events";


@Component({
  selector: 'rb-shopping-list-add',
  templateUrl: './shopping-list-add.component.html',
  
})
export class ShoppingListAddComponent implements OnChanges {

  @Input() item: Ingredient;
  @Output() cleared= new EventEmitter();
     isAdd = true;

  constructor(private sls : ShoppingListService) {

   }

   ngOnChanges(changes){
     if(changes.item.currentValue===null){
       this.isAdd=true;
       this.item={name:null,amount:null};
     }  else{
        this.isAdd=false;

     }

   }

  onsubmit(ingredient: Ingredient){

       const newIngredient=new Ingredient(ingredient.name,ingredient.amount);
      if (!this.isAdd){
        this.sls.editItem(this.item,newIngredient);
        this.onClear();
        // Edit

      } else{
        this.item = newIngredient;
        this.sls.addItem(this.item);

      }

  }

  onDelete(){
    this.sls.deleteItem(this.item);
    this.onClear();
  }

  onClear(){
    this.isAdd=true;
    this.cleared.emit(null);
  }

}
