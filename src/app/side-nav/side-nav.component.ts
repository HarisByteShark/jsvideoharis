import { Component } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  loading: boolean = false;

  load() {
    this.loading = true;

    setTimeout(() => {
      this.loading = false
    }, 2000);
  }
}
