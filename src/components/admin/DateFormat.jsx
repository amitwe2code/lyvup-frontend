

export default function DateFormat({ updatedAt }) {
    // Convert the input string to a JavaScript Date object
    const date = new Date(updatedAt);

    // Extract the parts of the date
    const datePart = date.toLocaleDateString(); // Date part (e.g., 12/9/2024)
    const timePart = date.toLocaleTimeString(); // Time part (e.g., 6:51:44 AM)


    return (
        <div>
            <p>Date: {datePart}</p>
            <p>Time: {timePart}</p>
        </div>
    );
};