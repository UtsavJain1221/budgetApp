import React from 'react';
import Login from '../Screens/Login' ;
import Transaction from '../Screens/Transaction';

import {Text,View,StyleSheets} from 'react-native';

export default class App extends Component{
    constructor(props){

        this.budgetAmount=document.getElementById("budget-amount");
        this.expenses = document.getElementById("expenses-amount");
        this.balance = documernt.getElementById("balance-amount");
        
        super(props);
        this.state={

        }
    }

    updateBudgetAmount(budget,expenses){
        this.budgetAmount.innerHTML = budget;
        this.expenses.innerHTML = expenses;
        this.balance.innerHTML = balance;
    }


    updateExpenseBalance(expense){
        this.expenses.innerHTML = expense;
        this.balance.innerHTML += this.budgetAmount.innerHTML.toString() - expenses  ;

    }
    
deleteExpense(delAmount){
        const expense = (this.expenses.innerHTML =
            this.expenses.innerHTML.toString()-delAmount
            );
            this.updateExpenseBalance(expense);
    }
}

class expenseItem {
    ParentList=[];
    constructor(pL){
   this.ParentList=pL;
   this.updateBalance();

    }

    updateBalance(){
        let expenseAmount=0;
        for(const item of this.ParentList){
            expenseAmount+= +item.amount;
        }

        const balObj  = new Balance ();
        balObj.updateExpenseBalance(expenseAmount);
    }

    deleteExpenseItem(eid){
        let ItemIndex=0;
        for(const item of this.ParentList){
            if(item.ID == eid){
                balObj.deleteExpense(Item.amount);
                break;
            }
            itemIndex++;
        }
        this.renderExpensesItem(this.ParentList);
}
renderExpensesItem(expenseList){
    const expenseList = document.getElementById("expense-list");
    expenseList.innerHTML = "";
const getCurrency  = document.getElementById("currency");

    if(expenseList.length > 0){
        for(const expenseList of expenseList){
            const ItemRow = document.createElement("tr");
            ItemRow.innerHTML = `
            <td>${expenseItem.title}</td>
            <td><span ID  = " "> $ { getCurrency.value}</span>
                                  ${   expenseItem.amount} </td>
             <td>< button class = "del-btn "> </button></td>
            `;
             const delbtn = ItemRow.querySelector("del-btn");
             delbtn.addEventListener(
                "click ",
                  this.deleteExpenseItem.bind(this,expenseItem.ID)
             );
             expense_list.append(ItemRow);

            }
    }
        
    }
}

class App {
    constructor(){}
    static init(){
            this.enterBudget();
            this.addItem();
            document.getElementById(" reset-app-btn").addEventListener("click", ()=> {
              location.reload();  
            });
        }
static enterBudget(){
    const add_budget_btn = document.getElementById ("add-budget-btn");
    const getBudgetAmount = document.getElementById("budget");
    const currency = document.getElementById("currency");
    const getCurrency = document.getElementByID("getCurrency");
    
    add_budget_btn.addEventListener("click", () =>{
if(
    getBudgetAmount.Value.trim()== "" ||
    +budgetAmount.value<1 || 
    +budgetAmount.value
){
  alert("enter Integer Value ");
  getBudgetAmount.value = "";
   return;
    
}

else if(getCurrency.value.trim() === "") {
    alert("select Currency Symbol");
    return;
}
const balUp = new Balances ();
balUp.updateBudgetAmount(getBudgetAmount.value , 0);

for(const c of currency){
    c.innerHTML = getCurrency.value;
}

getBudgetAmount.value ="";
add_budget_btn.enabled=true;
document.querySelector(".add-expense-box"). classList.add("visible");
});
}


        
    
} 























