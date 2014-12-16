// ==UserScript==
// @name IdleNovice
// @description Suggests the best game to idle on for optimal trading card income.
// @author cpancake
// @downloadURL http://github.com/cpancake/idlenovice
// @updateURL https://github.com/cpancake/idlenovice/raw/master/idlenovice.user.js
// @include http*://*steamcommunity.com/id/*/badges
// @version 0.2
// @copyright 2014 cpancake
// @namespace http://github.com/cpancake/idlenovice
// ==/UserScript==

(function() {
	$ = jQuery;

	if(!$('.playerAvatar a') || $('.playerAvatar a')[0].href != $('.profile_small_header_name .whiteLink')[0].href) return;

	var CSS = "#idleNovice {width: 906px; border-radius: 4px; border: solid 1px; border-color: #1a1819 #515153 #515153 #1a1819; background-color: #1d1e20; padding: 20px; margin-bottom: 24px;}\
			   #idleNovice h2, #idleNovice h3 { font-size: 24px; font-family: 'Motiva Sans Thin', Arial, Helvetica, Verdana, sans-serif; color: #5491cf; }\
			   #idleNovice .btn_small_thin { margin-top: 10px; }\
			   #idleNovice h3 { font-size: 16px; }\
			   #idleNovice-indicator { padding-top: 5px; display: none; }\
			   #idleNovice-right { width: 80%; display: none; float: left; }\
			   #idleNovice-left { padding-right: 25px; float: left; } ";

	// async library
	(function(){function w(a){var b=!1;return function(){if(b)throw Error("Callback was already called.");b=!0;a.apply(n,arguments)}}var d={},n,x;n=this;null!=n&&(x=n.async);d.noConflict=function(){n.async=x;return d};var B=Object.prototype.toString,p=Array.isArray||function(a){return"[object Array]"===B.call(a)},l=function(a,b){if(a.forEach)return a.forEach(b);for(var c=0;c<a.length;c+=1)b(a[c],c,a)},m=function(a,b){if(a.map)return a.map(b);var c=[];l(a,function(a,f,g){c.push(b(a,f,g))});return c},C=
	function(a,b,c){if(a.reduce)return a.reduce(b,c);l(a,function(a,f,g){c=b(c,a,f,g)});return c},s=function(a){if(Object.keys)return Object.keys(a);var b=[],c;for(c in a)a.hasOwnProperty(c)&&b.push(c);return b};"undefined"!==typeof process&&process.nextTick?(d.nextTick=process.nextTick,d.setImmediate="undefined"!==typeof setImmediate?function(a){setImmediate(a)}:d.nextTick):(d.nextTick="function"===typeof setImmediate?function(a){setImmediate(a)}:function(a){setTimeout(a,0)},d.setImmediate=d.nextTick);
	d.each=function(a,b,c){function e(b){b?(c(b),c=function(){}):(f+=1,f>=a.length&&c())}c=c||function(){};if(!a.length)return c();var f=0;l(a,function(a){b(a,w(e))})};d.forEach=d.each;d.eachSeries=function(a,b,c){c=c||function(){};if(!a.length)return c();var e=0,f=function(){b(a[e],function(b){b?(c(b),c=function(){}):(e+=1,e>=a.length?c():f())})};f()};d.forEachSeries=d.eachSeries;d.eachLimit=function(a,b,c,e){u(b).apply(null,[a,c,e])};d.forEachLimit=d.eachLimit;var u=function(a){return function(b,c,
	e){e=e||function(){};if(!b.length||0>=a)return e();var f=0,g=0,d=0;(function D(){if(f>=b.length)return e();for(;d<a&&g<b.length;)g+=1,d+=1,c(b[g-1],function(a){a?(e(a),e=function(){}):(f+=1,--d,f>=b.length?e():D())})})()}},q=function(a){return function(){var b=Array.prototype.slice.call(arguments);return a.apply(null,[d.each].concat(b))}},y=function(a,b){return function(){var c=Array.prototype.slice.call(arguments);return b.apply(null,[u(a)].concat(c))}},r=function(a){return function(){var b=Array.prototype.slice.call(arguments);
	return a.apply(null,[d.eachSeries].concat(b))}},t=function(a,b,c,e){b=m(b,function(a,b){return{index:b,value:a}});if(e){var f=[];a(b,function(a,b){c(a.value,function(c,e){f[a.index]=e;b(c)})},function(a){e(a,f)})}else a(b,function(a,b){c(a.value,function(a){b(a)})})};d.map=q(t);d.mapSeries=r(t);d.mapLimit=function(a,b,c,e){return y(b,t)(a,c,e)};d.reduce=function(a,b,c,e){d.eachSeries(a,function(a,e){c(b,a,function(a,c){b=c;e(a)})},function(a){e(a,b)})};d.inject=d.reduce;d.foldl=d.reduce;d.reduceRight=
	function(a,b,c,e){a=m(a,function(a){return a}).reverse();d.reduce(a,b,c,e)};d.foldr=d.reduceRight;var h=function(a,b,c,e){var f=[];b=m(b,function(a,b){return{index:b,value:a}});a(b,function(a,b){c(a.value,function(c){c&&f.push(a);b()})},function(a){e(m(f.sort(function(a,b){return a.index-b.index}),function(a){return a.value}))})};d.filter=q(h);d.filterSeries=r(h);d.select=d.filter;d.selectSeries=d.filterSeries;h=function(a,b,c,e){var f=[];b=m(b,function(a,b){return{index:b,value:a}});a(b,function(a,
	b){c(a.value,function(c){c||f.push(a);b()})},function(a){e(m(f.sort(function(a,b){return a.index-b.index}),function(a){return a.value}))})};d.reject=q(h);d.rejectSeries=r(h);h=function(a,b,c,e){a(b,function(a,b){c(a,function(c){c?(e(a),e=function(){}):b()})},function(a){e()})};d.detect=q(h);d.detectSeries=r(h);d.some=function(a,b,c){d.each(a,function(a,f){b(a,function(a){a&&(c(!0),c=function(){});f()})},function(a){c(!1)})};d.any=d.some;d.every=function(a,b,c){d.each(a,function(a,f){b(a,function(a){a||
	(c(!1),c=function(){});f()})},function(a){c(!0)})};d.all=d.every;d.sortBy=function(a,b,c){d.map(a,function(a,c){b(a,function(b,d){b?c(b):c(null,{value:a,criteria:d})})},function(a,b){if(a)return c(a);c(null,m(b.sort(function(a,b){var c=a.criteria,f=b.criteria;return c<f?-1:c>f?1:0}),function(a){return a.value}))})};d.auto=function(a,b){b=b||function(){};var c=s(a),e=c.length;if(!e)return b();var f={},g=[],k=function(a){g.unshift(a)},v=function(){e--;l(g.slice(0),function(a){a()})};k(function(){if(!e){var a=
	b;b=function(){};a(null,f)}});l(c,function(c){var e=p(a[c])?a[c]:[a[c]],z=function(a){var e=Array.prototype.slice.call(arguments,1);1>=e.length&&(e=e[0]);if(a){var g={};l(s(f),function(a){g[a]=f[a]});g[c]=e;b(a,g);b=function(){}}else f[c]=e,d.setImmediate(v)},h=e.slice(0,Math.abs(e.length-1))||[],m=function(){return C(h,function(a,b){return a&&f.hasOwnProperty(b)},!0)&&!f.hasOwnProperty(c)};if(m())e[e.length-1](z,f);else{var n=function(){if(m()){a:for(var a=n,b=0;b<g.length;b+=1)if(g[b]===a){g.splice(b,
	1);break a}e[e.length-1](z,f)}};k(n)}})};d.retry=function(a,b,c){var e=[];"function"===typeof a&&(c=b,b=a,a=5);a=parseInt(a,10)||5;var f=function(f,k){for(var v=function(a,b){return function(c){a(function(a,e){c(!a||b,{err:a,result:e})},k)}};a;)e.push(v(b,!--a));d.series(e,function(a,b){b=b[b.length-1];(f||c)(b.err,b.result)})};return c?f():f};d.waterfall=function(a,b){b=b||function(){};if(!p(a))return b(Error("First argument to waterfall must be an array of functions"));if(!a.length)return b();var c=
	function(a){return function(f){if(f)b.apply(null,arguments),b=function(){};else{var g=Array.prototype.slice.call(arguments,1),k=a.next();k?g.push(c(k)):g.push(b);d.setImmediate(function(){a.apply(null,g)})}}};c(d.iterator(a))()};var A=function(a,b,c){c=c||function(){};if(p(b))a.map(b,function(a,b){a&&a(function(a){var c=Array.prototype.slice.call(arguments,1);1>=c.length&&(c=c[0]);b.call(null,a,c)})},c);else{var e={};a.each(s(b),function(a,c){b[a](function(b){var d=Array.prototype.slice.call(arguments,
	1);1>=d.length&&(d=d[0]);e[a]=d;c(b)})},function(a){c(a,e)})}};d.parallel=function(a,b){A({map:d.map,each:d.each},a,b)};d.parallelLimit=function(a,b,c){A({map:y(b,t),each:u(b)},a,c)};d.series=function(a,b){b=b||function(){};if(p(a))d.mapSeries(a,function(a,b){a&&a(function(a){var c=Array.prototype.slice.call(arguments,1);1>=c.length&&(c=c[0]);b.call(null,a,c)})},b);else{var c={};d.eachSeries(s(a),function(b,d){a[b](function(a){var k=Array.prototype.slice.call(arguments,1);1>=k.length&&(k=k[0]);c[b]=
	k;d(a)})},function(a){b(a,c)})}};d.iterator=function(a){var b=function(c){var e=function(){a.length&&a[c].apply(null,arguments);return e.next()};e.next=function(){return c<a.length-1?b(c+1):null};return e};return b(0)};d.apply=function(a){var b=Array.prototype.slice.call(arguments,1);return function(){return a.apply(null,b.concat(Array.prototype.slice.call(arguments)))}};h=function(a,b,c,e){var d=[];a(b,function(a,b){c(a,function(a,c){d=d.concat(c||[]);b(a)})},function(a){e(a,d)})};d.concat=q(h);
	d.concatSeries=r(h);d.whilst=function(a,b,c){a()?b(function(e){if(e)return c(e);d.whilst(a,b,c)}):c()};d.doWhilst=function(a,b,c){a(function(e){if(e)return c(e);var f=Array.prototype.slice.call(arguments,1);b.apply(null,f)?d.doWhilst(a,b,c):c()})};d.until=function(a,b,c){a()?c():b(function(e){if(e)return c(e);d.until(a,b,c)})};d.doUntil=function(a,b,c){a(function(e){if(e)return c(e);var f=Array.prototype.slice.call(arguments,1);b.apply(null,f)?c():d.doUntil(a,b,c)})};d.queue=function(a,b){function c(a,
	b,c,e){a.started||(a.started=!0);p(b)||(b=[b]);if(0==b.length)return d.setImmediate(function(){a.drain&&a.drain()});l(b,function(b){b={data:b,callback:"function"===typeof e?e:null};c?a.tasks.unshift(b):a.tasks.push(b);a.saturated&&a.tasks.length===a.concurrency&&a.saturated();d.setImmediate(a.process)})}void 0===b&&(b=1);var e=0,f={tasks:[],concurrency:b,saturated:null,empty:null,drain:null,started:!1,paused:!1,push:function(a,b){c(f,a,!1,b)},kill:function(){f.drain=null;f.tasks=[]},unshift:function(a,
	b){c(f,a,!0,b)},process:function(){if(!f.paused&&e<f.concurrency&&f.tasks.length){var b=f.tasks.shift();f.empty&&0===f.tasks.length&&f.empty();e+=1;var c=w(function(){--e;b.callback&&b.callback.apply(b,arguments);f.drain&&0===f.tasks.length+e&&f.drain();f.process()});a(b.data,c)}},length:function(){return f.tasks.length},running:function(){return e},idle:function(){return 0===f.tasks.length+e},pause:function(){!0!==f.paused&&(f.paused=!0)},resume:function(){if(!1!==f.paused){f.paused=!1;for(var a=
	1;a<=f.concurrency;a++)d.setImmediate(f.process)}}};return f};d.priorityQueue=function(a,b){function c(a,b){return a.priority-b.priority}function e(a,b,c){for(var d=-1,e=a.length-1;d<e;){var f=d+(e-d+1>>>1);0<=c(b,a[f])?d=f:e=f-1}return d}function f(a,b,f,g){a.started||(a.started=!0);p(b)||(b=[b]);if(0==b.length)return d.setImmediate(function(){a.drain&&a.drain()});l(b,function(b){b={data:b,priority:f,callback:"function"===typeof g?g:null};a.tasks.splice(e(a.tasks,b,c)+1,0,b);a.saturated&&a.tasks.length===
	a.concurrency&&a.saturated();d.setImmediate(a.process)})}var g=d.queue(a,b);g.push=function(a,b,c){f(g,a,b,c)};delete g.unshift;return g};d.cargo=function(a,b){var c=!1,e=[],f={tasks:e,payload:b,saturated:null,empty:null,drain:null,drained:!0,push:function(a,c){p(a)||(a=[a]);l(a,function(a){e.push({data:a,callback:"function"===typeof c?c:null});f.drained=!1;f.saturated&&e.length===b&&f.saturated()});d.setImmediate(f.process)},process:function k(){if(!c)if(0===e.length)f.drain&&!f.drained&&f.drain(),
	f.drained=!0;else{var d="number"===typeof b?e.splice(0,b):e.splice(0,e.length),h=m(d,function(a){return a.data});f.empty&&f.empty();c=!0;a(h,function(){c=!1;var a=arguments;l(d,function(b){b.callback&&b.callback.apply(null,a)});k()})}},length:function(){return e.length},running:function(){return c}};return f};h=function(a){return function(b){var c=Array.prototype.slice.call(arguments,1);b.apply(null,c.concat([function(b){var c=Array.prototype.slice.call(arguments,1);"undefined"!==typeof console&&
	(b?console.error&&console.error(b):console[a]&&l(c,function(b){console[a](b)}))}]))}};d.log=h("log");d.dir=h("dir");d.memoize=function(a,b){var c={},e={};b=b||function(a){return a};var f=function(){var f=Array.prototype.slice.call(arguments),k=f.pop(),h=b.apply(null,f);h in c?d.nextTick(function(){k.apply(null,c[h])}):h in e?e[h].push(k):(e[h]=[k],a.apply(null,f.concat([function(){c[h]=arguments;var a=e[h];delete e[h];for(var b=0,d=a.length;b<d;b++)a[b].apply(null,arguments)}])))};f.memo=c;f.unmemoized=
	a;return f};d.unmemoize=function(a){return function(){return(a.unmemoized||a).apply(null,arguments)}};d.times=function(a,b,c){for(var e=[],f=0;f<a;f++)e.push(f);return d.map(e,b,c)};d.timesSeries=function(a,b,c){for(var e=[],f=0;f<a;f++)e.push(f);return d.mapSeries(e,b,c)};d.seq=function(){var a=arguments;return function(){var b=this,c=Array.prototype.slice.call(arguments),e=c.pop();d.reduce(a,c,function(a,c,d){c.apply(b,a.concat([function(){var a=arguments[0],b=Array.prototype.slice.call(arguments,
	1);d(a,b)}]))},function(a,c){e.apply(b,[a].concat(c))})}};d.compose=function(){return d.seq.apply(null,Array.prototype.reverse.call(arguments))};h=function(a,b){var c=function(){var c=this,d=Array.prototype.slice.call(arguments),e=d.pop();return a(b,function(a,b){a.apply(c,d.concat([b]))},e)};if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return c.apply(this,d)}return c};d.applyEach=q(h);d.applyEachSeries=r(h);d.forever=function(a,b){function c(d){if(d){if(b)return b(d);throw d;
	}a(c)}c()};"undefined"!==typeof module&&module.exports?module.exports=d:"undefined"!==typeof define&&define.amd?define([],function(){return d}):n.async=d})();

	if(!localStorage.getItem('idleNovice'))
		localStorage.setItem('idleNovice', '{}');

	function median(values) 
	{
		values.sort( function(a,b) {return a - b;} );
		var half = Math.floor(values.length/2);
		if(values.length % 2)
			return values[half];
		else
			return (values[half-1] + values[half]) / 2.0;
	}

	function saveItem(appid, info)
	{
		var idleNovice;
		if(localStorage.getItem('idleNovice').length == 0)
			idleNovice = {};
		else
			idleNovice = JSON.parse(localStorage.getItem('idleNovice'));
		idleNovice[appid] = info;
		localStorage.setItem('idleNovice', JSON.stringify(idleNovice));
	}

	function getItem(appid)
	{
		if(localStorage.getItem('idleNovice').length == 0)
			return null;
		var idleNovice = JSON.parse(localStorage.getItem('idleNovice'));
		return idleNovice[appid] || null;
	}

	function findPrice(appid, callback)
	{
		var item = getItem(appid);
		if(item)
		{
			var date = item.date;
			if(date + (60 * 60 * 3) > Math.floor(Date.now() / 1000))
				return callback(null, item.price);
		}
		var params = {
			query: '',
			start: 0,
			count: 100,
			search_descriptions: 0,
			sort_column: 'quantity',
			sort_dir: 'desc',
			appid: 753,
			'category_753_Game[]': 'tag_app_' + appid,
			'category_753_item_class[]': 'tag_item_class_2'
		};

		$.get('http://steamcommunity.com/market/search/render/?' + $.param(params), function(data) {
			var dom = $.parseHTML(data.results_html);
			window.data = data;
			var prices = [];
			var currencyUnit = '';
			$(dom)
				.filter('.market_listing_row_link')
				.children()
				.children()
				.filter('.market_listing_their_price')
				.each(function(k, e) {
					totalNumber++;
					var priceText = $(e).children().filter('.market_table_value').children().filter('span').text();
					currencyUnit = priceText.substr(0, 1);
					prices.push(parseFloat(priceText.substr(1)));
				});
			var medianPrice = median(prices);
			saveItem(appid, {
				price: medianPrice,
				date: Math.floor(Date.now() / 1000)
			});
			saveItem('currency', currencyUnit);
			callback(null, totalPrice / totalNumber);
		});
	}

	function findAllGames()
	{
		var games = {};
		$('.badge_title_stats').each(function(k, e) {
			var num = $(e).children().filter('.progress_info_bold').text().split(' ')[0];
			if(num == 'No') return;
			var appId = $(e).children().filter('.badge_title_playgame').children().attr('href').substr(12);
			var title = $($(e).parent()).children().filter('.badge_title')[0].childNodes[0].textContent.trim();
			games[appId] = {
				number: parseInt(num),
				title: title
			};
		});
		return games;
	}

	function loadAllGames(games, callback)
	{
		async.parallelLimit(
			Object.keys(games).map(function(k) { return function(callback) { findPrice(k, callback); }}),
			1,
			function(err, results) {
				if(callback) callback(null);
			}
		);
	}

	function getTopSuggestions(games)
	{
		var data = JSON.parse(localStorage.getItem('idleNovice'));
		var bestGames = Object.keys(games).sort(function(a, b) {
			var aPrice = data[a].price * games[a].number;
			var bPrice = data[b].price * games[b].number;
			if(aPrice < bPrice) return -1;
			if(bPrice < aPrice) return 1;
			return 0;
		});
		return bestGames.reverse().slice(0, 5).map(function(appid) {
			return {
				number: games[appid].number,
				price: data[appid].price,
				title: games[appid].title,
				appid: appid
			};
		});
	}

	function setupIdleNovice()
	{
		$('style').after('<style>' + CSS + '</style>')
		$('.profile_xp_block').after('<div id="idleNovice"><div id="idleNovice-left"><h2>IdleNovice</h2></div><div id="idleNovice-right"><h3>Suggestions</h3><div id="idleNovice-suggestions"></div></div><div style="clear:both;"></div></div>');
		$('#idleNovice-left').append('<a id="idleNovice-refresh" href="javascript:void(null);" class="btn_green_white_innerfade btn_small_thin"><span>Load Current Prices</span></a>');
		$('#idleNovice-left').append('<div id="idleNovice-indicator">Loading</div>');
		$('#idleNovice-refresh').click(function(e) {
			$('#idleNovice-indicator').show();
			loadAllGames(findAllGames(), function() {
				$('#idleNovice-indicator').hide();

				var suggestions = getTopSuggestions(findAllGames());
				var currencyUnit = getItem('currency');
				var suggestionsList = suggestions.map(function(s) {
					return '<li>' + s.title + ' - ' + s.number + ' cards at a median price of ' + currencyUnit + (Math.floor(s.price * 100) / 100) + ' each.';
				}).join('\n');
				$('#idleNovice-suggestions').empty().append('<ul>' + suggestionsList + '</ul>')

				$('#idleNovice-right').show();
			});
		});
	}

	setupIdleNovice();
})();