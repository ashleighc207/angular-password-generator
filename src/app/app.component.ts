import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  password = "";
  useLetters = false;
  useNumbers = false;
  useCharacters = false;
  length = 0;

  onButtonClick() {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "1234567890";
    const characters = "!@#$%^&*()_";
    let validChars = "";
    this.useLetters ? (validChars += letters) : null;
    this.useNumbers ? (validChars += numbers) : null;
    this.useCharacters ? (validChars += characters) : null;
    let genPass = "";
    for (let i = 0; i < this.length; i++) {
      const idx = Math.floor(Math.random() * validChars.length);
      genPass += validChars[idx];
    }
    this.password = genPass;
  }
  onChangeUseLetters() {
    this.useLetters = !this.useLetters;
  }
  onChangeUseNumbers() {
    this.useNumbers = !this.useNumbers;
  }
  onChangeUseCharacters() {
    this.useCharacters = !this.useCharacters;
  }
  onChangeText(value: string) {
    const parsedValue = parseInt(value);

    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }
}
