export const getPagesCount = (totalPages:number, limit:number) => {
    return Math.ceil(totalPages/limit)
}

export const paginationArray = (totalCountPages:number) => {
    const pagesArray:number[] = []
    for(let i:number = 0; i < totalCountPages; i++ ) {
        pagesArray.push(i + 1)
    }
    return pagesArray
}