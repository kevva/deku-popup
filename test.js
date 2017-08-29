/** @jsx dom */
import assertElement from 'assert-element';
import componentMock from 'component-mock';
import dom from 'magic-virtual-element';
import test from 'ava';
import Popup from '.';

const mock = componentMock(Popup);

test('has Overlay element', () => {
	const m = mock.render();
	assertElement.hasClass(m, 'Overlay');
});

test('has Popup element', () => {
	const m = mock.render();

	assertElement.hasChildren(m, x => {
		assertElement.hasClass(x, 'Popup');
	});
});

test('renders children when passed in', () => {
	const children = <div class='Foo'/>;
	const m = mock.render({props: {children}});

	assertElement.hasChildren(m, x => {
		assertElement.hasChildren(x, y => {
			assertElement.hasClass(y, 'Foo');
		});
	});
});
