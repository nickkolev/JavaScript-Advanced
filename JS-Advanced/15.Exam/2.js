class FlightBookingSystem {
    constructor(agencyName) {
        this.agencyName = agencyName;
        this.flights = [];
        this.bookings = [];
        this.bookingsCount = 0;
    }

    addFlight(flightNumber, destination, departureTime, price) {
        const flight = this.flights.find((f) => f.flightNumber == flightNumber);

        if (flight) {
            return `Flight ${flightNumber} to ${destination} is already available.`;
        }

        this.flights.push({
            flightNumber,
            destination,
            departureTime,
            price,
        });

        return `Flight ${flightNumber} to ${destination} has been added to the system.`;
    }

    bookFlight(passengerName, flightNumber) {
        const flight = this.flights.find((f) => f.flightNumber == flightNumber);

        if (!flight) {
            return `Flight ${flightNumber} is not available for booking.`;
        }
        this.bookings.push({
            passengerName,
            flightNumber,
        });

        this.bookingsCount++;

        return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`;
    }

    cancelBooking(passengerName, flightNumber) {
        const booking = this.bookings.find((b) => {
            return (
                b.passengerName === passengerName &&
                b.flightNumber === flightNumber
            );
        });

        if (!booking) {
            throw new Error(
                `Booking for passenger ${passengerName} on flight ${flightNumber} not found.`
            );
        }

        let bookingIndex = this.bookings.indexOf(booking);
        this.bookings.splice(bookingIndex, 1);

        this.bookingsCount--;

        return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`;
    }

    showBookings(criteria) {
        if (this.bookings.length === 0) {
            throw new Error(`No bookings have been made yet.`);
        }

        if (criteria === "all") {
            let result = [];
            result.push(`All bookings(${this.bookings.length}):`);

            this.bookings.forEach((b) =>
                result.push(
                    `${b.passengerName} booked for flight ${b.flightNumber}.`
                )
            );

            return result.join("\n");
        } else if (criteria === "cheap") {
            let cheapFlights = this.flights.filter(f => f.price <= 100);
            
            let cheapBookings = [];
            this.bookings.forEach(b => {
                if(cheapFlights.some(f => f.flightNumber === b.flightNumber)) {
                    cheapBookings.push(b);
                };
            })

            if (cheapBookings.length === 0) {
                return "No cheap bookings found.";
            }

            let result = [];
            result.push(`Cheap bookings:`);
            cheapBookings.forEach((b) =>
                result.push(
                    `${b.passengerName} booked for flight ${b.flightNumber}.`
                )
            );

            return result.join('\n');
        } else if (criteria === "expensive") {
            let expensiveFlights = this.flights.filter(f => f.price > 100);
            
            let expensiveBookings = [];
            this.bookings.forEach(b => {
                if(expensiveFlights.some(f => f.flightNumber === b.flightNumber)) {
                    expensiveBookings.push(b);
                };
            })

            if (expensiveBookings.length === 0) {
                return "No expensive bookings found.";
            }

            let result = [];
            result.push(`Expensive bookings:`);
            expensiveBookings.forEach((b) =>
                result.push(
                    `${b.passengerName} booked for flight ${b.flightNumber}.`
                )
            );

            return result.join('\n');
        }
    }
}

const system = new FlightBookingSystem("TravelWorld");
console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
console.log(system.bookFlight("Alice", "AA101"));
console.log(system.bookFlight("Bob", "BB202"));
console.log(system.showBookings("expensive"));
console.log(system.showBookings("cheap"));
