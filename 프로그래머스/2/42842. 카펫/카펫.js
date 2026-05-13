function solution(brown, yellow) {
    let width, height;
    
    for (let w = brown/2; w>0 ; w--){
        const h = (brown - w*2 + 4) / 2;
        console.log(w, h);
        if (yellow/(w-2) === h-2) {
            return [w, h];
        }
    }
    
    
}