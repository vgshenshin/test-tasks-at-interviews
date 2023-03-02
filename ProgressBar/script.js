const elements = (className) => Object.assign(document.createElement('div'), {className});

const container = elements('container');
const wrapper = elements('wrapper');
const label = elements('label');
const progress = elements('progress');
const load = elements('load');

const setLoading = () => {
	let count = 0;

	const intervalID = setInterval(visibleLoad, 20);

	function visibleLoad() {
		label.textContent = `${count}%`;
		load.style.width = `${count}%`;
		count++;
		if (count > 100) {
			clearInterval(intervalID);
			// setLoading();
		}
	}
}

setLoading();

document.body.append(container);
container.append(wrapper);
wrapper.append(label, progress);
progress.append(load);