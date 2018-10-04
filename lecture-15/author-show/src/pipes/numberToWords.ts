import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "numberToWords"
})
export class NumberToWordsPipe implements PipeTransform {

    transform(value: number) {
        return this.numberToWords(value);
    }

    numberToWords(number) {
        if (typeof number !== "number") {
            throw Error("Only works for numbers");
        }

        const digits = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
        const tensNames = ["zero", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
        const teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

        if (number < 10) {
            return digits[number];
        }

        if (number < 20) {
            return teens[number - 10];
        }

        if (number < 100) {
            const units = digits[number % 10];
            const tens = tensNames[Math.floor(number / 10)];

            if (units === "zero") {
                return tens;
            } else {
                return tens + " " + units;
            }
        }

        if (number < 1000) {
            const lastTwo = this.numberToWords(number % 100);
            const hundreds = digits[Math.floor(number / 100)];

            if (lastTwo === "zero") {
                return hundreds + " hundred";
            } else {
                return hundreds + " hundred " + lastTwo;
            }
        }

        const lastThree = this.numberToWords(number % 1000);
        const thousands = this.numberToWords(Math.floor(number / 1000));
        if (lastThree === "zero") {
            return thousands + " thousand";
        } else {
            return thousands + " thousand " + lastThree;
        }

    }

}
