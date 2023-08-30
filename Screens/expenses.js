import react from 'react';
import {TextInput,View} from 'react-native';
import firebase from 'firebase';

export default class expense extends Component{

    static addItem() {
        const expenseList=[];
        let expAmt = 0;
        const add_expense_btn = document.getElementById("add-expense-btn");
        const budgetAmount = document.getElementById("budegt-amount");
        const balance = document.getElementById("balance-amount");
        const expenseTitle = document.getElementById("expense-Title");
        const expenseAmount = document.getElementById("expenes-Amount");

        add_expense_btn.addEventListener("click",  ()  => {

            if(
                expenseTitle.Value.trim() === "" ||
                 +expenseTitle.value || 
                 expenseAmount.value ||
                 +expenseAmount.value.trim()=== " " ||
                 +expenseAmount.value < 0
            ) {
                alert("budget Exceeded !!");
                return;
            }
            else if (expenseAmount.value > + balance.innerHTML.toString()){
                alert("not enough Money");
                return;
            }
const newExpenseItem = {
    id:Math.random().toString(),
    title:expenseTitle.value,
    amount:expenseAmount.value,
    
};
expAmt=+expenseAmount.value;
console.log(expAmt);

balObj = new Balances();
balObj.updateExpenseBalance(expAmt);
expenseTitle.value="";
expenseAmount.Value="";
expenseList.push(newExpenseItem);
newExpenseItem(expenseList);
});
    }
}



App.init();
App.init();
App.init();
App.init();

