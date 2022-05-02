import { Link } from "react-router-dom";

interface propTypes {
   text?: string;
   color?: string;
   size?: string;
   to?: string;
   active?: boolean;
   onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
   component: string;
}

function Button(props: propTypes) {
   const size = props.size ? props.size : "md";
   const color = props.color ? props.color : "default";
   const text = props.text ? props.text : "Click me!";
   const classes = `btn btn-${size} btn-${color} ${
      props.active ? "btn-active" : ""
   }`;
   const link = props.to ? props.to : "/";

   if (props.component !== "link") {
      return (
         <button type="button" className={classes} onClick={props.onClick}>
            {text}
         </button>
      );
   } else {
      return (
         <Link to={link} className={classes}>
            {props.text}
         </Link>
      );
   }
}

export default Button;
