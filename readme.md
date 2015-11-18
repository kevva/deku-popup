# deku-popup

> Popup/modal component for deku


## Install

```
$ npm install --save deku-popup
```


## Usage

```js
import Popup from 'deku-popup';

export function render({state}, setState) {
	const {open} = state;

	function openPopup() {
		setState({open: true});
	}

	return (
		<Button onClick={openPopup}>Open popup!</Button>
		<Popup open={open}>
			<h1>Hello world!</h1>
		</Popup>
	);
}
```


## License

MIT © [Kevin Martensson](http://github.com/kevva)
