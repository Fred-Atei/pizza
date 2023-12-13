(function(){
    var animationInput = document.createElement('input');
    animationInput.setAttribute('name', 'animation');
    animationInput.setAttribute('type', 'hidden');
    document.body.append(animationInput);
  })();

  $(document).ready(function () {
    $('#btnSubmit').click(function (event) {
        $('#mySummary').show();
        var flavorType = $('#preferredFlavor').val();
        var flavorsize = $('#size').val();
        var flavorCrust = $('#crust').val();
        var toppingValue = $("input[name='top']:checked").val();


        var userInput = new Order(flavor(), size(), crust(), toppings(), number());
        console.log(userInput);
        var totalCost = userInput.totoalcost();

        $('#typeOfPizza').text(flavorType);
        $('#typeOfSize').text(flavorsize);
        $('#typeOfTopping').text(toppingValue);
        $('#typeOfCrust').text(flavorCrust);
        $('#typeOfQty').text(number());
        $('#typeOfCost').text(totalCost);


    })

    $('.pickUp').click(function () {
        alert('Thanks for your Order. Kindly Pick it up at the counter');
    })

    $('.deliver').click(function () {
        $('.cdata-overlay').show();
    })
    $('.go').click(function () {
        alert('Your Order will be delivered soon. Thank You')
    })



    function flavor() {
        var pizzaFlavor = document.getElementById('preferredFlavor').value;

        if (pizzaFlavor === 'Cheese only') {
            return 2.00
        }
        else if (pizzaFlavor === 'BBQ Chicken') {
            return 3.00
        }
        else if (pizzaFlavor === 'Chicken Tikka') {
            return 3.00
        }
        else if (pizzaFlavor === 'Pineapple Pizza') {
            return 2.50
        }
        else if (pizzaFlavor === 'Meat Town') {
            return 3.50
        }
        else if (pizzaFlavor === 'Steak Pizza') {
            return 3.00
        }
        else if (pizzaFlavor === 'pesto Pizza') {
            return 2.50
        }
        else if (pizzaFlavor === 'Vegan Cheese') {
            return 2.50
        }
        else if (pizzaFlavor === 'Crumble Tofu') {
            return 2.50
        }
        else if (pizzaFlavor === 'Mushroom Pizza') {
            return 2.50
        }
        

    }

    function size() {
        var pizzaSize = document.getElementById('size').value;
        if (pizzaSize === 'Small') {
            return 5.00
        }
        else if (pizzaSize === 'Regular') {
            return 10.00
        }
        else if (pizzaSize === 'Large') {
            return 15.00
        }

    }
    function crust() {
        var preferredCrust = document.getElementById('crust').value;
        if (preferredCrust === 'Crispy') {
            return 1.70
        }
        else if (preferredCrust === 'Stuffed') {
            return 2.00
        }
        else if (preferredCrust === 'Glutten Free') {
            return 2.50
        }
    }
    function toppings() {
        return 1.90
    }
    function number() {
        var pizzaNumber = document.getElementById('quantity').value;
        return parseInt(pizzaNumber);

    }
    function Order(flavor, size, crust, topping, quantity) {
        this.newFlavor = flavor;
        this.newSize = size;
        this.newCrust = crust;
        this.newTopping = topping;
        this.newQuantity = quantity;
    }

    Order.prototype.totoalcost = function () {
        return ((this.newFlavor + this.newCrust + this.newSize + this.newCrust + this.newTopping) * this.newQuantity)
    }


});