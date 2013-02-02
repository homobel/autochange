
/****
/*	jQuery AutoChange Plug-in, v 1.0.1
/*	by Archy Sharp 
/*	MIT License
****/

(function($, undefined) {

	$.fn.autoChange = function(arg) {

		if(arg === null) {
			return this.each(function(i, c) {
				$.fn.autoChange.destroy($(c));
			});
		}
		else {
			return this.each(function(i, c) {

				input = $(c);

				if(input.data('auto-change') !== null) {

					input
						.data('auto-change', arg)
						.data('auto-change-prev-val', input.val())
						.on('focus', $.fn.autoChange.onChange)
						.on('blur', $.fn.autoChange.offChange);

				}

			});
		}

	};

	// helpers

	$.fn.autoChange.destroy = function(input) {

		input
			.data('auto-change', null)
			.data('auto-change-prev-val', null)
			.off('focus', $.fn.autoChange.onChange)
			.off('blur', $.fn.autoChange.offChange);

	};
	
	// handlers

	$.fn.autoChange.keyHandler = function(e) {

		var input = $(this),
			prevStr = input.data('auto-change-prev-val'),
			val = input.val();

		if(prevStr !== val) {

			input.data('auto-change-prev-val', val);

			if(input.data('auto-change')) {
				input.trigger('auto-change', e);
			}
			else {
				input.trigger('change', e);
			}

		}
	
	};
	
	$.fn.autoChange.onChange = function() {

		$(this).on('keyup', $.fn.autoChange.keyHandler);

	};
	
	$.fn.autoChange.offChange = function(e) {

		$(this).off('keyup', $.fn.autoChange.keyHandler);

	};

})(jQuery);
