<?php
//add your code here
    $msg = $_GET["msg"];
    $name = $_GET["name"];
    date_default_timezone_set("Asia/Bangkok");
    $time = date("h:i");
    $myfile = fopen("log.html", "w");
    $data = "<div class='message'>($time PM) <b>$name</b>: $msg<br></div>";
    fwrite($myfile, $data);
    fclose($myfile);

    echo $data
?>