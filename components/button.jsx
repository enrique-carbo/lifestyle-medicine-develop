import Link from "next/link"
import classnames from "classnames"


const Button = ({href, title, bgColor, borderColor, hoverColorStr}) => {

    const classStr = classnames(
        "inline-flex items-center text-white px-8 py-3 mt-8 border rounded hover:bg-transparent",
        bgColor,
        borderColor,
        hoverColorStr
    )
    
    return ( 

        <button className={classStr}>
            <Link href= {href}>
            <a>
                <span className=" text-sm font-medium"> { title } </span>
                
            </a>
        </Link>
        </button>
        
     );
}
 
export default Button;