var renderJson = document.getElementById('jsonTree');

/*Using sample url since 'http://www.mocky.io/v2/5c3c7ad13100007400a1a401' has CORS issues*/
fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
    .then(response => response.json())
    .then(url => 
          {
            renderJson.appendChild(recur(url));

            function recur( data ) {
                var result = document.createElement('ul');
                for (key in data) {
                    var list = document.createElement('li')
                    var textnode = document.createTextNode(key);
                    list.appendChild(textnode);
                    if (typeof(data[key]) === 'object') {	 //if there's another level to the object, recursively call our function
                         list.innerHTML = key ;
                         list.appendChild(recur( data[key] ));
                    } 
                  else {
                        list.innerHTML = key + ':' + data[key];
                    }
                    result.appendChild(list); 
              };  
              return( result );
            }
        }
       );

