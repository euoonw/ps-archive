function solution(phone_book) {
    const set = new Set(phone_book);
    
    for (let i=0; i<phone_book.length; i++) {
        let s = '';
        for (let j=0; j<phone_book[i].length-1; j++) {
            s += phone_book[i][j];
            if (set.has(s)) return false;
        }
    }
    
    return true;
}













// 이전 답변

// function solution(phone_book) {
//     const set = new Set(phone_book);
//     for (let i=0; i<phone_book.length; i++){
//         const phone = phone_book[i];
//         let s = ""
//         for (let j=0; j<phone.length-1; j++){
//             s += phone[j];
//             if (set.has(s)) {
//                 return false;
//             }
//         }
//     }
//     return true;
// }