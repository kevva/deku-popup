/** @jsx dom */
import dom from 'magic-virtual-element';

const overlayClasses = open => ({
	Overlay: true,
	'is-open': open
});

const popupClasses = open => ({
	Popup: true,
	'is-open': open
});

const overlayCss = open => ({
	'z-index': 9999,
	bottom: 0,
	display: open ? 'block' : 'none',
	height: '100%',
	left: 0,
	position: 'fixed',
	right: 0,
	top: 0,
	width: '100%'
});

const popupCss = {
	position: 'fixed',
	top: '50%',
	left: '50%',
	'-webkit-transform': 'translate(-50%, -50%)',
	transform: 'translate(-50%, -50%)'
};

const handleClickOutside = onClickOutside => e => onClickOutside && e.delegateTarget === e.target && onClickOutside();

const afterMount = ({props, state}, el, setState) => {
	const {open} = props;

	if (open) {
		setState({open: true});
	}
};

const afterUpdate = ({props}, prevProps, prevState, setState) => {
	const {open} = props;

	if (!open && (prevProps.open || prevState.open)) {
		setState({open: false});
	}

	if (open && (!prevProps.open || !prevState.open)) {
		setState({open: true});
	}
};

const render = ({props, state}) => {
	const {children, onClickOutside} = props;
	const {open} = state;

	return (
		<div class={overlayClasses(open)} style={overlayCss(open)} onClick={handleClickOutside(onClickOutside)}>
			<div class={[popupClasses(open), props.class]} style={popupCss}>
				{children}
			</div>
		</div>
	);
};

const propTypes = {
	onClickOutside: {
		type: 'function'
	},
	open: {
		type: 'boolean'
	}
};

export default {afterMount, afterUpdate, propTypes, render};
