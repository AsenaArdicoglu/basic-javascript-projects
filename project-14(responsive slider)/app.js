(function() {
    const customerImage = document.querySelector('#customer-img');
    const customerName = document.querySelector('#customer-name');
    const customerText = document.querySelector('#customer-text');

    const btn = document.querySelectorAll('.btn');
    let index = 0;
    const customers =  []

    function Customer(img, name, text) {
        this.img = img;
        this.name = name;
        this.text = text;
    }

    function createCustomer(img, name, text) {
        let Img =  `./images/${img}.jpeg`
        let customer = new Customer(Img, name, text)

        customers.push(customer)
    }
    createCustomer(0,'Asena', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quasi quis ut quaerat repellat, rem enim non ullam! Quidem, facere.' )
    createCustomer(1,'Fatih', 'The man said no Hey Gringo Whoa you better stay outta mexico and I said whoa tranquilo Amigo now I am lover no fighter' )
    createCustomer(2,'Medine', 'I got two strong legs whoa just like my father said yeah on your feet little man now go out and take what you can' )
    createCustomer(3,'Meryem', 'Oh cause they will run wild time has come as well all oh go down yeah but for the fall oh my do you dare to look him right in the eyes' )
    createCustomer(4,'Zeynep', 'You have got the stay skinny dont you girl you have got to stay pretty while you can you have got the stay hungry for the fans ' )
    
    btn.forEach(function(button) {
        button.addEventListener('click', function(e) {
            if( e.target.parentElement.classList.contains('prevBtn')) {
                if (index === 0) {
                    index = customers.length
                }
                index--
                customerImage.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text
            }
            if( e.target.parentElement.classList.contains('nextBtn')) {
                index++
                if (index === customers.length) {
                    index = 0
                }
               
                customerImage.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text
            }
        })
    });
}) ()
