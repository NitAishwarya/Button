
import './App.css';
import ButtonAp from './Module/Button/ButtonComp';

function App() {

 
  const btnArr = [ {
    btName : '1',
    btColor : 'primary'
  }, 
  {
    btName : '2',
    btColor : 'secondary'
  },
  {
    btName : '3',
    btColor : 'info'
  },
  {
    btName : '4',
    btColor : 'warning'
  },
  {
    btName : '5',
    btColor : 'danger'
  },
  {
    btName : '6',
    btColor : 'light'
  },
  {
    btName : '7',
    btColor : 'dark'
  },
  {
    btName : '8',
    btColor : 'primary'
  },
  {
    btName : '9',
    btColor : 'secondary'
  },
  {
    btName : '0',
    btColor : 'info'
  }
];

return(

  <div>

    {
      
       btnArr.map((btObj) =>
       {
           console.log('btObj',btObj)
           return <ButtonAp btName={btObj.btName} btColor={btObj.btColor} />
       })}


  </div>
);
}


export default App;
