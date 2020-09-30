import React, {useState} from 'react';
import {Dropdown, FormControl } from 'react-bootstrap';
import stateData from './stateData';


const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
	<a
		href=''
		ref={ref}
		onClick={(e) => {
			e.preventDefault();
			onClick(e);
		}}>
		{children}
		&#x25bc;
	</a>
));

const CustomMenu = React.forwardRef(
	({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
		const [value, setValue] = useState('');

		return (
			<div
				ref={ref}
				style={style}
				className={className}
				aria-labelledby={labeledBy}>
				<FormControl
					autoFocus
					className='mx-3 my-2 w-auto'
					placeholder='Type to filter...'
					onChange={(e) => setValue(e.target.value)}
					value={value}
				/>
				<ul className='list-unstyled'>
					{React.Children.toArray(children).filter(
						(child) =>
							!value || child.props.children.toLowerCase().startsWith(value)
					)}
				</ul>
			</div>
		);
	}
);


function Register(props) {
	const goToLink = (data) => {
		props.toggleState(data);
	}
    return (
			<div>
				<Dropdown>
					<Dropdown.Toggle as={CustomToggle} id='dropdown-custom-components'>
						Select a state
					</Dropdown.Toggle>

					<Dropdown.Menu as={CustomMenu}>
						{stateData.map((st, i) => {
							return (
								<Dropdown.Item key={i} onClick={() => goToLink(st)}>{st.name}</Dropdown.Item>
							)
						})}
						{/* <Dropdown.Item onClick={() => goToLink('http://www.google.com')} eventKey='1'>Alabama</Dropdown.Item> */}

					</Dropdown.Menu>
				</Dropdown>
			</div>
		);
}

export default Register;