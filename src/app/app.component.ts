import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Camisas', url: '/folder/Camisas', icon: 'shirt' },
    { title: 'Shorts', url: '/folder/Outbox', icon: 'walk' },
    { title: 'Meias', url: '/folder/Favorites', icon: 'footsteps' },
    { title: 'Windbreaks', url: '/folder/Archived', icon: 'snow' },
    { title: 'Óculos', url: '/folder/Óculos', icon: 'glasses' },
  ];
  public labels = ['Meus Dados', 'Alterar Cadastro', 'Meus Pedidos'];
  constructor() {}
}
