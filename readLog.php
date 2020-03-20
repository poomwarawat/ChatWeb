<?php
if(file_exists("log.html") && filesize("log.html") > 0){
    $myfile = fopen("log.html", "r");
    echo fread($myfile, filesize("log.html"));
    fclose($myfile);
}
?>