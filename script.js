function run() {
    var html = document.getElementById("html-code").value;
    var css = document.getElementById("css-code").value;
    var js = document.getElementById("js-code").value;

    var output = document.getElementById("output");

    var code = "<html><head><style>" + css + "</style></head><body>" + html + "<script>" + js + "</script></body></html>";

    output.srcdoc = code;
}
