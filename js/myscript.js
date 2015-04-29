$(function() {

	"use strict";

	$('[data-toggle="tooltip"]').tooltip();

	$('.avatar').on('click', function() {
		$('#hello').typed({
			strings: [" ^1500 Hi, ^500 I'm Erik. ^1500 <br>I'm a <a class='typedModal' href='#writerModal' data-toggle='modal'>writer</a> and <a class='typedModal' href='#devModal' data-toggle='modal'>web developer</a> ^250 in Los Angeles. ^1500 <br> Nine months ago, ^500 I focused my knack for language acquisition ^250 on progamming languages ^500 and haven't looked back since."],
			typeSpeed: 35
		});
	});
	
});