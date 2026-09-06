class MinHeap {
    constructor() {
        this.heap = [];
    }
    
    push(val) {
        this.heap.push(val);
        this._bubbleUp();
    }
    
    pop() {
        if (this.heap.length === 1) return this.heap.pop();
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._sinkDown();
        return min;
    }
    
    peek() {
        return this.heap[0];
    }
    size() {
        return this.heap.length;
    }
    
    _bubbleUp() {
        let i = this.heap.length - 1;
        while (i > 0) {
            const parent = Math.floor((i-1)/2);
            if (this.heap[parent] <= this.heap[i]) break;
            [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
            i = parent;
        }
    }
    
    _sinkDown() {
        let i = 0;
        const n = this.heap.length;
        while (true) {
            let smallest = i;
            const left = 2*i + 1;
            const right = 2*i + 2;
            if (left < n && this.heap[left] < this.heap[smallest]) smallest = left;
            if (right < n && this.heap[right] < this.heap[smallest]) smallest = right;
            if (smallest === i) break;
            [this.heap[smallest], this.heap[i]] = [this.heap[i], this.heap[smallest]];
            i = smallest;
        }
    }
}

function solution(scoville, K) {
    const heap = new MinHeap();
    for (const s of scoville) heap.push(s);
    
    let answer = 0;
    while (heap.peek() < K) {
        if (heap.size() < 2) return -1;
        const first = heap.pop();
        const second = heap.pop();
        heap.push(first + second * 2);
        answer++;
    }
    return answer;
}