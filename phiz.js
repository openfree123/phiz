/**
 * name      : QQ表情插件
 * author    : openfree
 * link      : www.it163.org
 * date      : 2013-08-08 21:40
 * copyright : openfree all copyright
 */
 var imgUrl = './images/minblog/';
 var imgExt = '.gif';
 //表情名称语言，chinese or English
 var imgNameFormat = 'chinese';
 //图片的中英文对照表
 var imgNames = {
	aoman    : '傲慢',
	bishi    : '鄙视',
	baiyan   : '白眼',
	bizui	 : '闭嘴',
	cahan	 : '擦汗',
	caidao	 : '菜刀',
	chajin	 : '差劲',
	cheer	 : '干杯',
	chong	 : '虫',
	ciya	 : '呲牙',
	da	     : '打',
	dabian	 : '大便',
	dabing	 : '大兵',
	dajiao	 : '大叫',
	daku	 : '大哭',
	dangao	 : '蛋糕',
	danu	 : '大怒',
	dao	     : '刀',
	deyi	 : '得意',
	diaoxie	 : '凋谢',
	e	     : '真香',
	fadai	 : '发呆',
	fadou	 : '发抖',
	fan	     : '饭',
	fanu	 : '发怒',
	feiwen	 : '飞吻',
	fendou	 : '奋斗',
	gangga	 : '尴尬',
	geili	 : '给力',
	gouyin	 : '过瘾',
	guzhang	 : '鼓掌',
	haha	 : '哈哈',
	haixiu	 : '害羞',
	haqian	 : '哈欠',
	hua	     : '花',
	huaixiao : '坏笑',
	hufen	 : '互粉',
	huishou	 : '挥手',
	huitou	 : '回头',
	jingkong : '惊恐',
	jingya	 : '惊讶',
	kafei	 : '咖啡',
	keai	 : '可爱',
	kelian	 : '可怜',
	ketou	 : '磕头',
	kiss	 : '亲吻',
	ku	     : '酷',
	kuaikule : '快哭了',
	kulou	 : '骷髅',
	kun 	 : '困',
	lanqiu	 : '篮球',
	lenghan	 : '冷汗',
	liuhan	 : '流汗',
	liulei	 : '流泪',
	liwu	 : '礼物',
	love	 : '爱',
	ma  	 : '骂',
	meng	 : '萌',
	nanguo	 : '难',
	no  	 : '不行',
	ok  	 : '可以',
	peifu	 : '佩服',
	pijiu	 : '啤酒',
	pingpang : '乒乓',
	pizui	 : '撇嘴',
	qiang	 : '强',
	qinqin	 : '亲亲',
	qioudale : '糗大了',
	qiu	     : '球',
	quantou	 : '拳头',
	ruo	     : '弱',
	se   	 : '色',
	shandian : '闪电',
	shengli	 : '胜利',
	shenma	 : '神马',
	shuai	 : '帅',
	shuijiao : '睡觉',
	taiyang	 : '太阳',
	tiao	 : '跳',
	tiaopi	 : '调皮',
	tiaosheng: '跳绳',
	tiaowu	 : '跳舞',
	touxiao	 : '偷笑',
	tu	     : '吐',
	tuzi	 : '兔子',
	wabi	 : '挖鼻',
	weiqu	 : '委屈',
	weixiao	 : '闭嘴',
	wen	     : '问',
	woshou	 : '握手',
	xia	 	 : '吓',
	xianwen	 : '先问',
	xigua	 : '西瓜',
	xinsui	 : '心碎',
	xu	     : '嘘',
	yinxian	 : '阴险',
	yongbao	 : '拥抱',
	youhengheng: '右哼哼',
	youtaiji : '右太极',
	yueliang : '月亮',
	yun	     : '晕',
	zaijian	 : '再见',
	zhadan	 : '炸弹',
	zhemo	 : '折磨',
	zhuakuang: '抓狂',
	zhuanquan: '转圈',
	zhutou	 : '猪头',
	zuohengheng: '左哼哼',
	zuotaiji : '左太极',
	zuqiu	 : '足球'
};
var html = [];
html.push('<div id="bigimg" style="background-color: white; position: absolute; left: 368px; z-index: 999; width: 50px; height: 55px; border: 1px solid rgb(153, 153, 153); text-align: center; display: none;"><img style="margin-top:5px;" border="0" src="'+imgUrl+'dangao'+imgExt+'"><div style="background-color:#ECECEC; margin-top:5px; height:20px; color:#5F5F5F; line-height: 20px;">蛋糕</div></div>');
html.push('<div style="width:420px;"><img border="0" usemap="#bigblogMap" id="bigblog" src="./images/bigblog.png" />');
html.push('<map name="bigblogMap" id="bigblogMap">');
html.push('<area shape="rect" coords="1,1,27,30" href="javascript:;" title="傲慢" name="aoman">');
html.push('<area shape="rect" coords="28,1,54,30" href="javascript:;" title="白眼" name="baiyan">');
html.push('<area shape="rect" coords="54,2,82,29" href="javascript:;" title="鄙视" name="bishi">');
html.push('<area shape="rect" coords="82,1,110,29" href="javascript:;" title="闭嘴" name="bizui">');
html.push('<area shape="rect" coords="110,1,138,28" href="javascript:;" title="擦汗" name="cahan">');
html.push('<area shape="rect" coords="138,1,165,27" href="javascript:;" title="菜刀" name="caidao">');
html.push('<area shape="rect" coords="164,1,193,28" href="javascript:;" title="差劲" name="chajin">');
html.push('<area shape="rect" coords="193,0,221,28" href="javascript:;" title="干杯" name="cheer">');
html.push('<area shape="rect" coords="221,0,247,27" href="javascript:;" title="虫" name="chong">');
html.push('<area shape="rect" coords="249,-1,275,29" href="javascript:;" title="呲牙" name="ciya">');
html.push('<area shape="rect" coords="278,1,306,28" href="javascript:;" title="打" name="da">');
html.push('<area shape="rect" coords="307,1,336,31" href="javascript:;" title="大便" name="dabian">');
html.push('<area shape="rect" coords="336,2,361,30" href="javascript:;" title="大兵" name="dabing">');
html.push('<area shape="rect" coords="363,2,390,29" href="javascript:;" title="大叫" name="dajiao">');
html.push('<area shape="rect" coords="390,1,418,30" href="javascript:;" title="大哭" name="daku">');

