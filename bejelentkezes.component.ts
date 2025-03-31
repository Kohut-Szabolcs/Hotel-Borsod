import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-bejelentkezes',
  imports: [FormsModule,CommonModule],
  templateUrl: './bejelentkezes.component.html',
  styleUrl: './bejelentkezes.component.css'
  
})
export class BejelentkezesComponent {
  constructor(private userService:UserService) { 
  }
  userData = {
    Email: '',
    Jelszo: ''
  }
  login() {

    this.userService.login(this.userData).subscribe({
      next:(res:any)=> {
        alert("sikeres bejelentkezés");
        //  window.location.reload()
      },
      error:(err:any)=> {
        alert(err.message)
      }
    })
    
  }

}
