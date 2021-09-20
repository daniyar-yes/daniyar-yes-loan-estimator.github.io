//variables
var clicks = 0; //increment this by one every click
var auto_clicks = 0; //automatically click once per second
var cost = 1; //the cost of this should increase exponentially
var upgrade_speed = 0; //the level of the speed up upgrade
var click_rate = 1000; //ms between each autoclick
var interval_auto; //storing our interval here so we can update it
var click_increment = 1; //how many clicks per click
//functions

function update_total_clicks() { //updates the number of clicks   
    var e = document.getElementById("total_clicks");
    e.innerHTML = clicks;
}

function buy_something(c, button) {
    if (clicks < c) {
        button.className = 'btn btn-danger';
        setTimeout(function() {
            var e = document.getElementsByClassName("btn-danger")[0];
            e.className = 'btn btn-success';
        }, 1000);
        return false;
    }
    clicks -= c;
    return true;
}

function update_workers() {
    var e2 = document.getElementById("time_period");
    e2.innerHTML = parseFloat(click_rate / 1000.0).toFixed(2);
    clearInterval(interval_auto);
    interval_auto = setInterval(function() {
        clicks += auto_clicks;
        update_total_clicks();
    }, click_rate);
}
//click events
document.getElementById("click").onclick = function() {
    clicks = parseFloat(clicks) + parseFloat(click_increment);
    update_total_clicks(); //updates the text
};
document.getElementById("activate_idle").onclick = function() {
    if (!buy_something(cost, this)) return;
    auto_clicks++;
    cost = Math.pow(2, auto_clicks); //new cost
    update_total_clicks();
    var e = document.getElementById("clicks_per_second");
    e.innerHTML = auto_clicks;
    var e1 = document.getElementById("activate_idle");
    e1.innerHTML = 'Upgrade for ' + cost + ' XP';
    var e2 = document.getElementById("autoclicker_level");
    e2.innerHTML = ': Level  ' + auto_clicks;
    document.getElementById("upgrade_1").style.visibility = "visible";
};
document.getElementById("bachelors").onclick = function() {
    var bachelor_cost = 15;
    if (clicks >= bachelor_cost) {
        clicks = clicks - bachelor_cost;
        auto_clicks = auto_clicks + 1;
        var e = document.getElementById("edu_level");
    e.innerHTML = "Graduated in 2015 in Telecommunications <br> from International IT University <br> <br> <a href=\"https://iitu.edu.kz/en/\" target=\"_blank\"><img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkIb1bv9KUNOX5fx915AOVWcEMhpVf4vRdtxKA6VRwIK0I3k5ETZ6yihmv5BBsdzeG1Xs&usqp=CAU\" height=\"50\"></a>";
        document.getElementById("bachelors").style.visibility = "hidden";
        document.getElementById("upgrade_2").style.visibility = "visible";
        var e1 = document.getElementById("clicks_per_second");
    e1.innerHTML = auto_clicks;
        var e2 = document.getElementById("autoclicker_level");
    e2.innerHTML = ': Level  ' + auto_clicks;
    
    update_workers();
    } else {
        return;
    }
};
document.getElementById("masters").onclick = function() {
    var master_cost = 30;
    if (clicks >= master_cost) {
        clicks = clicks - master_cost;
        auto_clicks = auto_clicks + 1;
        var e = document.getElementById("edu_level_2");
    e.innerHTML = "Graduated in 2017 in Project Management <br> from International IT University <br> <br><a href=\"https://iitu.edu.kz/en/\" target=\"_blank\"><img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkIb1bv9KUNOX5fx915AOVWcEMhpVf4vRdtxKA6VRwIK0I3k5ETZ6yihmv5BBsdzeG1Xs&usqp=CAU\" height=\"50\"></a>";
        document.getElementById("masters").style.visibility = "hidden";
        document.getElementById("upgrade_3").style.visibility = "visible";
        var e1 = document.getElementById("clicks_per_second");
    e1.innerHTML = auto_clicks;
        var e2 = document.getElementById("autoclicker_level");
    e2.innerHTML = ': Level  ' + auto_clicks;
    update_workers();
    } else {
        return;
    }   
};

