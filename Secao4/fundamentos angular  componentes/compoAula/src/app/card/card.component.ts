import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  card = {
    infos: {
      tipo: "Simples",
      preco: 100

    }

  };

}