html.push('<area shape="rect" coords="1,31,27,60" href="javascript:;" title="蛋糕" name="dangao">');
html.push('<area shape="rect" coords="28,31,54,60" href="javascript:;" title="大怒" name="danu">');
html.push('<area shape="rect" coords="54,32,82,59" href="javascript:;" title="刀" name="dao">');
html.push('<area shape="rect" coords="82,31,110,59" href="javascript:;" title="得意" name="deyi">');
html.push('<area shape="rect" coords="110,31,138,58" href="javascript:;" title="凋谢" name="diaoxie">');
html.push('<area shape="rect" coords="138,31,165,57" href="javascript:;" title="真香" name="e">');
html.push('<area shape="rect" coords="164,31,193,58" href="javascript:;" title="发呆" name="fadai">');
html.push('<area shape="rect" coords="193,30,221,58" href="javascript:;" title="发抖" name="fadou">');
html.push('<area shape="rect" coords="221,30,247,57" href="javascript:;" title="饭" name="fan">');
html.push('<area shape="rect" coords="249,29,275,59" href="javascript:;" title="发怒" name="fanu">');
html.push('<area shape="rect" coords="278,30,303,60" href="javascript:;" title="飞吻" name="feiwen">');
html.push('<area shape="rect" coords="307,31,336,61" href="javascript:;" title="奋斗" name="fendou">');
html.push('<area shape="rect" coords="336,32,361,60" href="javascript:;" title="尴尬" name="gangga">');
html.push('<area shape="rect" coords="363,32,390,59" href="javascript:;" title="给力" name="geili">');
html.push('<area shape="rect" coords="390,31,418,60" href="javascript:;" title="过瘾" name="gouyin">');

