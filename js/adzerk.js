var p="http",d="static";
if(document.location.protocol=="https:"){
    p+="s";d="engine";
}
var z=document.createElement("script");
z.type="text/javascript";
z.async=true;
z.src=p+"://"+d+".adzerk.net/ados.js";
var s=document.getElementsByTagName("script")[0];
s.parentNode.insertBefore(z,s);

var ados = ados || {};
ados.run = ados.run || [];
ados.run.push(function() {
    /* load placement for account: jquery, site: All Sites, size: 400x100 - 400 x 100*/
    ados_add_placement(5449, 53829, "ad", 1314);
    ados_load();
});
