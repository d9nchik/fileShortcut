function is<E>(a: E, ...b: E[]) {
    for (let c of b) {
        if (c instanceof Array)

        if (c != a)
            return false
    }
    return true
}

console.log(is('string', 'otherstring'))
console.log(is(true, false))
console.log(is(42, 42))

console.log(is([1, 2], [1, 2])) // false)