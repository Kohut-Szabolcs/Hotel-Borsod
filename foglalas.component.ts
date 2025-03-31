import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FoglalasService } from '../foglalas.service';

@Component({
  selector: 'app-foglalas',
  standalone: true, // Angular 19 standalone komponens feltételezése
  imports: [FormsModule, CommonModule],
  templateUrl: './foglalas.component.html',
  styleUrls: ['./foglalas.component.css'] // Javítva: styleUrl -> styleUrls
})
export class FoglalasComponent {
  constructor(private foglalasService: FoglalasService) {} // Egységes kisbetűs írásmód

  foglalasData = {
    bejelentkezes_datum: '',
    kijelentkezes_datum: '',
    szoba_id: undefined,
  };

  submitBooking(bookingForm: any) { // Az űrlap paraméterként való elfogadása
    if (bookingForm.valid) { // Ellenőrizzük, hogy az űrlap érvényes-e
      this.foglalasService.foglalas(this.foglalasData).subscribe({
        next: (res: any) => {
          alert("Sikeres foglalás");
          bookingForm.reset(); // Az űrlap visszaállítása az oldal újratöltése helyett
        },
        error: (err: any) => {
          alert("Hiba történt: " + err.message); // Jobb hibakezelési üzenet
        }
      });
    } else {
      alert("Kérjük, töltse ki az összes mezőt helyesen!");
    }
  }
}