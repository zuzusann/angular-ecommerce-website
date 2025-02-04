import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.css']
})
export class ProductListItemComponent{

  
  products = [
    {
      id:1,
      name: "Nike React Infinity Run Flyknit",
      brand: "NIKE",
      gender: "MEN",
      description: "RRRNNNNNN",
      category: "RUNNING",
      size: [6, 7, 8, 8, 10],
      color: ["White", "Blue", "Black"],
      price: 160,
      is_in_inventery: true,
      items_left: 3,
      imageUrl: "assets/images/iphoneX-removebg-preview.png",
      slug: "nike-react-infinity-run-flykint"
    },
    {
      id:2,
      name: "Nike React Infinity Run Flyknit",
      brand: "NIKE",
      gender: "MEN",
      description: "RRRNNNNNN",
      category: "RUNNING",
      size: [6, 7, 8, 8, 10],
      color: ["White", "Blue", "Black"],
      price: 160,
      is_in_inventery: true,
      items_left: 3,
      imageUrl: "assets/images/iphoneX-removebg-preview.png",
      slug: "nike-react-infinity-run-flykint"
    },
    {
      id:3,
      name: "Nike React Infinity Run Flyknit",
      brand: "NIKE",
      gender: "MEN",
      description: "RRRNNNNNN",
      category: "RUNNING",
      size: [6, 7, 8, 8, 10],
      color: ["White", "Blue", "Black"],
      price: 160,
      is_in_inventery: false,
      items_left: 3,
      imageUrl: "assets/images/iphoneX-removebg-preview.png",
      slug: "nike-react-infinity-run-flykint"
    },
    {
      id:4,
      name: "Nike React Infinity Run Flyknit",
      brand: "NIKE",
      gender: "MEN",
      description: "RRRNNNNNN",
      category: "RUNNING",
      size: [6, 7, 8, 8, 10],
      color: ["White", "Blue", "Black"],
      price: 160,
      is_in_inventery: true,
      items_left: 3,
      imageUrl: "assets/images/iphoneX-removebg-preview.png",
      slug: "nike-react-infinity-run-flykint"
    },
    {
      id:5,
      name: "Nike React Infinity Run Flyknit",
      brand: "NIKE",
      gender: "MEN",
      description: "RRRNNNNNN",
      category: "RUNNING",
      size: [6, 7, 8, 8, 10],
      color: ["White", "Blue", "Black"],
      price: 160,
      is_in_inventery: false,
      items_left: 3,
      imageUrl: "assets/images/iphoneX-removebg-preview.png",
      slug: "nike-react-infinity-run-flykint"
    },
    {
      id:6,
      name: "Nike React Infinity Run Flyknit",
      brand: "NIKE",
      gender: "MEN",
      description: "RRRNNNNNN",
      category: "RUNNING",
      size: [6, 7, 8, 8, 10],
      color: ["White", "Blue", "Black"],
      price: 160,
      is_in_inventery: true,
      items_left: 3,
      imageUrl: "assets/images/iphoneX-removebg-preview.png",
      slug: "nike-react-infinity-run-flykint"
    },
    {
      id:7,
      name: "Nike React Infinity Run Flyknit",
      brand: "NIKE",
      gender: "MEN",
      description: "RRRNNNNNN",
      category: "RUNNING",
      size: [6, 7, 8, 8, 10],
      color: ["White", "Blue", "Black"],
      price: 160,
      is_in_inventery: true,
      items_left: 3,
      imageUrl: "assets/images/iphoneX-removebg-preview.png",
      slug: "nike-react-infinity-run-flykint"
    },
    {
      id:8,
      name: "Nike React Infinity Run Flyknit",
      brand: "NIKE",
      gender: "MEN",
      description: "RRRNNNNNN",
      category: "RUNNING",
      size: [6, 7, 8, 8, 10],
      color: ["White", "Blue", "Black"],
      price: 160,
      is_in_inventery: false,
      items_left: 3,
      imageUrl: "assets/images/iphoneX-removebg-preview.png",
      slug: "nike-react-infinity-run-flykint"
    }
  ];

  totalProductCount = this.products.length;
  totalProductInStock = this.products.filter( p => p.is_in_inventery === true).length;
  totalProductOutOfStock = this.products.filter(p => p.is_in_inventery === false).length;


  selectedFilterRadioButton: string = 'all';

  onFilterChanged(value: string){
    this.selectedFilterRadioButton = value;
  }
}
