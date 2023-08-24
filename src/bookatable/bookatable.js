import "/bookatable.css"

const bookatable = () => {
    return (
        <><div classname="bookatableSearch" />
        <input
            type="text"
            placeholder="date"
            classname="dateForBooking"
        ></input>
        <input
            type="text"
            placeholder="hour"
            classname="hourOfBooking">
        </input>
        <input
            type="text"
            placeholder="number"
            classname="amountOfPpl">
        </input>
        <button classname="bookBtn">Book Now</button>
        </>
    )
}
