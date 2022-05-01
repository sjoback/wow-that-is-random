import ButtonDefault from "./ButtonDefault/ButtonDefault";
import ButtonLink from "./ButtonLink/ButtonLink";

interface propTypes {
   text?: string;
   color?: string;
   size?: string;
   type: "default";
}

function Button(props: propTypes) {
   const size = props.size ? props.size : "md";
   const color = props.color ? props.color : "default";
   const text = props.text ? props.text : "Click me!";
   const classes = `btn btn-${size} btn-${color}`;

   const Components = {
      link: ButtonLink,
      default: ButtonDefault,
   };

   if (typeof Components[props.type] !== "undefined") {
      const Component = Components[props.type];
      return <Component text={text} classes={classes} />;
   }

   // return (
   //    <button type="button" className={classes}>
   //       {text}
   //    </button>
   // );
}

export default Button;
