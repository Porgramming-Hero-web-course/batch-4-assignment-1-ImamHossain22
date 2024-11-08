{
    const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    let sum: number = 0;

    const sumArray: number[] = arr.map((res: number): number =>
        sum += res)

    console.log(sum);
}