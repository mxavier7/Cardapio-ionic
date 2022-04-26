import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface FolderObj{
  name: string;
  title: string;
  items: ItemObj[];
}
interface ItemObj{
  title: string;
  url: string;
  }

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})


export class FolderPage implements OnInit {
  // eslint-disable-next-line @typescript-eslint/ban-types
  public folder: FolderObj;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.teste(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  teste(value: string): FolderObj{
    if (value === 'Camisas'){
      return{
        name:'Camisas',
        title:'Venda de Camisas',
        items:[
          {
            title:'Camisa do Barcelona',
            // eslint-disable-next-line max-len
            url:'https://static.netshoes.com.br/produtos/camisa-barcelona-home-2021-sn-torcedor-nike-masculina/86/HZM-3777-186/HZM-3777-186_zoom1.jpg?ts=1594143485'
          },
          {
            title:'Camisa do Real Madrid',
            // eslint-disable-next-line max-len
            url:'https://static.netshoes.com.br/produtos/camisa-real-madrid-home-2122-sn-jogador-adidas-masculina/14/3ZP-0353-014/3ZP-0353-014_zoom1.jpg?ts=1637233501'
          }
        ]
      };
    }
  }

}
