// ==UserScript==
// @name         StackOverflow Follow
// @namespace    https://github.com/IonicaBizau/stackoverflow-user-follow
// @version      0.1.0
// @description  This is a userscript that will add a Follow button in the StackOverflow user pages.
// @match        http://stackoverflow.com/users/*
// @copyright    2013, Ionică Bizău
// ==/UserScript==

/*
 *    <tr>
 *        <th></th>
 *        <td></td>
 *        <td>follow this user</td>
 *     </tr> 
 * */

var $newTbody = $("<tbody>"),
    $tr 	  = $("<tr>");

$tr.append("<th></th>");
$tr.append("<td></td>");
$tr.append("<td><a href='#' class='follow-me'>follow this user</a></td>");

$newTbody.append($tr);
$(".data:first > table").append($newTbody);
