export function sortData<T>(input:T[],key:keyof T){
    const sortArray:T[] = input.sort(
        (a:T,b:T):any =>{
            const aValue = a[key];
            const bValue = b[key];

            return (aValue as any).localeCompare(bValue as any)
        }
    )
    return sortArray
}