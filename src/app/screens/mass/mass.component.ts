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
}


