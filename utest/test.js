
(function($) {

	$(function() {

		var body = $('body'),
			input1 = $('<input type="text">'),
			input2 = input1.clone();

		body.append(input1).append(input2);

		test('init', function() {

			input1.autoChange();

			ok(input1.data('auto-change') !== null, 'auto-change data property setted');
			ok(input1.data('auto-change-prev-val') !== null, 'previous value saved');

			input2.autoChange(true);

			ok(input2.data('auto-change') !== null, 'auto-change data property setted in save mode');
			ok(input2.data('auto-change-prev-val') !== null, 'previous value saved in save mode');

		});

		test('events', function() {

			var c1 = c2 = 0;

			function fn1() {c1++;}
			function fn2() {c2++;}

			// on handlers

			input1.on('change', fn1);
			input1.on('auto-change', fn2);

			input2.on('change', fn1);
			input2.on('auto-change', fn2);

			input1.trigger('change');
			input2.trigger('auto-change');

			ok(c1 === 1, 'change triggers');
			ok(c2 === 1, 'auto-change triggers in save mode');

			// off handlers

			input1.off('change', fn1);
			input1.off('auto-change', fn2);

			input2.off('change', fn1);
			input2.off('auto-change', fn2);

			input1.trigger('change');
			input2.trigger('auto-change');

			ok(c1 === 1, 'no events');
			ok(c2 === 1, 'no events in save mode');

		});

		test('destroy', function() {

			input1.autoChange(null);
			input2.autoChange(null);

			ok(input1.data('auto-change') === null, 'auto-change data property destroyed');
			ok(input1.data('auto-change-prev-val') === null, 'previous value destroyed');

			ok(input2.data('auto-change') === null, 'auto-change data property destroyed in save mode');
			ok(input2.data('auto-change-prev-val') === null, 'previous value destroyed in save mode');


		});

		input1.remove();
		input2.remove();

	});

})(jQuery);
