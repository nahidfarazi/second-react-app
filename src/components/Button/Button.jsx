import classes from './Button.module.css'
const variant = {
    reset: {
      backgroundColor: "#F27A15",
      color: "#fff",
    },
    submit: {
      backgroundColor: "#4B92FF",
      color: "#fff",
    },
  };
  const Button = (props) => {
    const userVariant = variant[props.variant];
    return (
      <>
        <button
        onClick={props.event}
        className={classes.button_one}
          type={props.type}
          style={{...userVariant}}
        >
          {props.text}
        </button>
      </>
    );
  };
  
  export default Button;
  