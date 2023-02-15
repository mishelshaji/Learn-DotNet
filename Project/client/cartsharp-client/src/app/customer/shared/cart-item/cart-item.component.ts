import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {

    @Input() cartItem: any;

    @Output() delete = new EventEmitter<number>();

    faTrash = faTrash;

    updateQuantity(e:MouseEvent) {
        const target = e.target as HTMLOptionElement;
        const option = target.getAttribute("data-action");

        if (option === 'sub' && this.cartItem.quantity === 1) {
            return;
        }

        if (option === 'add' && this.cartItem.quantity === 5) {
            return;
        }

        this.cartItem.quantity += option === 'add' ? 1 : -1;
    }

    deleteItem(){
        const option = confirm("Do you want to delete?");
        if (option) {
            this.delete.emit(this.cartItem.id);
        }
    }
}
