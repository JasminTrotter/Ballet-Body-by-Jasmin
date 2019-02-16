import React from 'react';



export default class MoreInfo extends React.Component {
	componentDidMount() {
  		
	}

	render() {
		return (
			
			<div className="more-info">
				<p>{this.props.more1}</p>
                <p>{this.props.more2}</p>
                <p>Class times are indicated on the calendar above.</p>
			</div>
		);
	}
}