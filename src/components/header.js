import React from 'react'
import { BrowserRouter as Router , Link  } from "react-router-dom";
import './Header.css';

class Header extends React.Component{
    constructor(props){
        super(props);

        this.state={
            hasScrolled : false
        }
    }
    
    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll)
    }

    handleScroll = (event) => {
        const scrollTop = window.pageYOffset
    
        if (scrollTop > 50) {
          this.setState({ hasScrolled: true })
        } else {
          this.setState({ hasScrolled: false })
        }
      }

    render(){
        return(
            <Router>
             <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
                <div className="HeaderGroup">
                    <Link to ="/">Home</Link>
                    <Link to ="/about">About</Link>
                    <Link to ="/skills">Skills</Link>
                    <Link to ="/projects">Projects</Link>
                    <Link to ="/other">Other</Link>
                    <button>Contact</button>
                </div> 
             </div>
            </Router>
        )
    }
}
export default Header
