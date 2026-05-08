function solution(phone_book) {
    const set = new Set(phone_book);
    for (let i=0; i<phone_book.length; i++){
        const phone = phone_book[i];
        set.delete(phone);
        let s = ""
        for (let j=0; j<phone.length; j++){
            s += phone[j];
            if (set.has(s)) {
                return false;
            }
        }
        set.add(phone);
    }
    return true;
}