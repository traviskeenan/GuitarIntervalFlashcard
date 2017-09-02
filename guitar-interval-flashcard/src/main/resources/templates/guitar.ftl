<!DOCTYPE html>
<html>

<head>
	<meta charset="UTF-8">
	<title>Guitar Interval Flash Card</title>
	<link rel="stylesheet" href="css/style.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.0/jquery-confirm.min.css">
</head>

<body>
	<h1>Guitar Interval Flash Card</h1>
	<div class="guitar-neck">
		<div class="fret first"></div>
		<div class="fret"></div>
		<div class="fret"></div>
		<div class="fret"></div>
		<div class="fret"></div>
		<div class="fret"></div>
		<div class="fret"></div>
		<div class="fret"></div>
		<div class="fret"></div>
		<div class="fret"></div>
		<div class="fret"></div>
		<div class="fret"></div>
		<div class="fret"></div>

		<ul class="dots">
			<li></li>
			<li></li>
			<li></li>
			<li></li>
		</ul>

		<ul class="strings">
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
		</ul>

		<ul class="open-notes">
			<li class="low-e">E</li>
			<li class="b">B</li>
			<li class="g">G</li>
			<li class="d">D</li>
			<li class="a">A</li>
			<li class="high-e">E</li>
		</ul>
		<div class="notes">
			<div class="mask low-e"><ul></ul></div>
			<div class="mask a"><ul></ul></div>
			<div class="mask d"><ul></ul></div>
			<div class="mask g"><ul></ul></div>
			<div class="mask b"><ul></ul></div>
			<div class="mask high-e"><ul></ul></div>
		</div>
	</div>

	<div class="controls">
		<!--
		<a class="up" href="#">Tune 1/2 Step Up</a>
		<a class="down" href="#">Tune 1/2 Step Down</a>
		-->
		<h2>Choose your answer:</h2>
		<ul>
			<li>1</li>
			<li>b2</li>
			<li>2</li>
			<li>b3</li>
			<li>3</li>
			<li>4</li>
			<li>b5</li>
			<li>5</li>
			<li>b6</li>
			<li>6</li>
			<li>b7</li>
			<li>7</li>
		</ul>
	</div>
	<script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.0/jquery-confirm.min.js"></script>

	<script src="js/index.js"></script>

</body>

</html>