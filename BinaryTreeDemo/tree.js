function Tree(value,left,right){
	this.value=value;
	this.left=left;
	this.right=right;
}
(function(){
	var j=new Tree("J",null,null),
		h=new Tree("H",j,null),
		d=new Tree("D",h,null),
		e=new Tree("E",null,null),
		b=new Tree("B",d,e), 
		k=new Tree("K",null,null),
		i=new Tree("I",k,null),
		f=new Tree("F",null,i),
		g=new Tree("G",null,null),
		c=new Tree("C",f,g),
		a=new Tree("A",b,c);
	window.root=a;
})()


//先序遍历
var preorderLine=[];
function preorder(root){
	if (root==null) return;
	preorderLine.push(root.value);
	if(root.left!=null) {
		preorder(root.left);
	}
	if(root.right!=null) {
		preorder(root.right);
	}
}

//中序遍历
var inorderLine=[];
function inorder(root){
	if (root==null) return;
	if(root.left!=null) {
		inorder(root.left);
	}
	inorderLine.push(root.value);
	if(root.right!=null) {
		inorder(root.right);
	}
}

//后序遍历
var postorderLine=[];
function postorder(root){
	if (root==null) return;
	if(root.left!=null) {
		postorder(root.left);
	}
	if(root.right!=null) {
		postorder(root.right);
	}
	postorderLine.push(root.value);
}

//逐层打印
var levelorderLine=[];
function levelorder(root){
	if (root==null) return;
	var list=[root],nextlist=[];
	while (true){
		for (var i=0;i<list.length;i++){
			var t=list[i];
			levelorderLine.push(t.value);
			if (t.left!=null){
				nextlist.push(t.left);
			}
			if (t.right!=null){
				nextlist.push(t.right);
			}
		}
		if (nextlist.length>0){
			list=nextlist;
			nextlist=[];
		}else{
			break;
		}
	}

}
var showPathArr=[];
function showPath(root,temp){
	if (root==null) return;
	temp.push(root.value);
	if (root.left!=null){
		showPath(root.left,temp.concat([]));     //用.concat产生新的数组，否则是同一引用
	}
	if (root.right!=null){
		showPath(root.right,temp.concat([]));
	}
	if(root.left==null && root.right==null){
		showPathArr.push(temp);
	}
}

function showOrders(root){
	preorder(root);
	console.log("先序遍历");
	console.log(preorderLine);
	
	inorder(root);
	console.log("中序遍历");
	console.log(inorderLine);
	
	postorder(root);
	console.log("后序遍历");
	console.log(postorderLine);	

	levelorder(root);
	console.log("层级遍历");
	console.log(levelorderLine);		
	
	showPath(root,[]);
	console.log("打印所有路径");
	console.log(showPathArr);	
}
function genHtml(root){
	if (root==null) return '<div class="tree"><span class="leaf null-leaf" contenteditable="true"></span></div>';
	var html='<div class="tree">';
	html+='<span class="leaf" contenteditable="true">'+root.value+'</span>'
	if(root.left!=null) {
		html+=genHtml(root.left);
	}else{
		html+='<div class="tree"><span class="leaf null-leaf" contenteditable="true"></span></div>';
	}
	if(root.right!=null) {
		html+=genHtml(root.right);
	}else{
		html+='<div class="tree"><span class="leaf null-leaf" contenteditable="true"></span></div>';
	}
	html+='</div>';
	return html;
}
//span元素对应的Tree节点
//$dom .tree
function getNode($dom){
	if (!$dom.hasClass('tree')) return null;
	if (!$dom.parent().hasClass('tree')) return root;
	if($dom.next("div.tree").length>0){
		return getNode($dom.parent()).left;
	}else{
		return getNode($dom.parent()).right;
	}
}
function getParentNode($dom){
	return getNode($dom.parent());
}
function setNode($dom,val){
	var pnode=getParentNode($dom);
	if(pnode!=null){
		if($dom.next("div.tree").length>0){
			if (val==null){
				pnode.left=null;
			}else{
				if(pnode.left==null){
					pnode.left=new Tree(val,null,null);
				}else{
					pnode.left.value=val;
				}
			}
		}else{
			if (val==null){
				pnode.right=null;
			}else{
				if(pnode.right==null){
					pnode.right=new Tree(val,null,null);
				}else{
					pnode.right.value=val;
				}
			}
		}
	}else{
		if (val==null){
			root=null;
		}else{
			if(root==null){
				root=new Tree(val,null,null);	
			}else{
				root.value=val;
			}
			
		}
	}
}

function genTree($dom){
	if ($dom.children('span.leaf').html()=="") {
		return null;
	}else{
		return new Tree($dom.children('span.leaf').html(),genTree($dom.children('div.tree').eq(0)),genTree($dom.children('div.tree').eq(1)));
	}
}
//生成Tree按钮 点击事件
function genTreeFromHtml(){
	var temp=genTree($('#main>.tree'));
	console.log("生成Tree");
	console.log(temp);
	console.log(root);
	root=temp;
}
//先序遍历按钮 点击事件
function printPreorder(){
	preorderLine=[];
	preorder(root);
	console.log("先序遍历");
	console.log(preorderLine);
	$('#screen').html(preorderLine.join(","));
}
//中序遍历按钮 点击事件
function printInorder(){
	inorderLine=[];
	inorder(root);
	console.log("中序遍历");
	console.log(inorderLine);
	$('#screen').html(inorderLine.join(","));
}
//后序遍历按钮 点击事件
function printPostorder(){
	postorderLine=[];
	postorder(root);
	console.log("后序遍历");
	console.log(postorderLine);	
	$('#screen').html(postorderLine.join(","));
}
//层级遍历按钮 点击事件
function printLevelorder(){
	levelorderLine=[];
	levelorder(root);
	console.log("层级遍历");
	console.log(levelorderLine);	
	$('#screen').html(levelorderLine.join(","));
}
//打印所有路径 点击事件
function printAllPath(){
	showPathArr=[];
	showPath(root,[]);
	console.log("打印所有路径");
	console.log(showPathArr);	
	var html="";
	for(var i=0;i<showPathArr.length;i++){
		html+=showPathArr[i].join(",")+"<br>";
	}
	$('#screen').html(html);
}
$(function(){
	$("#main").html(genHtml(root));
	$('#main').on('blur','.leaf',function(e){
		var t=$(this);
		//console.log(t[0]);
		setNode(t.parent(),t.html()==""?null:t.html());
		if(t.hasClass("null-leaf")){
			//console.log(t.html());
			if(t.html()==""){
				return false;
			}else{
				t.removeClass("null-leaf").parent().append('<div class="tree"><span class="leaf null-leaf" contenteditable="true"></span></div><div class="tree"><span class="leaf null-leaf" contenteditable="true"></span></div>');
			}
			
		}else{
			if(t.html()==""){
				t.addClass("null-leaf").parent().children('div.tree').remove();
			}else{
				return false;
			}
		}
	})
})








