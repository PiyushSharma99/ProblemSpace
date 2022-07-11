import React from "react";
import background from "../images/background.png";

const Content = () => {
   
  //let val = e.target.getAttribute('data-pg');
  
  return(

      

        <div className="ui container" style={{backgroundColor: "white", padding:10}}>
    {/* <Container textAlign='left'>Left Aligned</Container>
    <Container textAlign='center'>Center Aligned</Container>
    <Container textAlign='right'>Right Aligned</Container>
    <Container textAlign='justified'>
      <b>Justified</b>
      <Divider /> */}
      
      <h1 style={{backgroundColor: "red", padding:10}}>Welcome to Problem Space</h1>
      <p>
        Give voice to your problems through this platform.
        Gone are the times when you used to look for a platform to address your problems.
      </p>
      <p>
      <button> Problem List</button>
     

  <form className="ui form">
  <h4 className="ui dividing header">Write down the Problem</h4>
  <div className="field">
    <label>Name</label>
    <div className="two fields">
      <div className="field">
        <input type="text" name="user[first-name]" placeholder="First Name" />
      </div>
      <div className="field">
        <input type="text" name="user[last-name]" placeholder="Last Name" />
      </div>
    </div>
  </div>
  
  
  <h4 className="ui dividing header">Billing Information</h4>
  
  
   <h4 className="ui dividing header">Receipt</h4>
   <div className="field">
    <label>Send Receipt To:</label>
    <div className="ui fluid multiple search selection dropdown">
      <input type="hidden" name="receipt" />
      <i className="dropdown icon"></i>
      <div className="default text">Saved Contacts</div>
      <div className="menu">
        <div className="item" dataValue="jenny" data-text="Jenny">
          <img className="ui mini avatar image" src="/images/avatar/small/jenny.jpg"/>
          Jenny Hess
        </div>
        <div className="item" dataValue="elliot" data-text="Elliot">
          <img className="ui mini avatar image" src="/images/avatar/small/elliot.jpg"/>
          Elliot Fu
        </div>
        <div className="item" dataValue="stevie" data-text="Stevie">
          <img className="ui mini avatar image" src="/images/avatar/small/stevie.jpg"/>
          Stevie Feliciano
        </div>
        <div className="item" dataValue="christian" data-text="Christian">
          <img className="ui mini avatar image" src="/images/avatar/small/christian.jpg"/>
          Christian
        </div>
        <div className="item" dataValue="matt" data-text="Matt">
          <img className="ui mini avatar image" src="/images/avatar/small/matt.jpg" />
          Matt
        </div>
        <div className="item" dataValue="justen" data-text="Justen">
          <img className="ui mini avatar image" src="/images/avatar/small/justen.jpg"/>
          Justen Kitsune
        </div>
      </div>
    </div>
  </div>
   <div className="ui segment">
    <div className="field">
      <div className="ui toggle checkbox">
        <input type="checkbox" name="gift" tabindex="0" className="hidden" />
        <label>Do not include a receipt in the package</label>
      </div>
    </div>
  </div>
  <div className="ui button" tabindex="0">Submit Order</div>
</form>

      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
        Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
        dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
        tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
        enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
        Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
        imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
        ultricies nisi.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
        Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
        dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
        tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
        enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
        Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
        imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
        ultricies nisi.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
        Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
        dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
        tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
        enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
        Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
        imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
        ultricies nisi.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
        Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
        dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
        tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
        enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
        Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
        imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
        ultricies nisi.
      </p>
     
    {/* </Container> */}
  </div>
    );
}

export default Content;