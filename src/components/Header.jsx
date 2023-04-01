import React from "react";
import DateInput from "./DateInput";



const Header = ({date, changeDate}) => {
	return (
		<div className="header">
			<h2 className="title"> Astronomy Photo of the Day</h2>
			<DateInput 
				date={date}
				changeDate={changeDate}
			/>
		</div>
	)
};

export default Header;