function areCirclesIntersecting(x1, y1, r1, x2, y2, r2) {
    const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    if (distance <= r1 + r2 && distance >= Math.abs(r1 - r2)) {
        return true;
    }
    return false;
}

const x1 = 0, y1 = 0, r1 = 5; 
const x2 = 4, y2 = 0, r2 = 5; 

console.log(areCirclesIntersecting(x1, y1, r1, x2, y2, r2));
