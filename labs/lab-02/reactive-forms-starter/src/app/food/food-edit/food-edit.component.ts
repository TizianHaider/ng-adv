import { Component, EventEmitter, Input, Output, SimpleChanges, inject } from '@angular/core';
import { FoodItem } from '../food.model';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-food-edit',
    templateUrl: './food-edit.component.html',
    styleUrls: ['./food-edit.component.scss'],
    standalone: true,
    imports: [
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatButtonModule,
        ReactiveFormsModule,
    ],
})
export class FoodEditComponent {

  @Input() food = new FoodItem();
  @Output() onFoodSaved: EventEmitter<FoodItem> = new EventEmitter<FoodItem>();
  
  fb = inject(FormBuilder);

  // foodForm = this.fb.group({
  //   id: new FormControl<number>(this.food.id, {
  //     validators: [Validators.required],
  //     nonNullable: true
  //   }),
  //   name: new FormControl<string>(this.food.name, {
  //     validators: [Validators.minLength(5)],
  //     nonNullable: true
  //   }),
  //   price: new FormControl<number>(this.food.price, {
  //     validators: [Validators.min(3)],
  //     nonNullable: true
  //   }),
  //   calories: new FormControl<number>(this.food.calories, {
  //     nonNullable: true
  //   }),
  // });

  foodForm = this.fb.group({
    id: this.food.id,
    name: [this.food.name, [Validators.required, Validators.minLength(5)]],
    price: [this.food.price, [Validators.required, Validators.min(3)]],
    calories: this.food.calories,
  });

  saveForm(): void {
    console.log('food to save', this.foodForm.value);
    this.onFoodSaved.emit(this.foodForm.value as FoodItem);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['food']) {
      this.foodForm.setValue(changes['food'].currentValue);
    }
  }
}
