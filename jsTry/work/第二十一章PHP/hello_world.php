<?php
	// 请求hello world
	/*$a = "<h1>hello</h1> . <br /> . <h1>world;</h1>";
	echo $a ;
	$res = '<a href="#">返回</a>';
	echo $res;*/

	// 动态返回内容
	/*$all = array("a"=>"a", "b"=>"b");
	$get = $_GET["net"];
	$res = $all[$get];
	echo $res;*/

	//
	$get = $_GET["net"];
	//对应关系
	$duiying = array("李林"=>"lilin", "李荣杰"=>"lirongjie", "李琛"=>"lichen", "孙毅"=>"sunyi", "单宇航"=>"shanyuhang", "谷世达"=>"gushida", "武艺超"=>"wuyichao", "单艺昊"=>"shanyihao", "王文贺"=>"wangwenhe", "赵泽康"=>"zhaozekang");
	$getnow = $duiying[$get];


	// 数据
	$lilin= array("age"=>14 ,"name"=>"李林", "外号"=>"黑蛋", "");
	$lirongjie = array("age"=>17 ,"name"=>"李荣杰", "外号"=>"nb");
	$lichen= array("age"=>17 ,"name"=>"李琛", "外号"=>"！！！");
	$sunyi= array("age"=>18 ,"name"=>"孙毅", "外号"=>"！！！");
	$shanyuhang= array("age"=>16 ,"name"=>"单宇航", "外号"=>"丐料");
	$gushida= array("age"=>16 ,"name"=>"谷世达", "外号"=>"！！！");
	$wuyichao= array("age"=>16 ,"name"=>"武艺超", "外号"=>"！！！");
	$shanyihao= array("age"=>16 ,"name"=>"单艺昊", "外号"=>"小胖墩");
	$zhaozekang= array("age"=>16 ,"name"=>"赵泽康", "外号"=>"！！！");
	$wangwenhe= array("age"=>16 ,"name"=>"王文贺", "外号"=>"！！！");
	

	//获取数据
	$name = $$getnow["name"];
	$name_1 = $$getnow["外号"];
	$age = $$getnow["age"];


	// 输出
	$resp =$name . "|" . $name_1 . "|" . $age;
	echo $resp;
?>


