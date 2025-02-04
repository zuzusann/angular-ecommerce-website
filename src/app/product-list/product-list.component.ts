import { Component} from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent{

  listOfString: number[] = [1, 2, 3, 4, 5];

  searchText: string = '';

  setSearchText(value: string){
    this.searchText = value;
  }
}
