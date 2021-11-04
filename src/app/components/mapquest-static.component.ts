import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mapquest-static',
  template: `
    <img
      [src]="
        'https://www.mapquestapi.com/staticmap/v5/map?key=' +
        MAPQUEST_KEY +
        '&locations=' +
        locations.join('||') +
        '&size=600,400&zoom=' +
        zoom
      "
      width="100%"
    />
  `,
})
export class MapQuestStaticComponent {
  @Input() locations: string[] | null = [];
  @Input() zoom: number = 7;
  MAPQUEST_KEY = 'Go3ZWai1i4nd2o7kBuAUs4y7pnpjXdZn';
}
