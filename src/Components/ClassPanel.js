import React from 'react';
import MoreInfo from './MoreInfo';

export default class ClassPanel extends React.Component {
    constructor(props) {
		super(props);
		this.state = {
            isHidden: true,
            hideLabel: false
		}
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    toggleHidden() {
        this.setState({
          isHidden: !this.state.isHidden,
          hideLabel: !this.state.hideLabel
        })
      }

    render() {

        const label = this.state.hideLabel ? 'Hide' : 'Read More';
        const moreButton = this.props.more1 ? <button className="naving-button" onClick={this.toggleHidden.bind(this)}>{label}</button> : null;

        return (

                    <div className="class-panel class-panel1">
						<h3>{this.props.header}</h3>
						<h4>{this.props.subHeader}</h4>
						
						<h5 style={{"color":"red"}}>All classes require prior reservation.</h5>
						<h5>email jasmin@balletbodybyjasmin.com</h5>

						<h6>Description:</h6>
						<p>
							{this.props.description}
						</p>
                        {moreButton}
                        <div>
                            {!this.state.isHidden && <MoreInfo more1={this.props.more1} more2={this.props.more2}/> }
                        </div>
                        
						
					</div>

        );
        
    }
}