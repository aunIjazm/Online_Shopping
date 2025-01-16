"use Client"
const Button = (props) => {
    return (
        <button className="inline-block bg-teal-600 text-white font-medium py-2 px-4 rounded-lg shadow-md hover:bg-teal-700 transition-colors">{props.buttonTxt}</button>
    )
}
export default Button;