export function getRandomCode (num:number = 8): string {
    const data = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let numbs = "";
    const timestamp = parseInt((new Date().getTime() / 1000 as unknown as string)) + ''
    for (let i = 0; i < num; i++) {
        let r = parseInt((Math.random() * 61 as unknown as string));
        numbs += data[r];
    }
    return timestamp + numbs;
}