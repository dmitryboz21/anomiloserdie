$(document).ready(function () {
	$(".tabs-content__item").hide();
	$(".tabs-content__item:first").show();
	/* в режиме вкладок */
	$(".tabs-triggers__item").click(function () {
		$(".tabs-content__item").hide();
		var activeTab = $(this).attr("data-rel");
		$("#" + activeTab).fadeIn();
		$(".tabs-triggers__item").removeClass("active");
		$(this).addClass("active");
	});
	$('.tabs-triggers__item').click(function (e) {
		e.preventDefault();


		$(this).addClass('tabs-triggers__item--active').siblings().removeClass('tabs-triggers__item--active');
		var id = $(this).index();

	});


	$('.js-q-input').on('click', function () {
		$(this).closest('.q-input-wrap').addClass('q-input-wrap--label-top');
	});

	$('.js-q-input').blur(function () {
		if (!$.trim(this.value).length) { // zero-length string AFTER a trim
			$(this).closest('.q-input-wrap').removeClass('q-input-wrap--label-top');
		} else {
			$(this).closest('.q-input-wrap').addClass('q-input-wrap--label-top');
		}
	});

	$('.js-airdatepicker').each(function () {
		let dp = new AirDatepicker($(this)[0], {
			//isMobile: true,
			autoClose: true,
			onSelect: function onSelect() {
				console.log($(dp.$el).trigger('blur'));
			}
		});
	});

	$('.js-phone-mask').each(function () {
		var phoneMask = IMask(
			$(this)[0], {
				mask: '+{7}(000)000-00-00'
			});
	});


	$('.js-simple-select').each(function (index) {
		var placeholder = $(this).attr('data-placeholder');
		var inp = $(this);
		if (placeholder.length > 0) {
			$(this).addClass('simple-select--placeholder-selected');
		}

		$(this).select2({
			language: 'ru',
			theme: 'custom-theme',
			minimumResultsForSearch: Infinity,
			width: '100%',
			dropdownParent: $(this).siblings('.simple-select-items-wrapper')
		}).on('select2:open', function (e) {
			$(this).siblings('.simple-select-items-wrapper').addClass('simple-select-items-wrapper--show');
		}).on('select2:closing', function (e) {
			if ($(this).attr('data-close-anvaliable') !== '1') {
				e.preventDefault();
				var $this = $(this);
				$(this).attr('data-close-anvaliable', '1');
				$(this).siblings('.simple-select-items-wrapper').removeClass('simple-select-items-wrapper--show');
				setTimeout(function () {
					$this.select2('close');
				}, 550);
			} else {
				$(this).attr('data-close-anvaliable', '2');
			}
			//$(this).select2('close');

		}).on('select2:select', function (e) {
			$(this).removeClass('simple-select--placeholder-selected');
		});
		inp.siblings('.q-input-label').on('click', function () {
			inp.select2('open');
		});
	});

});