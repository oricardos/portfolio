export const formattedDate = (date) => {

    // Converting to a date object
    const dateObject = new Date(date);

    // Formatting the date in the desired format
    const day = String(dateObject.getDate()).padStart(2, '0');
    const month = String(dateObject.getMonth() + 1).padStart(2, '0');
    const year = dateObject.getFullYear();

    const formattedDate = `${day}/${month}/${year}`;

    return formattedDate;
};
