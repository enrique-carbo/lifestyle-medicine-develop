import classnames from "classnames"


const Button = ({href, title, bgColor, borderColor, hoverColorStr}) => {

    const classStr = classnames(
        "inline-flex items-center text-white px-8 py-3 mt-8 border rounded hover:bg-transparent",
        bgColor,
        borderColor,
        hoverColorStr
    )
    
    return ( 
        <a href= {href} target="_blank" rel="noopener noreferrer">
        <button className={classStr}>
            <span className=" text-sm font-medium"> { title } </span>
        </button>
        </a>
        
     );
}
 
export default Button;