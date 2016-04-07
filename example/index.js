/** @jsx dom */
import dom from 'magic-virtual-element';
import {render as r, tree} from 'deku';
import Popup from '../';

const openPopup = setState => () => setState({open: true});
const closePopup = setState => () => setState({open: false});

const render = ({state}, setState) => {
	const {open} = state;

	return (
		<div>
			<button onClick={openPopup(setState)}>Open popup!</button>
			<Popup open={open} onClickOutside={closePopup(setState)}>
				<h1>Hello world!</h1>
				<button onClick={closePopup(setState)}>Close popup!</button>
			</Popup>
		</div>
	);
};

const App = {render};
const app = tree(<App/>);

r(app, document.body);
