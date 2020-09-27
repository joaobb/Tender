import { toast } from 'react-toastify';

const Notificate = (text, type) => {
	let notification;
	const options = {
		containerId: 'toast',
		position: 'top-right',
		autoClose: 3000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		draggablePercent: 60,
	};

	switch (type) {
		case 'error':
			notification = () => toast.error(text, options);
			break;
		case 'success':
			notification = () => toast.success(text, options);
			break;
		case 'warn':
			notification = () => toast.warn(text, options);
			break;
		case 'info':
			notification = () => toast.info(text, options);
			break;
		default:
			notification = () => toast(text, options);
			break;
	}

	return new Promise((resolve) => {
		notification();
		setTimeout(() => {
			resolve();
		}, options.autoClose);
	});
};

export default Notificate;