document.getElementById("philips").onclick = function() {
    var philips_cost = 50;
    if (clicks >= philips_cost) {
        clicks = clicks - philips_cost;
        auto_clicks = auto_clicks + 1;
        var e = document.getElementById("job_1");
    e.innerHTML = "March 2017 - June 2018 <br> B2B2C Account manager <br> in Electronics field at <br> <br><a href=\"https://www.philips.com/global\" target=\"_blank\"><img src=\"https://www.philips.com/c-etc/philips/clientlibs/foundation-general/clientlibs-css-rb2014/images/generic/wordmark_1x.svg\" alt=\"Philips\" height=\"35\"></a>";
        document.getElementById("philips").style.visibility = "hidden";
        document.getElementById("upgrade_4").style.visibility = "visible";
        var e1 = document.getElementById("clicks_per_second");
    e1.innerHTML = auto_clicks;
        var e2 = document.getElementById("autoclicker_level");
    e2.innerHTML = ': Level  ' + auto_clicks;
    update_workers();
    } else {
        return;
    }   
};

document.getElementById("yandex").onclick = function() {
    var yandex_cost = 75;
    if (clicks >= yandex_cost) {
        clicks = clicks - yandex_cost;
        auto_clicks = auto_clicks + 1;
        var e = document.getElementById("job_2");
    e.innerHTML = "March 2017 - June 2018 <br> Digital Marketing <br> B2B account manager at <br> <br> <a href=\"https://yandex.com/company/\" target=\"_blank\"><img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Yandex_logo.svg/2560px-Yandex_logo.svg.png\" alt=\"Yandex\" height=\"35\"></a>";
        document.getElementById("yandex").style.visibility = "hidden";
        document.getElementById("upgrade_5").style.visibility = "visible";
        var e1 = document.getElementById("clicks_per_second");
    e1.innerHTML = auto_clicks;
        var e2 = document.getElementById("autoclicker_level");
    e2.innerHTML = ': Level  ' + auto_clicks;
    update_workers();
    } else {
        return;
    }   
};

document.getElementById("rbfs").onclick = function() {
    var rbfs_cost = 100;
    if (clicks >= rbfs_cost) {
        clicks = clicks - rbfs_cost;
        auto_clicks = auto_clicks + 1;
        var e = document.getElementById("job_3");
    e.innerHTML = "Work since April 2020 <br> in Financing Industry at <br> <br> <a href=\"https://www.rbauction.com/financial-services\" target=\"_blank\"><img src=\"https://www.ritchiebros.com/careers/RBFS/img/RBFS/RBFS_logo.png\" alt=\"Ritchie Bros. Financial Services\" height=\"45\"></a>";
        document.getElementById("rbfs").style.visibility = "hidden";
        document.getElementById("lets_connect").style.visibility = "visible";
        var e1 = document.getElementById("clicks_per_second");
    e1.innerHTML = auto_clicks;
        var e2 = document.getElementById("autoclicker_level");
    e2.innerHTML = ': Level  ' + auto_clicks;
    update_workers();
    } else {
        return;
    }   
};

//Increase Click Increment
document.getElementById("increase_clicks").onclick = function() {
    if (!buy_something(upgrade_cost, this)) return;
    click_increment++;
    upgrade_cost = (Math.pow(3, click_increment)) * 1;
    update_workers();
    
    
};

//Start Autoclickers
update_workers();

function set_cookie(cookie_name, value) {
    expiry = new Date();
    expiry.setTime(new Date().getTime() + (10 * 60 * 1000));
    var c_value = escape(btoa(JSON.stringify(value))) + "; expires=" + expiry.toUTCString();
    document.cookie = cookie_name + "=" + c_value;
}

function get_cookie(cookie_name) {
    var c_value = document.cookie;
    var c_start = c_value.indexOf(" " + cookie_name + "=");
    if (c_start == -1) {
        c_start = c_value.indexOf(cookie_name + "=");
    }
    if (c_start == -1) return false;
    c_start = c_value.indexOf("=", c_start) + 1;
    var c_end = c_value.indexOf(";", c_start);
    if (c_end == -1) {
        c_end = c_value.length;
    }
    c_value = atob(unescape(c_value.substring(c_start, c_end)));
    return JSON.parse(c_value);
}