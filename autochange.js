
/****
/*	jQuery AutoChange Plug-in, v 1.0.2
/*	by Archy Sharp 
/*	MIT License
****/

(function($, undefined) {

	function destroy(input) {

		input
			.off('focus', onChange)
			.off('blur', offChange)
			.removeData('auto-change')
			.removeData('auto-change-prev-val');

	}

	function keyHandler(e) {

		var input = $(this),
			val = input.val(),
			prevStr = input.data('auto-change-prev-val');

		if(prevStr !== val) {

			input.data('auto-change-prev-val', val);

			if(input.data('auto-change')) {
				input.trigger('auto-change', e);
			}
			else {
				input.trigger('change', e);
			}

		}
	
	}
	
	function onChange() {

		$(this).on('keyup', keyHandler);

	}
	
	function offChange(e) {

		$(this).off('keyup', keyHandler);

	}

	$.fn.autoChange = function(flag) {

		if(flag === null) {

			return this.each(function(i, input) {
				destroy($(input));
			});

		}

		return this.each(function(i, input) {

			input = $(input);

			if(input.data('auto-change') === undefined) {

				input
					.on('focus', onChange)
					.on('blur', offChange)
					.data('auto-change', !!flag)
					.data('auto-change-prev-val', input.val());

			}

		});

	};

})(jQuery);
