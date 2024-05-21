import './formstyle.css'

function SendForm(){
    return(
        <div className="form-container">
        <h1>Send a Message to us</h1>
        <form>
          <input placeholder="Name"/>
          <input placeholder="Email"/>
          <input placeholder="Subject"/>
          <textarea placeholder="Message"></textarea>
          <button className='btn'>Send Message</button>
        </form>
      </div>
    );
}

export default SendForm;