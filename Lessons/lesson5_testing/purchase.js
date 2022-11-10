const businessHours = [9, 18];
export function purchase () {
    const currentHour = new Date().getHours();
    const [open, close] = businessHours;
    if (currentHour >= open && currentHour <= close) {
        return {message: "Success"};
    } else {
        return {message: "Closed"};
    }
}