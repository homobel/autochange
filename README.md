# Autochange jQuery plugin

by Archy Sharp
MIT License

*v 1.0.1*

	$('input').autoChange().on('change', fn);

This code makes input to trigger change event on every key event when element focused.
Notice that native change event triggers on blur also. There is safe mode to prevent this:

	$('input').autoChange(true).on('auto-change', fn);

To destroy all changes that plugin makes through initialization try this:

	$('input').autoChange(null);

Forced events obtains the original event object as second argument:

	function fn(e, eOriginal) {
		// ...
	}

Enjoy it.
