const btnPlus = document.getElementsByClassName("plus")
console.log(btnPlus)
for (let i = 0; i < btnPlus.length; i++) {
    btnPlus[i].onclick = function () {
        this.nextElementSibling.nextElementSibling.removeAttribute('disabled')
        this.nextElementSibling.innerHTML++

        let Price = document.getElementsByClassName("amount")[i].innerHTML.split("$")[0].replace(",", ".") / (this.nextElementSibling.innerHTML - 1) * this.nextElementSibling.innerHTML
        document.getElementsByClassName("amount")[i].innerHTML = Price.toString().replace(".", ",") + " $"
        let amounts=document.getElementsByClassName("amount")
        console.log(amounts)
        let subTotal =0;
        for (let index = 0; index < amounts.length; index++) {
            const element = Number(amounts[index].innerHTML.split("$")[0].replace(",", "."));
            console.log(element)
            subTotal+=element
        }
        console.log(subTotal,    document.getElementsByClassName("total-amount")[0])
        document.getElementsByClassName("total-amount")[0].innerHTML = subTotal.toString().replace('.', ',') + ' $';
    }




}
const btnMoins = document.getElementsByClassName("moins")
console.log(btnMoins)
for (let i = 0; i < btnMoins.length; i++) {
    btnMoins[i].onclick = function () {
        if (this.previousElementSibling.innerHTML > 1) {
            this.previousElementSibling.innerHTML--
            console.log(this.previousElementSibling.innerHTML)
            const oldPrice= document.getElementsByClassName("amount")[i].innerHTML.split("$")[0].replace(",", ".")
            console.log(oldPrice,Number(this.previousElementSibling.innerHTML)+1)
            let Price = oldPrice / (Number(this.previousElementSibling.innerHTML) +1)* this.previousElementSibling.innerHTML
            console.log(Price)
            document.getElementsByClassName("amount")[i].innerHTML = Price.toString().replace(".", ",") + " $"
            let amounts=document.getElementsByClassName("amount")
            console.log(amounts)
            let subTotal =0;
            for (let index = 0; index < amounts.length; index++) {
                const element = Number(amounts[index].innerHTML.split("$")[0].replace(",", "."));
                console.log(element)
                subTotal+=element
            }
            console.log(subTotal,    document.getElementsByClassName("total-amount")[0])
            document.getElementsByClassName("total-amount")[0].innerHTML = subTotal.toString().replace('.', ',') + ' $';
    
        }
        else {
            this.setAttribute('disabled', '');
            console.log(this)
        }

    }


}
const heart = document.getElementsByClassName("save")
console.log(heart)
for (let i = 0; i < heart.length; i++) {
    heart[i].onclick = function () {

        if (!this.style.color) {
            this.style.color = "red"
        }
        else {
            this.style.color = ""
        }
    }

}
const trash = document.getElementsByClassName("remove")
for (let i = 0; i < trash.length; i++) {
    trash[i].onclick = function () {
        console.log(this.parentNode)
        
        this.parentNode.parentNode.remove()
       document.getElementsByClassName("items")[0].innerHTML= trash.length+" items"
    }
    
}