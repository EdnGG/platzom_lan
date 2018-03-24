# Platzom


Platzom is a language invented for the [Course of Fundamentals of Javascript](http://www.platzi.com/js)



## Language description

- If the original word is a palindrome? No previous rule counts and is returned
  the same word interspersed with uppercase and lowercase

- If the word ends in "ar", those two characters are removed

- If the word starts with Z, "pe" is added at the end

- If the translated word has 10 or more letters, it must be split in half and joined with a script from the middle

## How to Install

```
npm install platzom
```

## How to Use

```
import platzom from 'platzom'

platzom(Programar) // Program
platzom("Programar")) // Program
platzom("Zorro")) // Zorrope
platzom("Zarpar")) // Zarppe
platzom("abecedario")) // abece-dario
platzom("sometemos")) // SoMeTeMoS

```

## Credits

- [Eden Gress](https://www.facebook.com/liledn.mexikn)

## License

[MIT](https://opensource.org/licenses/MIT)


