import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-regisztracio',
  imports: [FormsModule,CommonModule],
  templateUrl: './regisztracio.component.html',
  styleUrl: './regisztracio.component.css'
})
export class RegisztracioComponent {
  constructor(private userService:UserService) { 
  }

  userData = {
    TeljesNev: '',
    Jelszo: '',
    Email: '',
    SzuletesiDatum: '',
    SzuletesiHely:'',
    Telefonszam: '',
  }
  register() {
    this.userService.register(this.userData).subscribe({
      next:(res:any)=> {
        alert("sikeres regisztráció");
        // window.location.reload()
      },
      error:(err:HttpErrorResponse)=> {
        alert(err.message)
      }
    })
    
  }
  
}
