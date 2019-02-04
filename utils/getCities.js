function findMatches(wordToMatch, citiesArr) {
    const matchingCity = citiesArr.filter(data => {
        const regex = new RegExp(wordToMatch, 'gi');

        return regex.test(data)
    })
    return matchingCity
}

const getCities = (input) => {
    const citiesArr = ['Berlin', 'London', 'Milan', 'Madrid'];
    return findMatches(input, citiesArr)[0]
}

export default getCities;