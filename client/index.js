// ==UserScript==
// @name         StackOverflow Follow
// @namespace    https://github.com/IonicaBizau/stackoverflow-user-follow
// @version      0.1.0
// @description  This is a userscript that will add a Follow button in the StackOverflow user pages.
// @match        http://stackoverflow.com/users/*
// @copyright    2013, Ionică Bizău
// ==/UserScript==

// try to get the logged user email adress
var LOGGED_USER_ADRESS_EMAIL = localStorage["loggedUserAdressEmail"];

// if it is undefined
if (!LOGGED_USER_ADRESS_EMAIL) {

    // get it from the user
    LOGGED_USER_ADRESS_EMAIL = prompt("Enter your email address:", "");

    // and set it into local storage
    localStorage["loggedUserAdressEmail"] = LOGGED_USER_ADRESS_EMAIL;
}

// create the tbody to append into data table
var $newTbody = $("<tbody>"),
    $tr 	  = $("<tr>");

// create the row
$tr.append("<th></th>");
$tr.append("<td></td>");
$tr.append("<td><a href='#' class='follow-me'>follow this user</a></td>");

// append row to tbody
$newTbody.append($tr);

// append tbody to table
$(".data:first > table").append($newTbody);
