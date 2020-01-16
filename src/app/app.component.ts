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
  length = "";
  letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
  numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  characters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-"];
  onButtonClick() {
    this.password = "rhekghdkghfldghd;hj;gfhdlkhgfdgkgfk";
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
  onChangeText(newText) {
    this.length = newText;
  }
  generatePassword() {}
}