html.push('<area shape="rect" coords="1,61,23,92" href="javascript:;" title="鼓掌" name="guzhang">');
html.push('<area shape="rect" coords="28,61,50,93" href="javascript:;" title="哈哈" name="haha">');
html.push('<area shape="rect" coords="54,62,82,93" href="javascript:;" title="害羞" name="haixiu">');
html.push('<area shape="rect" coords="82,61,108,93" href="javascript:;" title="哈欠" name="haqian">');
html.push('<area shape="rect" coords="110,61,140,94" href="javascript:;" title="花" name="hua">');
html.push('<area shape="rect" coords="138,61,164,91" href="javascript:;" title="坏笑" name="huaixiao">');
html.push('<area shape="rect" coords="164,61,190,93" href="javascript:;" title="互粉" name="hufen">');
html.push('<area shape="rect" coords="193,60,221,94" href="javascript:;" title="挥手" name="huishou">');
html.push('<area shape="rect" coords="221,60,249,93" href="javascript:;" title="回头" name="huitou">');
html.push('<area shape="rect" coords="249,62,277,91" href="javascript:;" title="激动" name="jidong">');
html.push('<area shape="rect" coords="278,60,303,90" href="javascript:;" title="惊恐" name="jingkong">');
html.push('<area shape="rect" coords="307,61,336,91" href="javascript:;" title="惊讶" name="jingya">');
html.push('<area shape="rect" coords="336,62,361,90" href="javascript:;" title="咖啡" name="kafei">');
html.push('<area shape="rect" coords="363,62,390,89" href="javascript:;" title="可爱" name="keai">');
html.push('<area shape="rect" coords="390,61,418,90" href="javascript:;" title="可怜" name="kelian">');
				
