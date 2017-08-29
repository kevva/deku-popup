# deku-popup

> Popup/modal component for deku


## Install

```
$ npm install deku-popup
```


## Usage

```js
import Popup from 'deku-popup';

const openPopup = setState => {
	setState({open: true});
};

const render = ({state}, setState) => (
	<div>
		<Button onClick={openPopup(setState)}>Open popup!</Button>
		<Popup open={state.open}>
			<h1>Hello world!</h1>
		</Popup>
	</div>
);

export default {render};
```


## API

### &lt;Popup/&gt;

#### onClickOutside

Type: `Function`

Function to call when clicking outside the popup.

#### open

Type: `boolean`<br>
Default: `false`

Whether to show the popup upon the initial render.


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
