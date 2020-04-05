function jump(type)
{
	switch(type)
    {
        case 1:
        	window.location.href="index.html";
        break;
        case 2:
        	window.location.href="news.html";
        break;
        case 3:
        	window.location.href="goods.html";
        break;
        case 4:
        	window.location.href="Introduction.html";
        break;
        case 5:
        	window.location.href="join.html";
        break;
        case 6:
        	window.location.href="join.html";
        break;
    }
}
$(function()
{
	$("#head").mouseover(function()
	{
  		$("#head").css("background","rgba(220,220,220,0.5)");
	});    
	$("#head").mouseout(function()
	{
  		$("#head").css("background","rgba(220,220,220,0)");
	}); 	 
});