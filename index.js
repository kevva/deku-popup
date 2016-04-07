/** @jsx dom */
import dom from 'magic-virtual-element';

const propTypes = {
	onClickOutside: {
		type: 'function'
	},
	open: {
		type: 'boolean'
	}
};

const handleClickOutside = onClickOutside => e => e.delegateTarget === e.target && onClickOutside();

const afterMount = ({props, state}, el, setState) => {
	const {open} = props;

	if (open) {
		setState({open: true});
	}
};

const afterUpdate = ({props}, prevProps, prevState, setState) => {
	if (!props.open && (prevProps.open || prevState.open)) {
		setState({open: false});
	}

	if (props.open && (!prevProps.open || !prevState.open)) {
		setState({open: true});
	}
};

const render = ({props, state}) => {
	const {children, onClickOutside} = props;
	const {open} = state;
	const overlayClasses = {
		Overlay: true,
		'is-open': open
	};

	const overlayCss = {
		position: 'fixed',
		'z-index': 9999,
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		display: open ? 'block' : 'none',
		width: '100%',
		height: '100%'
	};

	const popupClasses = {
		Popup: true,
		'is-open': open
	};

	const popupCss = {
		position: 'fixed',
		top: '50%',
		left: '50%',
		'-webkit-transform': 'translate(-50%, -50%)',
		transform: 'translate(-50%, -50%)'
	};

	return (
		<div class={overlayClasses} style={overlayCss} onClick={handleClickOutside(onClickOutside)}>
			<div class={[popupClasses, props.class]} style={popupCss}>
				{children}
			</div>
		</div>
	);
};

export default {afterMount, afterUpdate, propTypes, render};
