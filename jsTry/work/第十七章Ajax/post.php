<?php
	$user = $_POST["user"];
	$password = $_POST["password"];

	if($user == "admin" && $password == "root"){
		echo '{"ok": true}';
	}else {
		echo '{"ok": false}';
	}


?>