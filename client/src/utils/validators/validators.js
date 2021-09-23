

export const dateFormatValidator = (rowDate, state) => {
    if (/\d{2}\/\d{1,2}/g.test(rowDate)) {
        return rowDate
    } else if (/\d{2}/g.test(rowDate) && !state.slice(2)) {
        return rowDate + '/'
    } else if (/\d{0,2}/g.test(rowDate)) {
        return rowDate
    }
}