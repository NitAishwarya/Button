// import { Button } from "react-bootstrap";
import Button from 'react-bootstrap/Button';


const ButtonAp = (props) => 
{
    return(
        <Button style={{margin:"1%"}} variant={props.btColor} size="lg">
        {props.btName}
      </Button>
    )
}

export default ButtonAp;