$isarrp=1;
$pos = strrpos($actual_link, "https://arrp.ipozal.com/");
if ($pos === false) { $isarrp=0;}
if($isarrp==1){
	$hpgf = './arrp/index.html';
	$homepage = remove_utf8_bom(file_get_contents($hpgf,false));
	$homepage2 = $homepage;
}
die($homepage2);
