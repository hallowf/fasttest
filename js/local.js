---
title: Javascript file
---
Array.prototype.contains = function(obj) {
    var i = this.length;
    while (i--) {
        if (this[i] === obj) {
            return true;
        }
    }
    return false;
}

function menuSelectItems() {
    var menus = document.getElementsByClassName("menu");
    for (var j=0; j < menus.length; j++) {
        var items = menus[j].getElementsByTagName('li');
        for (var i = 0; i < items.length; i++) {
            var re = items[i].getAttribute('data-urlexp');
            if( re && window.location.pathname.search(eval(re))!==-1) {
                items[i].className = 'active';
                return;
            }
        }
    }
}

function OnLoadTasks() {
    // Prettifyer
    prettyPrint();
    // Marks menu items as active if they match the data-urlexp attribute
    menuSelectItems();
    // Print related posts
    printRandomPosts(posts,{{ site.blog_more_posts }});
    // initialize map
    if(typeof(initMap)!=="undefined") initMap();
    // Fadein all the "fadein" classes
    var fades = document.getElementsByClassName("fadein");
    for (var i = fades.length - 1; i >= 0; i--) fade(fades[i]);
}

function printRandomPosts(posts,num) {
    var prs=[];
    var pc=0;
    var elm = document.getElementById('relatedposts');
    if(elm) {
        var html='';
        for(var i=0;i<posts.length && pc<num;i++) {
                var pid=Math.floor(Math.random() * (posts.length-1));
                if(!prs.contains(pid)) {
                        var post=posts[pid];
                        if(post.thumbnail && post.thumbnail.length && window.location.pathname !== post.url) {
                                html+='<a href="'+post.url+'"><h5>'+post.title+'</h5><img src="'+post.thumbnail+'"><small>'+post.excerpt+'</small></a>';
                                prs.push(pid);
                                pc++;
                        }
                }
        }
        elm.innerHTML=html;
    }
}

function fade(element) {
    var op = 0;  // initial opacity
    element.style.opacity = 0;
    element.style.filter = 'alpha(opacity=0)';
    element.style.visibility="visible";
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        op += 0.1;
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
    }, 50);
}

window.onload=OnLoadTasks;