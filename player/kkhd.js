
function KKHDAdsStart() {
        var h1 = 69;
        $('#buffer').height ( MacPlayer.height - h1 );
        $('#buffer').show();
}
function KKHDStatus() {
	if(Player.PlayState==5 ||Player.PlayState==4){
         AdsEnd();
    }
    else if(Player.PlayState==2||Player.PlayState==3){
         KKHDAdsStart();
    }
    else if(Player.PlayState==6){
		if(MacPlayer.nexturl!=''){//������� ��һ��
			window.parent.location.href=MacPlayer.nexturl;
		}
	}
}
function ReUrl(url){
	if(url==null || url==undefined) return "";
	url = url.split("|");
	return url[0]+"|"+url[1]+"|["+document.domain+"]"+url[2]+"|";
}


MacPlayer.playhtml ='<object id="Player" name="Player" width="100%" height="'+MacPlayer.height+'" classid="clsid:e20b2508-8870-5ac0-be7b-fd0ad2f46177" onError="MacPlayer.install();"><param name="src" VALUE="'+ReUrl(MacPlayer.playurl)+'"><param name="Autoplay" VALUE="1"></object>';

var rMsie = /(msie\s|trident.*rv:)([\w.]+)/;
var match = rMsie.exec(navigator.userAgent.toLowerCase());
if(match == null){
	var ll = false;
	if (navigator.plugins){
		for (var i=0;i<navigator.plugins.length;i++) {
			if(navigator.plugins[i].name == 'kkvod'){
				ll = true;
				break;
			}
		}
	}
	if(ll){
		MacPlayer.playhtml ='<embed id="Player" name="Player" src="'+MacPlayer.playurl+'" type="application/x-kkvod" progid="WEBPLAYER.WebPlayerCtrl.2" width="100%" height="'+MacPlayer.height+'"></embed>';
	}
	else{
		MacPlayer.install();
	}
}

MacPlayer.show();
setTimeout(function() {
	if (MacPlayer.status == true && maccmsplay==1){
		setInterval("KKHDStatus()", 1000);
	}
},
adsloadtime * 1000 + 1000);