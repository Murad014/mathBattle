import toMMSSMS from "./Timer";


export default function generateEquation(fl) {
        let left = Math.ceil(Math.random() * Math.pow(10, fl))
        let right = Math.ceil(Math.random() * Math.pow(10, fl))
        return left.toString() + " + " + right.toString();
}



