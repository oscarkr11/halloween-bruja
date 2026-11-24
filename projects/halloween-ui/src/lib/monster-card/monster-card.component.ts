import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-monster-card',
  standalone: true,
  imports: [],
  templateUrl: './monster-card.component.html',
  styleUrl: './monster-card.component.scss',
})
export class MonsterCardComponent {

  @Input() titulo: string = '';
  @Input() descripcion: string = '';
  @Input() imagen: string = '';
  @Input() boton: string = 'Descubrir';

}
