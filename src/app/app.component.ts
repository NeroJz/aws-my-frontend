import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InfoService } from './info.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'my-frontend';

  api: string = "";

  backendInfo: string = 'No info from backend';

  constructor(private infoSvc: InfoService) { }

  ngOnInit(): void {
    this.infoSvc.getInfo()
      .subscribe((res: any) => {
        const { data } = res;
        if (data) {
          this.backendInfo = `${data} 🎉`;
        }
      },
        (err) => {
          console.log(`Error on calling the backend`);
        }
      );
  }

}
