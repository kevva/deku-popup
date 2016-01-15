# deku-popup

> Popup/modal component for deku


## Install

```
$ npm install --save deku-popup
```


## Usage

```js
import Popup from 'deku-popup';

const openPopup = (setState) => {
	setState({open: true});
};

const render = ({state}, setState) => {
	const {open} = state;

	return (
		<Button onClick={openPopup(setState)}>Open popup!</Button>
		<Popup open={open}>
			<h1>Hello world!</h1>
		</Popup>
	);
};

export default {render};
```


## License

MIT © [Kevin Martensson](http://github.com/kevva)
