/** @jsx dom */
import dom from 'magic-virtual-element';
import {render, tree} from 'deku';
import Popup from '../';

const App = {
	render({state}, setState) {
		const {open} = state;

		function openPopup() {
			setState({open: true});
		}

		function closePopup() {
			setState({open: false});
		}

		return (
			<div>
				<button onClick={openPopup}>Open popup!</button>
				<Popup open={open}>
					<h1>Hello world!</h1>
					<button onClick={closePopup}>Close popup!</button>
				</Popup>
			</div>
		);
	}
}

const app = tree(<App/>);
render(app, document.body);
