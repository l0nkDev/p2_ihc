import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HistoryEntry } from "../../components/historyentry/historyentry.component";
import { HistoryCardComponent } from '../../components/historycard/historycard.component';

@Component({
  selector: 'mass',
  templateUrl: './mass.component.html',
  imports: [FormsModule, HistoryCardComponent],
})

export class MassComponent {
  history = ['Aprovecha nuestra promocion del mes de Pascua. 2x1 en cuentas...',
             'Precios actualizados Mayo 2025! Netflix: 25 Bs x Persona x Mes...',
             'Estamos en todas partes! Hablale a alguno de nuestros asesores y...',
             'Aprovecha nuestra promocion del mes de Pascua. 2x1 en cuentas...',
             'Precios actualizados Mayo 2025! Netflix: 25 Bs x Persona x Mes...',
             'Estamos en todas partes! Hablale a alguno de nuestros asesores y...',
             'Aprovecha nuestra promocion del mes de Pascua. 2x1 en cuentas...',
             'Precios actualizados Mayo 2025! Netflix: 25 Bs x Persona x Mes...',
             'Estamos en todas partes! Hablale a alguno de nuestros asesores y...',
             'Aprovecha nuestra promocion del mes de Pascua. 2x1 en cuentas...',
             'Precios actualizados Mayo 2025! Netflix: 25 Bs x Persona x Mes...',
             'Estamos en todas partes! Hablale a alguno de nuestros asesores y...',]

  title = '';
  channel = -1;
  segment = -1;
  message = '';
  c1 = false;
  c2 = false;

  reset() {
    this.title = '';
    this.channel = -1;
    this.segment = -1;
    this.message = '';
    this.c1 = false;
    this.c2 = false;
  }

}


