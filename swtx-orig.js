/*EvaluationKIT START*/var evalkit_jshosted = document.createElement('script');evalkit_jshosted.setAttribute('type', 'text/javascript');evalkit_jshosted.setAttribute('src', 'https://swtjc.evaluationkit.com/CanvasScripts/swtjc.js?v=1');document.getElementsByTagName('head')[0].appendChild(evalkit_jshosted);/*EvaluationKIT END*/
/**
 * swtjc_global.js - custom SWTJC javascript for Canvas implementation.
 *
 * All SWTJC developed scripts go here. This file depends on swtjc_global.css which must also be uploaded to the Canvas host.
 *
 * @link   n/a
 * @file   This is the primary global script file for the SWTJC Canvas implementation
 * @author jmgarcia4@swtjc.edu
 * @since  0.1.0
 */

//Hide the user change password control
document.getElementById("change_password_checkbox").style.display = "none";
document.getElementById("change_password_checkbox").style.visibility = "hidden";

//disable the user change password control
document.getElementById("change_password_checkbox").disabled= true;

