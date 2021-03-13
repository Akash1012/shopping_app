import React from "react";
import { connect } from 'react-redux';
import MenuItem from "../menu-item/menu-item.compoments";
import { selectDirectorySections } from '../../redux/directory/directory.selector';
import "./directory.style.scss";

const Directory = (props) => {

	const { sections } = props;
	console.log("sections", sections)

	return (
		<div className="directory-menu">
			{sections.map(({ id, ...otherSectionProps }) => {
				return (
					<MenuItem key={id} {...otherSectionProps} />
				);
			})}
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		sections: selectDirectorySections(state)
	}
}

export default connect(mapStateToProps)(Directory);


// Other Ways

// const mapStateToProps = ({ directory: { sections } }) => {
// 	return {
// 		sections: sections
// 	}
// }