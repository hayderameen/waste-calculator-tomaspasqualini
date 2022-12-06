(function(namespace){
    "use strict";

    /**
     * This method adds a focus-class to the parent wrapper of an input element.
     * Example HTML Markup:
     *  <span>
     *      <label for="name">Name</label>
     *      <input type="text" name="name" id="name" />
     *  </span>
     * When the input element is not empty or receives focus, the wrapping <span>-
     * element receives an 'active'-class
     * @param {HTMLFormElement} parentForm
     * @constructor
     */
    function FocusLabel(parentForm) {
        var labels = parentForm.querySelectorAll('label');
        for (var i in labels) {
            if (labels.hasOwnProperty(i)) {
                this.bindFunctionality(labels[i]);
            }
        }
    }

    /**
     * Bind the functionality to a single label
     * @param {HTMLLabelElement} label
     */
    FocusLabel.prototype.bindFunctionality = function(label)
    {
        var parentNode = label.parentNode;
        var inputElement = parentNode.querySelector('input');
        if (inputElement) {
            inputElement.addEventListener('focus', this.checkLabel.bind(this, parentNode));
            inputElement.addEventListener('blur', this.checkLabel.bind(this, parentNode));
            this.checkLabel(parentNode);
        }
    };

    /**
     * Bind label/input functionality
     * @param {HTMLElement} parentNode
     * @param {FocusEvent} event
     */
    FocusLabel.prototype.checkLabel = function(parentNode, event)
    {
        var inputElement = parentNode.querySelector('input');
        parentNode.classList.remove('active');
        if (inputElement.value !== '' || (event && event.type === 'focus')) {
            parentNode.classList.add('active');
        }
    };

    namespace.FocusLabel = FocusLabel;
})(window);

new window.FocusLabel(document.getElementById('te-send-report-form'));
let show_form = true;
function show_report_form(){
    let username = localStorage.getItem("username");
    let useremail = localStorage.getItem("useremail");
    let usercompany = localStorage.getItem("usercompany");
    if(!show_form && username && username !=="" && useremail && useremail !=="" && usercompany && usercompany !=="" ){
        calc();
    }else{
        
        document.getElementById('te-send-report-form').style.display = 'flex';
        document.getElementById('te-send-report-form').scrollIntoView({
            behavior: 'smooth'
          });
          show_form = false;
    }
     
}
function submitCalcForm(form){
    form.preventDefault();
    let te_name = document.getElementById('te-name').value;
    let te_email = document.getElementById('te-email').value;
    let te_company = document.getElementById('te-company').value;
    if(te_name == '' || te_email == '' || te_company == ''){
        alert('All fields are mandatory.');
    }else{
        localStorage.setItem("username", te_name);
        localStorage.setItem("useremail", te_email);
        localStorage.setItem("usercompany", te_company);
        document.getElementById('te-send-report-form').style.display = 'none';
        calc();
    }
    
}