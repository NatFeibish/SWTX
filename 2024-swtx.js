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


// :::::::::::::::: NOT FUNCTIONAL WITHOUT A MEDIA OBSERVER BUT THEIR CODE :::::::::: */
// Hide the user change password control
document.getElementById("change_password_checkbox").style.display = "none";
document.getElementById("change_password_checkbox").style.visibility = "hidden";

//disable the user change password control
document.getElementById("change_password_checkbox").disabled= true;

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: //


/* ****************************/
/* This code below serves to update some the prior theme's properties on
/* the fly until we can update each course's HTML and CSS. This is a temporary
/* measure and the code below can be removed when the HTML/CSS updates
/* are complete. Do not remove the code above this iDesign block.
/* 
/* Natalie Feibish
/* natalie.feibish@idesignedu.org
/* ****************************/

// Function to replace specific elements
function replaceElements() {
    // Replacement rules: an array of objects defining what to replace and with what
    const replacements = [
        {
            selector: 'img[id="1669512"]',
            newElement: () => {
                const footer = document.createElement('footer');
                footer.classList.add('swtx'); // Add the class "swtx"
                const p = document.createElement('p');
                const em = document.createElement('em');

                em.textContent = 'Excellence, Inclusivity, Opportunities';
                p.appendChild(em);
                footer.appendChild(p);

                return footer;
            }
        } // add comma here to add more replacements
        // Add more replacement rules here
        // {
        //     selector: 'img#\x31 669512',
        //     newElement: () => {
        //         const footer = document.createElement('footer');
        //         const p = document.createElement('p');
        //         const em = document.createElement('em');

        //         em.textContent = 'Excellence, Inclusivity, Opportunities';
        //         p.appendChild(em);
        //         footer.appendChild(p);

        //         return footer;
        //     }
        // }
    ];

    // Loop through each replacement rule
    replacements.forEach(({ selector, newElement }) => {
        const elements = document.querySelectorAll(selector);

        elements.forEach((element) => {
            const replacement = newElement();
            element.parentNode.replaceChild(replacement, element);
        });
    });
}

// Set up the MutationObserver on the #main div
const targetNode = document.querySelector('#wiki_page_show');
const config = { childList: true, subtree: true };

// Callback function to execute when mutations are observed
const callback = function(mutationsList, observer) {
    for (let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            replaceElements();
        }
    }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
if (targetNode) {
    observer.observe(targetNode, config);
}

// Initial call to replace existing elements on page load
replaceElements();