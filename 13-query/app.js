const queryString = {
    options: {
        search: "Вася",
        take: 10
    },
    solution: function () {
        const keys = Object.keys(this.options);
        return `${keys[0]}=${this.options.search}&${keys[1]}=${this.options.take}`;
    }
}

console.log(queryString.solution());