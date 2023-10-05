function solve(data, crit) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    const clonedData = [...data];
    const splittedArrOfStrings = clonedData.map((x) => x.split('|'));
    const ticketsList = splittedArrOfStrings.map(
        ([destination, price, status]) => new Ticket(destination, Number(price), status)
    );
    const sortedTickets = ticketsList.sort((a, b) => {
        return typeof a[crit] === 'number'
            ? a[crit] - b[crit]
            : a[crit].localeCompare(b[crit]);
    })

    return sortedTickets;
}

console.log(
    solve(
        [
            "Philadelphia|94.20|available",
            "New York City|95.99|available",
            "New York City|95.99|sold",
            "Boston|126.20|departed",
        ],
        "destination"
    )
);

console.log(
    solve(
        [
            "Philadelphia|94.20|available",
            "New York City|95.99|available",
            "New York City|95.99|sold",
            "Boston|126.20|departed",
        ],
        "status"
    )
);
