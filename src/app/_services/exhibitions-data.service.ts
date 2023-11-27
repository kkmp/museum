import { Injectable } from '@angular/core';
import { TileContent } from '../_models/tileContent';

@Injectable({
  providedIn: 'root'
})
export class ExhibitionsDataService {

  constructor() { }

  public exhibitions: TileContent[] = [
    {
      year: 2023,
      title: 'Wystawa antycznych waz',
      description: 'Zapraszamy do fascynującej podróży przez antyczne czasy i odległe kraje, gdzie wystawa prezentuje kolekcję zaskakujących antycznych waz oraz misternie zdobionych naczyń z Uzbekistanu, ukazujących bogactwo i piękno dawnego rzemiosła.',
      image: '../../assets/exhibition-1.jpg'
    },
    {
      year: 2022,
      title: 'Wystawa strojów ludowych',
      description: 'Odkryj niezwykłą ekspozycję tradycyjnych strojów ludowych z Uzbekistanu, która przeniesie Cię w świat barwnych tkanin, wyjątkowych wzorów i fascynującej historii kultury ludowej regionu.',
      image: '../../assets/exhibition-2.jpg'
    },
    {
      year: 2021,
      title: 'Wystawa twórczości malarskiej',
      description: 'Przenieś się w świat wyjątkowej sztuki na naszej niepowtarzalnej wystawie, która ukazuje geniusz i piękno dzieł różnych twórców, otwierając okno na epokę, historię i wyobraźnię wielkich mistrzów malarstwa.',
      image: '../../assets/exhibition-3.jpg'
    },
    {
      year: 2020,
      title: 'Wystawa fotograficzna powojennego Lublina',
      description: 'Przeżyj podróż w czasie poprzez niezwykłą wystawę starych fotografii Lublina, odkrywając ukryte zakątki miasta i poznając historię oraz ewolucję architektury i życia codziennego przez wieki.',
      image: '../../assets/exhibition-4.jpg'
    }
  ];
}