html.push('<area shape="rect" coords="1,97,26,126" href="javascript:;" title="磕头" name="ketou">');
html.push('<area shape="rect" coords="28,94,56,123" href="###" title="亲吻" name="kiss">');
html.push('<area shape="rect" coords="56,96,86,126" href="###" title="酷" name="ku">');
html.push('<area shape="rect" coords="84,96,112,126" href="###" title="快哭了" name="kuaikule">');
html.push('<area shape="rect" coords="113,95,141,126" href="###" title="骷髅" name="kulou">');
html.push('<area shape="rect" coords="141,96,169,126" href="###" title="困" name="kun">');
html.push('<area shape="rect" coords="169,96,197,126" href="###" title="篮球" name="lanqiu">');
html.push('<area shape="rect" coords="197,94,225,126" href="###" title="冷汗" name="lenghan">');
html.push('<area shape="rect" coords="225,94,251,127" href="###" title="流汗" name="liuhan">');
html.push('<area shape="rect" coords="251,94,281,126" href="###" title="流泪" name="liulei">');
html.push('<area shape="rect" coords="281,95,309,125" href="###" title="礼物" name="liwu">');
html.push('<area shape="rect" coords="310,94,336,126" href="###" title="爱" name="love">');
html.push('<area shape="rect" coords="336,95,363,127" href="###" title="骂" name="ma">');
html.push('<area shape="rect" coords="364,95,390,127" href="###" title="萌" name="meng">');
html.push('<area shape="rect" coords="390,95,418,128" href="###" title="难" name="nanguo">');
html.push('<area shape="rect" coords="2,129,30,160" href="###" title="不行" name="no">');
html.push('<area shape="rect" coords="30,129,58,162" href="###" title="可以" name="ok">');
html.push('<area shape="rect" coords="57,129,84,161" href="###" title="佩服" name="peifu">');
html.push('<area shape="rect" coords="83,130,112,162" href="###" title="啤酒" name="pijiu">');
html.push('<area shape="rect" coords="113,130,141,160" href="###" title="乒乓" name="pingpang">');
html.push('<area shape="rect" coords="141,129,168,160" href="###" title="撇嘴" name="pizui">');
html.push('<area shape="rect" coords="169,128,196,158" href="###" title="强" name="qiang">');
html.push('<area shape="rect" coords="197,129,225,158" href="###" title="亲亲" name="qinqin">');
html.push('<area shape="rect" coords="225,128,253,159" href="###" title="糗大了" name="qioudale">');
html.push('<area shape="rect" coords="253,128,281,159" href="###" title="球" name="qiu">');
html.push('<area shape="rect" coords="282,129,308,159" href="###" title="拳头" name="quantou"><area shape="rect" coords="311,130,336,157" href="###" title="弱" name="ruo"><area shape="rect" coords="338,129,365,158" href="###" title="色" name="se"><area shape="rect" coords="366,129,392,158" href="###" title="闪电" name="shandian"><area shape="rect" coords="391,127,419,158" href="###" title="胜利" name="shengli"><area shape="rect" coords="1,161,29,189" href="###" title="神马" name="shenma"><area shape="rect" coords="30,162,54,189" href="###" title="帅" name="shuai"><area shape="rect" coords="58,162,83,189" href="###" title="睡觉" name="shuijiao"><area shape="rect" coords="86,162,111,190" href="###" title="太阳" name="taiyang"><area shape="rect" coords="113,162,138,189" href="###" title="跳" name="tiao"><area shape="rect" coords="140,162,169,190" href="###" title="调皮" name="tiaopi"><area shape="rect" coords="170,162,196,190" href="###" title="跳绳" name="tiaosheng"><area shape="rect" coords="196,163,224,191" href="###" title="跳舞" name="tiaowu"><area shape="rect" coords="226,161,253,189" href="###" title="偷笑" name="touxiao"><area shape="rect" coords="253,161,279,190" href="###" title="吐" name="tu"><area shape="rect" coords="282,162,308,190" href="###" title="兔子" name="tuzi"><area shape="rect" coords="310,161,336,188" href="###" title="挖鼻" name="wabi"><area shape="rect" coords="338,161,366,189" href="###" title="委屈" name="weiqu"><area shape="rect" coords="366,161,392,190" href="###" title="闭嘴" name="weixiao"><area shape="rect" coords="392,160,420,190" href="###" title="问" name="wen"><area shape="rect" coords="1,192,29,221" href="###" title="握手" name="woshou"><area shape="rect" coords="29,194,58,221" href="###" title="吓" name="xia"><area shape="rect" coords="56,193,83,221" href="###" title="先问" name="xianwen"><area shape="rect" coords="84,192,113,221" href="###" title="西瓜" name="xigua"><area shape="rect" coords="113,191,140,220" href="###" title="心碎" name="xinsui"><area shape="rect" coords="141,189,169,220" href="###" title="嘘" name="xu"><area shape="rect" coords="170,192,196,221" href="###" title="阴险" name="yinxian"><area shape="rect" coords="198,192,224,220" href="###" title="拥抱" name="yongbao"><area shape="rect" coords="226,191,251,220" href="###" title="右哼哼" name="youhengheng"><area shape="rect" coords="252,194,275,219" href="###" title="右太极" name="youtaiji"><area shape="rect" coords="280,192,308,222" href="###" title="月亮" name="yueliang"><area shape="rect" coords="309,191,337,221" href="###" title="晕" name="yun"><area shape="rect" coords="336,192,364,223" href="###" title="再见" name="zaijian"><area shape="rect" coords="365,192,393,222" href="###" title="炸弹" name="zhadan"><area shape="rect" coords="392,192,419,222" href="###" title="折磨" name="zhemo"><area shape="rect" coords="1,225,28,257" href="###" title="抓狂" name="zhuakuang"><area shape="rect" coords="31,225,59,257" href="###" title="转圈" name="zhuanquan"><area shape="rect" coords="59,227,82,255" href="###" title="猪头" name="zhutou"><area shape="rect" coords="84,225,111,254" href="###" title="左哼哼" name="zuohengheng"><area shape="rect" coords="113,225,141,254" href="###" title="左太极" name="zuotaiji"><area shape="rect" coords="140,225,168,254" href="###" title="足球" name="zuqiu"></map></div>');
$(function() {
	// var OP_phiz = document.getElementById('OP_phiz');
	var dialog = function() {
		// OP_phiz.innerHTML = html.join('');
		if($('#bigblog').length == 0) {
			$('#OP_phiz').after(html.join('')); 
		}
	}
	$('#OP_phiz').toggle(
		function() {
			dialog();
		},
		function() {
			$('#bigimg').next().remove();
			$('#bigimg').remove();
		}
	);
	$('map area').live({
		click: function() {
			var imgName = '['+$(this).attr('name')+']';
			var text = $('#OP_comment').html();
			text += imgName;
			$('#OP_comment').html(text);
		},
		mouseover: function() {
			var imgName = $(this).attr('name');
			var imageUrl = imgUrl+imgName+imgExt;
			var imgTitle = $(this).attr('title');
			var width = this.getAttribute('coords').split(',')[0];
			if(width > 200) {
				$('#bigimg').css('left',0);
			} else {
				$('#bigimg').css('left',368);
			}
			$('#bigimg').children('img').attr('src',imageUrl);
			$('#bigimg').children('div').html(imgTitle);
			$('#bigimg').show();
		},
		mouseout: function() {
			$('#bigimg').hide();
		}
	});

});
