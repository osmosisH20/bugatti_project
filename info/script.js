
function test(){

    let form = document.getElementById('box');
    let email = document.getElementById('email').value;
    let btn = document.getElementById('button');
    let emailStyle = document.getElementById('email');
    let text1 = document.getElementById('text_1');
    let text2 = document.getElementById('text_2');
    let text3 = document.getElementById('text_3');
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(email.match(pattern)){
        // form.classList.add('valid');
        text_1.innerHTML = "啊哈,你打对了！";
        text_1.style.color = "#4caf50";
        emailStyle.style.borderBottomColor = "#4caf50";
        btn.style.disabled="false";
    }else{
        // form.classList.remove('valid');
        text_1.innerHTML = "nono,错了！";
        text_1.style.color = "#f44336";
        emailStyle.style.borderBottomColor = "#f44336";
        btn.style.disabled="true";
    }
    if (email === ""){
        // form.classList.remove("valid")
        text_1.innerHTML = "不要空着勒"
        text_1.style.color = "#86868b";
        emailStyle.style.borderBottomColor = "#424245";
        btn.style.disabled="true";
    }
}



function send(){
    var params = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        phone : document.getElementById("phone").value,
        message : document.getElementById("message").value,
    };

    const serviceID = "service_peey9qk";
    const templateID = "template_aeyz2uy";
    emailjs.send(serviceID,templateID,params).then((res) => {
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("phone").value="";
        document.getElementById("message").value="";
        alert("成功提交！！")
    })

}


function sendM(){
    var params = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        carNumber_one : document.getElementById("carNumber_one").value,
        carNumber_two : document.getElementById("carNumber_two").value,
        carNumber_three : document.getElementById("carNumber_three").value,
    };

    const serviceID = "service_ty2w7ib";
    const templateID = "template_i6a23yj";
    emailjs.send(serviceID,templateID,params).then((res) => {
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("carNumber_one").value = "";
        document.getElementById("carNumber_two").value = "";
        document.getElementById("carNumber_three").value = "";
        alert("成功提交！！")
    })
}



