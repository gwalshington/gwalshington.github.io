window.onload = function()	{
	// var getElementByClassName("lyric")
	
	for(i = 0; i < 100 ; i++ )	 {
		var newCount = i -1;
		$('<p>' + newCount + ' bottles of beer on the wall.</p><br>').insertAfter(".lyric");

		$('<p>Take one down, pass it around,</p>').insertAfter(".lyric");

		$('<p>' + i + ' bottles of beer on the wall.</p>').insertAfter(".lyric");
		$('<p>' + i + ' bottles of beer on the wall.</p>').insertAfter(".lyric");

	}


	// for (i = 0; i <3; i++ )	{
	// 	document.write("hello")
	// }
}