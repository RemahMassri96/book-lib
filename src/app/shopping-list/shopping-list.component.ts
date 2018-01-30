import { Component, OnInit } from '@angular/core';
import {ShoppingListAddComponent} from 'app/shopping-list/shopping-list-add.component';
import { Ingredient } from "app/ingredient";
import { ShoppingListService } from "app/shopping-list/shopping-list.service";


@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html',
 
  
  
})
export class ShoppingListComponent implements OnInit {
        
        items : Ingredient[]=[];
        selectedItem : Ingredient=null;

  constructor(private sls:ShoppingListService) { }

  ngOnInit() {
    this.items=this.sls.getItems();
  }

  onSelectItem(item:Ingredient){
    this.selectedItem=item;

  }
   
   onCleared(){
     this.selectedItem=null;
     
   }

}
