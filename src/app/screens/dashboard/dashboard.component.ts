import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DashboardCardComponent } from '../../components/dashboardcard/dashboardcard.component';
import { ActivityComponent } from '../../components/activity/activity.component';
import { ServiceCardComponent } from '../../components/servicecard/servicecard.component';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  imports: [FormsModule, RouterLink, DashboardCardComponent, ActivityComponent, ServiceCardComponent],
})

export class DashboardComponent {
  alt = false;

  tasks = ['true|#F4F4F4|high|Contactar a Juan Perez|Llamar para presentar planes de Netflix|10:30 AM|call',
           'true|#BEFFBE|low|Contactar a Ema Moya|Verificar si recibió credenciales de HBO Max|2:30 PM|followup',
           '||mid|Soporte técnico Star+|Resolver problemas de acceso a la cuenta.|5:30PM|support',
           '||mid|Renovación Disney+|Verificar renovación de cuenta familiar.|6:00PM|renewal',
           'true|#BEFFBE|low|Contactar a Ema Moya|Verificar si recibió credenciales de HBO Max|2:30 PM|followup',
           'true|#F4F4F4|high|Contactar a Juan Perez|Llamar para presentar planes de Netflix|10:30 AM|call',
           'true|#BEFFBE|low|Contactar a Ema Moya|Verificar si recibió credenciales de HBO Max|2:30 PM|followup',
           '||mid|Soporte técnico Star+|Resolver problemas de acceso a la cuenta.|5:30PM|support',
           '||mid|Renovación Disney+|Verificar renovación de cuenta familiar.|6:00PM|renewal',
           'true|#BEFFBE|low|Contactar a Ema Moya|Verificar si recibió credenciales de HBO Max|2:30 PM|followup',
           'true|#F4F4F4|high|Contactar a Juan Perez|Llamar para presentar planes de Netflix|10:30 AM|call',
           'true|#BEFFBE|low|Contactar a Ema Moya|Verificar si recibió credenciales de HBO Max|2:30 PM|followup',
           '||mid|Soporte técnico Star+|Resolver problemas de acceso a la cuenta.|5:30PM|support',
           '||mid|Renovación Disney+|Verificar renovación de cuenta familiar.|6:00PM|renewal',
           'true|#BEFFBE|low|Contactar a Ema Moya|Verificar si recibió credenciales de HBO Max|2:30 PM|followup',
           '||mid|Soporte técnico Star+|Resolver problemas de acceso a la cuenta.|5:30PM|support',
          ]

  services = ['Plan Premium|Netflix|4K + 4 dispositivos simultaneos|15.99|42',
              'Plan Premium|Disney+|4K + 4 dispositivos simultaneos|15.99|42',
              'Plan Estandar|Prime Video|4K + 4 dispositivos simultaneos|15.99|42',
              'Plan Anual|Netflix|4K + 4 dispositivos simultaneos|15.99|42',
              'Plan Premium|Disney+|4K + 4 dispositivos simultaneos|15.99|42',
              'Plan Premium|Netflix|4K + 4 dispositivos simultaneos|15.99|42',
              'Plan Premium|Disney+|4K + 4 dispositivos simultaneos|15.99|42',
              'Plan Estandar|Prime Video|4K + 4 dispositivos simultaneos|15.99|42',
              'Plan Anual|Netflix|4K + 4 dispositivos simultaneos|15.99|42',
              'Plan Premium|Disney+|4K + 4 dispositivos simultaneos|15.99|42',
              'Plan Premium|Netflix|4K + 4 dispositivos simultaneos|15.99|42',
              'Plan Premium|Disney+|4K + 4 dispositivos simultaneos|15.99|42',
              'Plan Estandar|Prime Video|4K + 4 dispositivos simultaneos|15.99|42',
              'Plan Anual|Netflix|4K + 4 dispositivos simultaneos|15.99|42',
              'Plan Premium|Disney+|4K + 4 dispositivos simultaneos|15.99|42',
              'Plan Estandar|Prime Video|4K + 4 dispositivos simultaneos|15.99|42',
             ]

  clicked() {
    this.alt = !this.alt;
  }

  deleteTask(id: number) {
    this.tasks.splice(id, 1);
  }

  deleteService(id: number) {
    this.services.splice(id, 1);
  }
}


