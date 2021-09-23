window.onload = function() {

	/*
	 * 当垂直滚动条滚动到底时使表单项可用
	 * onscroll
	 * 	- 该事件会在元素的滚动条滚动时触发
	 */

	//获取id为info的p元素
	var info = document.getElementById("info");
	//获取两个表单项
	var inputs = document.getElementsByTagName("input");
	//为info绑定一个滚动条滚动的事件
	info.onscroll = function() {

		//检查垂直滚动条是否滚动到底
		if(info.scrollHeight - info.scrollTop == info.clientHeight) {
			//滚动条滚动到底，使表单项可用
			/*
			 * disabled属性可以设置一个元素是否禁用，
			 * 	如果设置为true，则元素禁用
			 * 	如果设置为false，则元素可用
			 */
			inputs[0].disabled = false;
			inputs[1].disabled = false;
		}

	};

};