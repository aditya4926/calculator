let expense = document.getElementById('expense');
let income = document.getElementById('income');
let balance_amt = document.getElementById('balance_amt');

let text_input = document.getElementById('addtext')
let amount_input = document.getElementById('addamt')

var input_desc_val;
var input_amt_val;

function addTransaction()
{
    input_desc_val = text_input.value;
    input_amt_val = amount_input.value;

    if(text_input != "" && input_amt_val != "")
    {
        err_msg.innerText = "";

    }
    }
