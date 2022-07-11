
import { ReactComponent as Picture } from './picture.svg';
import { ReactComponent as Email } from './Mail.svg';
import { ReactComponent as LinkedIn } from './linkedin.svg';
import './App.css';

function App() {
  return (
    <div>   
      <section className="header">
      <Picture />
        <h1 className='name' >Laura Smith</h1>
        <p className='skills'>Frontend Developer</p>
        <a href="#">laurasmith.website</a>
        <button className='email'> <Email /> Email</button> 
        <button className='linkedin'><LinkedIn /> LinkedIn</button>
    </section>
    </div>
  )
}

export default App;
