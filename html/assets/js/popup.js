$(document).ready(function() {

$(document).on('click', '#cookie-accept', function(event){
    event.preventDefault();
    setCookie('cookie-accept', '1', 365);
    $('#cookie_popup').hide();
});

var style = `
<style>
#cookie_popup {
 width:80%;
 padding:10px;
 background:#f4f8ff;
 position:fixed;
 left:0;
 bottom:0;
 display:none;
 font-size: 0.8em;
}

#cookie_popup p {
 margin:0;
 color:#8b8f96;
}

.cookie-btn {
    border: none;
    color: #8b8f96;
    padding: 5px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
}

.btn-accept {
    background-color: #edf3ff; 
}

</style> 
`;

$('head').append(style);
 
 var popupDiv = `
<div id="cookie_popup">
   <p>
        This site uses cookies. By continuing to use this website, you agree to their use unless you have disabled cookies in your browser. 
        You can change your cookie settings at any time but parts of our site will not function correctly without them.
        <a id="cookie-accept" class="cookie-btn btn-accept" href="#">Accept</a>
   </p>
</div>`;
 
 $('body').append(popupDiv);

var cookie = getCookie('cookie-accept');

if (cookie)
    return; // Don't show this popup if user accepted

$('#cookie_popup').show();
 
function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setDate(date.getDate() + days);
        expires = "; expires=" + date.toUTCString();
    }
    
    var str = name + "=" + (value || "")  + expires + "; path=/";
    document.cookie = str;
    console.log('Set cookie: ' + str);
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {   
    document.cookie = name+'=; Max-Age=-99999999;';  
}
 
});