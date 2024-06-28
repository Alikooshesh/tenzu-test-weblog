export function createRandomTimeStamp(
    startDate: Date = new Date(0),
    endDate: Date = new Date(Date.now())
): number {
    const start = startDate.getTime();
    const end = endDate.getTime();
    
    const randomTime = new Date(start + Math.random() * (end - start));
    
    return randomTime.getTime();
}