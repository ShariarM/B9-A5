function innerTextFinder(seatId){
    const seatName =  document.getElementById(seatId);
    const seat = seatName.innerText;
    return seat;
   }
   
   function setPrice(id1, id2){
     
     const seatName = innerTextFinder(id1);
     
    
     
     const div = document.getElementById(id2);
    
     const counts = div.childElementCount;
     
     if(div.textContent.includes(seatName)){
       alert("Seat already selected");
     }else{
       const div2 = document.createElement('div');
     
     
     var classesToAdd = ["flex", "justify-around", "lg:justify-between", "w-auto", "lg:w-[430px]", "mb-4"];
     classesToAdd.forEach(function(className) {
       div2.classList.add(className);
     });
   
     
     const count = document.getElementById('counter');
     
     const totalPrices = document.getElementById('total-price');
     const grandPrices = document.getElementById('grand-price');
     
     // 40 set counting
     const leftSeat = document.getElementById('seat-left');
     
     
   
     // checking for seat count
     if(counts >= 4){
       alert("You have already selected the maximum number of seats.");
       
     }else{
       toggleSeatBackgroundColor(id1);
       count.innerHTML = counts + 1;
       const remainingSeat = leftSeat.innerText -1;
       leftSeat.innerText = remainingSeat;
       div2.innerHTML = `<p class="text-[#03071280] text-[14px] lg:text-[16px]">${seatName}</p>
     <p class="text-[#03071280] text-[14px] lg:text-[16px]">Economy</p>
     <p class="text-[#03071280] text-[14px] lg:text-[16px]">550</p>`
     div.appendChild(div2);
     totalPrices.innerHTML = (counts+1) * 550;
     grandPrices.innerHTML = (counts+1) * 550;
     const phoneNumber = document.getElementById('phone-number');
    
     
    
     }
     }
     
     // background-color of seat
     
     
   }
   
   function toggleSeatBackgroundColor(selectedSeat){
     let seat = document.getElementById(selectedSeat);
     
     seat.classList.toggle("bg-green-500");
     seat.classList.toggle("text-white");
   
   
     clickingEvent(selectedSeat);
   }
   
   function clickingEvent(clickId){
     document.getElementById(clickId).addEventListener("click", function() {
       if(selectedSeats.includes(clickId)){
         
       }
     });
   }
   
   
   function nextButton(){
     const div = document.getElementById('seat-name');
     const phoneNumber = document.getElementById('phone-number');
     if(div.innerHTML != '' && phoneNumber.value != ''){
       const nextButton = document.getElementById('next-button').removeAttribute('disabled');
     }
   }
   
   function applyButton(){
     const applyBtn = document.getElementById('apply-button');
     const coupon = document.getElementById('coupon');
   
    
   
     if(coupon.value !== ''){
       applyBtn.removeAttribute('disabled');
     }
   }
   
   
   function discount() {
     const coupon = document.getElementById('coupon').value;
     
     
     const grandPriceElement = document.getElementById('grand-price');
     let grandPrice = parseInt(grandPriceElement.textContent);
   
     if (coupon === 'NEW15') {
         const discount = grandPrice;
         const discountedPrice = discount * 0.15;
         const finalPrice = discount - discountedPrice;
         grandPriceElement.innerHTML = finalPrice;
         const coupon = document.getElementById('coupon');
         coupon.classList.add('hidden');
         const applyButton = document.getElementById('apply-button');
         applyButton.classList.add('hidden');
     } else if (coupon === 'Couple 20') {
         const discount = grandPrice;
         const discountedPrice = discount * 0.20;
         const finalPrice = discount - discountedPrice;
         grandPriceElement.innerHTML = finalPrice;
         const coupon = document.getElementById('coupon');
         coupon.classList.add('hidden');
         const applyButton = document.getElementById('apply-button');
         applyButton.classList.add('hidden');
     } else{
       window.alert("Wrong coupon code! Please provide a valid coupon code.")
     }
   
   
   
   }
   
   
   
   document.getElementById('scrollButton').addEventListener('click', function() {
     var section = document.getElementById('sectionToScrollTo');
     section.scrollIntoView({ behavior: 'smooth' });
   });
   
   
   