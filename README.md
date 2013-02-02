# Autochange jQuery plugin

by Archy Sharp
MIT License

*v 1.0.1*

	$('input').autoChange().on('change', fn);

This code makes input to trigger change event on every key event when element focused.
Notice that native change event triggers on blur also. To provide that there is save mode provided:

	$('input').autoChange(true).on('auto-change', fn);

To destroy all changes that plugin makes through initialization try this:

	$('input').autoChange(null);

Forced change events obtain the original event object as second paramenter.

	function fn(e, eOriginal) {
		// ...
	}

Enjoy it.
